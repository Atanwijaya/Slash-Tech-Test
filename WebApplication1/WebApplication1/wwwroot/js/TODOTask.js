(function ($) {
    $('#BtnSubmit').on('click', function () {
        var action = $(this).attr('data-action');
        var taskName = $('#TaskName').val();
        var dueDate = $('#DueDate').val();
        if (action === 'create') {

            Utility.AJAX("/api/TODOTask/Create", "POST", {
                taskName: taskName,
                dueDate: dueDate
            }).done(function () {
                alert('succeed insert task');
                window.location.reload();
            });
        }
        else {
            var id = $(this).attr('data-task-id');
            Utility.AJAX("/api/TODOTask/Update", "PUT", {
                id: id,
                taskName: taskName,
                dueDate: dueDate
            }).done(function () {
                alert('succeed update task');
                window.location.reload();
            });
        }
    });
    Utility.AJAX("/api/TODOTask/Get", "GET", null).done(function (todoTasks) {
        var dtColumns = [
            {
                "className": 'text-center align-middle',
                "orderable": false,
                "data": "taskName",
                "defaultContent": '<i class="fas fa-plus-circle"></i>',
                "title": "Task Name"
            },
            {
                "className": 'text-center align-middle',
                "orderable": false,
                "data": "dueDate",
                "render": function (data, type, row, meta) {
                    return (moment(data).format('l'));

                },
                "defaultContent": '<i class="fa fa-plus-pencil"></i>',
                "title": "Due Date"
            },
            {
                "className": 'text-center align-middle',
                "orderable": false,
                "data": "active",
                "render": function (data, type, row, meta) {
                    if (!data) {
                        return "No"
                    }
                    else
                        return "Yes"

                },
                "defaultContent": '<i class="fas fa-plus-circle"></i>',
                "title": "Active"
            },
            {
                "className": 'text-center align-middle',
                "orderable": false,
                "data": null,
                "defaultContent": '<i data-action="edit" class="fas fa-plus-circle"></i>',
                "title": "Edit"
            },
            {
                "className": 'text-center align-middle',
                "orderable": false,
                "data": null,
                "defaultContent": '<i data-action="delete" class="fa fa-trash"></i>',
                "title": "Delete"
            }
        ];

        var table = $('#tableContainer').DataTable({
            data: todoTasks,
            columns: dtColumns
        });
        $(table.table().header()).addClass('bg-info text-white');
        $('#tableContainer').on('click', 'tr', function (evt) {
            var tr = $(this);
            var rowDataObject = table.row(tr).data();
            var action = $(evt.target).attr('data-action')
            if (action === 'delete') {
                Utility.AJAX("/api/TODOTask/Delete/" + rowDataObject.id, "Delete", null).done(function () {
                    alert("success delete task " + rowDataObject.taskName);
                    window.location.reload();
                });
            }
            else if (action === 'edit') {
                $('#TaskName').val(rowDataObject.taskName);
                $('#DueDate').attr('value', moment(rowDataObject.dueDate).format('YYYY-MM-DD'));
                $('#BtnSubmit').attr('data-task-id', rowDataObject.id);
                $('#BtnSubmit').attr('data-action', 'edit');
                $('#BtnSubmit').html('Update');
            }
        });
    });

})(jQuery);
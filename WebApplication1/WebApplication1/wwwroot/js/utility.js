var Utility = {
    AJAX: function (url, method, data) {
        var ajaxDefaultOption = {
            url: url,
            method: method,
            headers: {
                "Content-Type": "application/json"
            },
            beforeSend: function () {
            }
        };
        if (data) {
            ajaxDefaultOption.data = JSON.stringify(data);
        }
        return $.ajax(ajaxDefaultOption).fail(function (jqXHR, any, errorTxt) {
            alert("Error! Status:" + jqXHR.status + ". Msg:" + errorTxt);
        });
    }
};

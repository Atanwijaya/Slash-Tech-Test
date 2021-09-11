
CREATE PROCEDURE GetUserByUserNamePass(@userName varchar(10), @password varchar(256))
as
begin

select * from users where UserName = @userName and Password = @password

end

go

CREATE PROCEDURE GetAllTodoTask
as
begin

select * from TODOTask

end
GO
CREATE PROCEDURE CreateTodoTask(@taskName varchar(256), @dueDate datetime)
as
begin

insert into TODOTask values(@taskName, @DueDate, 1)

end
GO
CREATE PROCEDURE UpdateTodoTask(@ID int, @taskName varchar(256), @dueDate datetime)
as
begin

update TODOTask set 
TaskName = @taskName,
DueDate =  @DueDate
where ID = @ID

end
GO
CREATE PROCEDURE DeleteTodoTask(@ID int)
as
begin

update TODOTask set Active = 0
where ID = @ID

end

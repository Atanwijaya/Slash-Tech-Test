drop table users
drop table todotask

create table Users (
ID int identity(1,1) primary key,
UserName varchar(10) unique not null,
Password varchar(256) not null,
FirstName varchar(256) not null,
LastName varchar(256) null,
Email varchar(256) not null,
CreatedDate datetime not null,
UpdatedDate datetime not null,
CreatedBy varchar(10) not null,
UpdatedBy varchar(10) not null
)

create table TODOTask (
ID int identity(1,1) primary key,
TaskName varchar(256) not null,
DueDate datetime not null,
Active bit not null
)



insert into users values('admin','admin','The testing user', null, 'me@hotmail.com', getdate(),getdate(),'admin','admin')
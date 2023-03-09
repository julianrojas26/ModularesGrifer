create database ModularesGrifer;

use ModularesGrifer;

create table administrador(
	id int not null auto_increment,
	usuario varchar(100) not null,
    contraseña varchar(150) not null,
    primary key (id)
);

create table producto(
	id int not null auto_increment,
	nombre varchar(200) not null,
    dimensiones varchar(200) not null,
    imagen longblob,
    primary key (id)
);

select * from administrador;
select * from producto;
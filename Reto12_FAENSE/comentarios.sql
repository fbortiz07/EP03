/*
SQLyog Enterprise - MySQL GUI v8.1 
MySQL - 5.6.17 : Database - comentarios
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

CREATE DATABASE /*!32312 IF NOT EXISTS*/`comentarios` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `comentarios`;

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `idusuario` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT '',
  `usuario` varchar(100) DEFAULT NULL,
  `clave` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `fecha` varchar(20) DEFAULT NULL,
  `fecha_tiempo` int(11) DEFAULT NULL,
  PRIMARY KEY (`idusuario`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

/*Data for the table `users` */

insert  into `users`(idusuario,nombre,usuario,clave,email,fecha,fecha_tiempo) values (1,'fabian','undefined','undefined','w@gmail.com','undefined',0),(2,'fabian allan','undefined','12345','w1@gmail.com','undefined',0),(3,'allan','alitan','12345678','a@gmail.com','undefined',0),(4,'fabio','kike','12345','k@gmail.com','undefined',0),(5,'sergio','ser','$2a$10$sQfHCSnENpUh9ct8htAEgu8q6G8OE.CiwYI.RG5zhMW4nGaGYzzOa','s@gmail.com','undefined',NULL);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;

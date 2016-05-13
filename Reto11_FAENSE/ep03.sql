/*
SQLyog Enterprise - MySQL GUI v8.1 
MySQL - 5.6.17 : Database - ep03
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

CREATE DATABASE /*!32312 IF NOT EXISTS*/`ep03` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `ep03`;

/*Table structure for table `encuesta` */

DROP TABLE IF EXISTS `encuesta`;

CREATE TABLE `encuesta` (
  `id_pregunta` int(15) NOT NULL AUTO_INCREMENT,
  `pregunta` varchar(30) DEFAULT NULL,
  `token` varchar(50) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `total` int(15) DEFAULT NULL,
  PRIMARY KEY (`id_pregunta`),
  KEY `token` (`token`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

/*Data for the table `encuesta` */

insert  into `encuesta`(id_pregunta,pregunta,token,fecha,total) values (1,'¿Cual es su color favorito?','5654654654645646','2016-05-12',1),(2,'¿cual es su marca de auto favo','123','2015-03-21',5),(4,'¿cual es su equipo de futbol f',NULL,'2016-05-12',3);

/*Table structure for table `respuestas` */

DROP TABLE IF EXISTS `respuestas`;

CREATE TABLE `respuestas` (
  `id_respuesta` int(15) NOT NULL AUTO_INCREMENT,
  `respuesta` varchar(30) DEFAULT NULL,
  `id_pregunta` int(15) DEFAULT NULL,
  `cantidad` int(15) DEFAULT NULL,
  `porcentaje` decimal(15,0) DEFAULT NULL,
  PRIMARY KEY (`id_respuesta`),
  KEY `FK_respuestas` (`id_pregunta`),
  CONSTRAINT `FK_respuestas` FOREIGN KEY (`id_pregunta`) REFERENCES `encuesta` (`id_pregunta`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

/*Data for the table `respuestas` */

insert  into `respuestas`(id_respuesta,respuesta,id_pregunta,cantidad,porcentaje) values (9,'Millonarios',4,7,NULL),(10,'nacional',4,7,NULL),(11,'santafe ',4,1,NULL);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;

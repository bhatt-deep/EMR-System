/*
SQLyog Ultimate v12.09 (64 bit)
MySQL - 10.4.14-MariaDB : Database - emr
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`emr` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `emr`;

/*Table structure for table `_evolutions` */

DROP TABLE IF EXISTS `_evolutions`;

CREATE TABLE `_evolutions` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `titleDown` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `batch` int(11) DEFAULT NULL,
  `checksum` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Table structure for table `diagnostic_report` */

DROP TABLE IF EXISTS `diagnostic_report`;

CREATE TABLE `diagnostic_report` (
  `report_id` int(11) NOT NULL AUTO_INCREMENT,
  `last_updated` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `patient_id` int(11) DEFAULT NULL,
  `respiratory_rate` int(11) DEFAULT NULL,
  `oxygen_saturation` int(11) DEFAULT NULL,
  `supplemental_oxygen` int(11) DEFAULT NULL,
  `body_temperature` int(11) DEFAULT NULL,
  `systolic_bp` int(11) DEFAULT NULL,
  `heart_rate` int(11) DEFAULT NULL,
  `level_of_consciousness` int(11) DEFAULT NULL,
  PRIMARY KEY (`report_id`),
  KEY `patient_id` (`patient_id`),
  CONSTRAINT `diagnostic_report_ibfk_1` FOREIGN KEY (`patient_id`) REFERENCES `patient` (`patient_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

/*Table structure for table `encounter` */

DROP TABLE IF EXISTS `encounter`;

CREATE TABLE `encounter` (
  `encounter_id` int(11) NOT NULL AUTO_INCREMENT,
  `last_updated` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `reason` text NOT NULL,
  `status` text NOT NULL,
  `note` longtext DEFAULT NULL,
  `patient_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`encounter_id`),
  KEY `patient_id` (`patient_id`),
  KEY `user_id` (`user_id`),
  KEY `encounter_index_0` (`encounter_id`),
  CONSTRAINT `encounter_ibfk_1` FOREIGN KEY (`patient_id`) REFERENCES `patient` (`patient_id`),
  CONSTRAINT `encounter_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Table structure for table `medication_usage` */

DROP TABLE IF EXISTS `medication_usage`;

CREATE TABLE `medication_usage` (
  `medication_usage_id` int(11) NOT NULL AUTO_INCREMENT,
  `medication_name` text NOT NULL,
  `medication_dose` text NOT NULL,
  `medication_frequency` text NOT NULL,
  `history_id` int(11) NOT NULL,
  PRIMARY KEY (`medication_usage_id`),
  KEY `history_id` (`history_id`),
  CONSTRAINT `history_id` FOREIGN KEY (`history_id`) REFERENCES `patient_history` (`history_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Table structure for table `patient` */

DROP TABLE IF EXISTS `patient`;

CREATE TABLE `patient` (
  `patient_id` int(11) NOT NULL AUTO_INCREMENT,
  `fname` text NOT NULL,
  `lname` text NOT NULL,
  `prefix` text NOT NULL,
  `gender` text NOT NULL,
  `dob` date NOT NULL,
  `streetaddress` text DEFAULT NULL,
  `city` text DEFAULT NULL,
  `zipcode` text DEFAULT NULL,
  `state` text DEFAULT NULL,
  `cellphone` text NOT NULL,
  `email` text NOT NULL,
  `last_updated` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`patient_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

/*Table structure for table `patient_history` */

DROP TABLE IF EXISTS `patient_history`;

CREATE TABLE `patient_history` (
  `history_id` int(11) NOT NULL AUTO_INCREMENT,
  `immunisations` longtext DEFAULT NULL,
  `medical_issues` longtext DEFAULT NULL,
  `surgical_operations` longtext DEFAULT NULL,
  `allergies` longtext DEFAULT NULL,
  `exercise_frequency` text DEFAULT NULL,
  `drinks_alcohol` tinyint(1) DEFAULT NULL,
  `tobacco_used_past_5_years` tinyint(1) DEFAULT NULL,
  `uses_recreational_drugs` tinyint(1) DEFAULT NULL,
  `mental_health_history` text DEFAULT NULL,
  `family_history` text DEFAULT NULL,
  `patient_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `date` datetime NOT NULL,
  PRIMARY KEY (`history_id`),
  KEY `patient_id` (`patient_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `patient_history_ibfk_1` FOREIGN KEY (`patient_id`) REFERENCES `patient` (`patient_id`),
  CONSTRAINT `patient_history_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `added` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `username` text NOT NULL,
  `permissions` text NOT NULL,
  `passhash` text DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `username` (`username`) USING HASH
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

/*Table structure for table `userpatients` */

DROP TABLE IF EXISTS `userpatients`;

CREATE TABLE `userpatients` (
  `user_id` int(11) NOT NULL,
  `patient_id` int(11) NOT NULL,
  PRIMARY KEY (`user_id`,`patient_id`),
  KEY `patient_id` (`patient_id`),
  CONSTRAINT `userpatients_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `userpatients_ibfk_2` FOREIGN KEY (`patient_id`) REFERENCES `patient` (`patient_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

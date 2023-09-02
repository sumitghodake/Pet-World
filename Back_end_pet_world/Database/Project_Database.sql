CREATE DATABASE  IF NOT EXISTS `project_pet` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `project_pet`;
-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: project_pet
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `booking`
--

DROP TABLE IF EXISTS `booking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `booking` (
  `bid` int NOT NULL AUTO_INCREMENT,
  `vetid` int DEFAULT NULL,
  `buyerid` int DEFAULT NULL,
  `slotid` int NOT NULL,
  PRIMARY KEY (`bid`),
  KEY `fk_bid` (`vetid`),
  KEY `fk_buyerid` (`buyerid`),
  KEY `FK5lv5q3um313e7jiajbtexf6mu` (`slotid`),
  CONSTRAINT `FK5lv5q3um313e7jiajbtexf6mu` FOREIGN KEY (`slotid`) REFERENCES `time_slot` (`id`),
  CONSTRAINT `fk_bid` FOREIGN KEY (`vetid`) REFERENCES `veterinary` (`vetid`),
  CONSTRAINT `fk_buyerid` FOREIGN KEY (`buyerid`) REFERENCES `user` (`buyerid`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking`
--

LOCK TABLES `booking` WRITE;
/*!40000 ALTER TABLE `booking` DISABLE KEYS */;
INSERT INTO `booking` VALUES (1,10,7,3),(2,8,7,5),(3,11,7,8),(4,11,7,4),(5,10,7,11),(6,10,7,7);
/*!40000 ALTER TABLE `booking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `buyertable`
--

DROP TABLE IF EXISTS `buyertable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `buyertable` (
  `buyerid` int NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `adharno` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `loginid` int DEFAULT NULL,
  PRIMARY KEY (`buyerid`),
  KEY `FK8t5d1x2xj5fqelq7cj76166fn` (`loginid`),
  CONSTRAINT `FK8t5d1x2xj5fqelq7cj76166fn` FOREIGN KEY (`loginid`) REFERENCES `logintable` (`loginid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `buyertable`
--

LOCK TABLES `buyertable` WRITE;
/*!40000 ALTER TABLE `buyertable` DISABLE KEYS */;
/*!40000 ALTER TABLE `buyertable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `logintable`
--

DROP TABLE IF EXISTS `logintable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `logintable` (
  `loginid` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `usertypeid` int NOT NULL,
  `status` int NOT NULL,
  PRIMARY KEY (`loginid`),
  UNIQUE KEY `loginid_UNIQUE` (`loginid`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  KEY `fk_user_idx` (`usertypeid`),
  CONSTRAINT `fk_user` FOREIGN KEY (`usertypeid`) REFERENCES `usertypetable` (`usertypeid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=99 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `logintable`
--

LOCK TABLES `logintable` WRITE;
/*!40000 ALTER TABLE `logintable` DISABLE KEYS */;
INSERT INTO `logintable` VALUES (80,'sumit','sumit@123',2,1),(81,'kunal','Kunal@123',1,1),(83,'RAHULg','Rahul@123',2,1),(84,'shree','Shree@123',2,1),(85,'Adya','adu@123',4,0),(86,'Sahil','Shaikh',3,1),(87,'Bakul','Joshi',4,0),(88,'Pratik','Pratik@123',1,1),(89,'Sushil','sushil@123',2,1),(90,'Prashant','Prashant@123',4,0),(97,'Prashant12','Prashant@123',4,0),(98,'Yohan_Jirage','Yohan@0007',4,1);
/*!40000 ALTER TABLE `logintable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pet_order`
--

DROP TABLE IF EXISTS `pet_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pet_order` (
  `orderid` int NOT NULL AUTO_INCREMENT,
  `orderdate` date NOT NULL,
  `petid` int NOT NULL,
  `sellerid` int NOT NULL,
  `buyerid` int NOT NULL,
  `paymenttype` varchar(45) NOT NULL,
  `transactionid` int NOT NULL,
  `amount` varchar(45) NOT NULL,
  PRIMARY KEY (`orderid`),
  UNIQUE KEY `orderid_UNIQUE` (`orderid`),
  KEY `fk_buy_idx` (`buyerid`),
  KEY `fk_sell_idx` (`sellerid`),
  KEY `fk_pet_idx` (`petid`),
  CONSTRAINT `FKjc2ayoink727rsnl097wlijyf` FOREIGN KEY (`petid`) REFERENCES `pet_table` (`petid`),
  CONSTRAINT `FKl3u6qd78wm5lopn13vv3jx7q9` FOREIGN KEY (`buyerid`) REFERENCES `user` (`buyerid`),
  CONSTRAINT `FKogd5k9h5y5lnlut3h7nkps9ma` FOREIGN KEY (`sellerid`) REFERENCES `sellertable` (`sellerid`)
) ENGINE=InnoDB AUTO_INCREMENT=117 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pet_order`
--

LOCK TABLES `pet_order` WRITE;
/*!40000 ALTER TABLE `pet_order` DISABLE KEYS */;
INSERT INTO `pet_order` VALUES (94,'2023-08-26',63,24,7,'Only cash on delivery',1024,'8000'),(95,'2023-08-26',63,24,7,'Only cash on delivery',1024,'8000'),(96,'2023-08-26',65,22,7,'Only cash on delivery',1022,'10000'),(97,'2023-08-26',64,22,7,'Only cash on delivery',1022,'8000'),(98,'2023-08-26',66,22,7,'Only cash on delivery',1022,'10000'),(99,'2023-08-26',63,24,7,'Only cash on delivery',1024,'8000'),(100,'2023-08-26',64,22,7,'Only cash on delivery',1022,'8000'),(101,'2023-08-26',65,22,7,'Only cash on delivery',1022,'10000'),(102,'2023-08-26',65,22,7,'Only cash on delivery',1022,'10000'),(103,'2023-08-26',65,22,7,'Only cash on delivery',1022,'10000'),(104,'2023-08-26',65,22,7,'Only cash on delivery',1022,'10000'),(105,'2023-08-26',66,22,7,'Only cash on delivery',1022,'10000'),(106,'2023-08-26',66,22,7,'Only cash on delivery',1022,'10000'),(107,'2023-08-26',63,24,7,'Only cash on delivery',1024,'8000'),(108,'2023-08-26',64,22,8,'Only cash on delivery',1022,'8000'),(109,'2023-08-26',64,22,8,'Only cash on delivery',1022,'8000'),(110,'2023-08-26',64,22,8,'Only cash on delivery',1022,'8000'),(111,'2023-08-26',64,22,8,'Only cash on delivery',1022,'8000'),(112,'2023-08-27',63,24,7,'Only cash on delivery',1024,'8000'),(113,'2023-08-27',64,22,7,'Only cash on delivery',1022,'8000'),(114,'2023-08-28',65,22,7,'Only cash on delivery',1022,'10000'),(115,'2023-08-31',66,22,7,'Only cash on delivery',1022,'10000'),(116,'2023-08-31',66,22,7,'Only cash on delivery',1022,'10000');
/*!40000 ALTER TABLE `pet_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pet_table`
--

DROP TABLE IF EXISTS `pet_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pet_table` (
  `petid` int NOT NULL AUTO_INCREMENT,
  `petname` varchar(45) NOT NULL,
  `breed` varchar(45) DEFAULT NULL,
  `color` varchar(45) DEFAULT NULL,
  `gender` varchar(45) NOT NULL,
  `age` int NOT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `status` int DEFAULT '0',
  `type` varchar(45) NOT NULL,
  `sellerid` int NOT NULL,
  PRIMARY KEY (`petid`),
  UNIQUE KEY `petid_UNIQUE` (`petid`),
  UNIQUE KEY `petname_UNIQUE` (`petname`),
  KEY `fk_pet_idx` (`sellerid`),
  CONSTRAINT `fk_pet` FOREIGN KEY (`sellerid`) REFERENCES `sellertable` (`sellerid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pet_table`
--

LOCK TABLES `pet_table` WRITE;
/*!40000 ALTER TABLE `pet_table` DISABLE KEYS */;
INSERT INTO `pet_table` VALUES (63,'monti123','German Shephard','BrownWish','Male',2,8000.00,1,'Dog',24),(64,'oreo','labra','brown','Male',1,8000.00,1,'dog',22),(65,'Jocky','labradour','white','Male',5,10000.00,1,'dog',22),(66,'Monty','Doberman','Black','Male',2,10000.00,1,'Dog',22),(67,'kali','Labrador','brown','on',5,5000.00,0,'Dog',25);
/*!40000 ALTER TABLE `pet_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `qualification`
--

DROP TABLE IF EXISTS `qualification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `qualification` (
  `qualificationid` int NOT NULL,
  `qualification` varchar(45) NOT NULL,
  PRIMARY KEY (`qualificationid`),
  UNIQUE KEY `qualificationid_UNIQUE` (`qualificationid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `qualification`
--

LOCK TABLES `qualification` WRITE;
/*!40000 ALTER TABLE `qualification` DISABLE KEYS */;
INSERT INTO `qualification` VALUES (1,'Bachelor of Veterinary Science (BVSc)'),(2,'BVSc Veterinary Surgery and Radiology'),(3,'BVSc Veterinary Microbiology'),(4,'BVSc Animal Genetics and Breeding'),(5,'BVSc Veterinary Pathology'),(6,'BVSc Animal Nutrition');
/*!40000 ALTER TABLE `qualification` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sellertable`
--

DROP TABLE IF EXISTS `sellertable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sellertable` (
  `sellerid` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `email` varchar(100) NOT NULL,
  `address` varchar(200) NOT NULL,
  `phoneno` varchar(10) NOT NULL,
  `adharno` varchar(12) NOT NULL,
  `loginid` int NOT NULL,
  PRIMARY KEY (`sellerid`),
  UNIQUE KEY `sellerid_UNIQUE` (`sellerid`),
  KEY `fk_seller_idx` (`loginid`),
  CONSTRAINT `fk_seller` FOREIGN KEY (`loginid`) REFERENCES `logintable` (`loginid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sellertable`
--

LOCK TABLES `sellertable` WRITE;
/*!40000 ALTER TABLE `sellertable` DISABLE KEYS */;
INSERT INTO `sellertable` VALUES (22,'Sumit','Ghodake','sumitg5088@gmail.com','Pune','8650665255','123456789012',80),(23,'Rahul','Gaherwar','rahul123@gmail.cim','Pune','1234567897','123456789123',83),(24,'Shree','Wadgaonkar','shree@gmail.com','pune','8865446545','698635478962',84),(25,'Sushil','Mankar','sushil@gmail.com','pune','9822076581','654654544665',89);
/*!40000 ALTER TABLE `sellertable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shelter`
--

DROP TABLE IF EXISTS `shelter`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shelter` (
  `shelterid` int NOT NULL AUTO_INCREMENT,
  `sheltername` varchar(100) NOT NULL,
  `address` varchar(200) NOT NULL,
  `phone` varchar(10) NOT NULL,
  PRIMARY KEY (`shelterid`),
  UNIQUE KEY `shelterid_UNIQUE` (`shelterid`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shelter`
--

LOCK TABLES `shelter` WRITE;
/*!40000 ALTER TABLE `shelter` DISABLE KEYS */;
INSERT INTO `shelter` VALUES (1,'Soft hearts sancturary','Pune','9730800121'),(2,'Soft hearts sancturary1','Akola','9740800121'),(3,'Soft hearts sancturary3','Latur','9730800123'),(4,'Soft hearts sancturary4','Mumbai','9730800124');
/*!40000 ALTER TABLE `shelter` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `time_slot`
--

DROP TABLE IF EXISTS `time_slot`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `time_slot` (
  `id` int NOT NULL AUTO_INCREMENT,
  `end` varchar(255) DEFAULT NULL,
  `start` varchar(255) DEFAULT NULL,
  `status` tinyint DEFAULT '1',
  `vid` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK3xod421tbw7prpvntk399wfyh` (`vid`),
  CONSTRAINT `FK3xod421tbw7prpvntk399wfyh` FOREIGN KEY (`vid`) REFERENCES `veterinary` (`vetid`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `time_slot`
--

LOCK TABLES `time_slot` WRITE;
/*!40000 ALTER TABLE `time_slot` DISABLE KEYS */;
INSERT INTO `time_slot` VALUES (1,'10:00:AM','09:00:AM',0,8),(2,'10:00:AM','09:00:AM',1,9),(3,'10:00:AM','09:00:AM',0,10),(4,'10:00:AM','09:00:AM',0,11),(5,'11:00:AM','10:00:AM',0,8),(6,'11:00:AM','10:00:AM',1,9),(7,'11:00:AM','10:00:AM',0,10),(8,'11:00:AM','10:00:AM',0,11),(9,'12:00:PM','11:00:AM',1,8),(10,'12:00:PM','11:00:AM',1,9),(11,'12:00:PM','11:00:AM',0,10),(12,'12:00:PM','11:00:AM',1,11);
/*!40000 ALTER TABLE `time_slot` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trainer`
--

DROP TABLE IF EXISTS `trainer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trainer` (
  `trainerid` int NOT NULL AUTO_INCREMENT,
  `fname` varchar(45) NOT NULL,
  `lname` varchar(45) NOT NULL,
  `regno` varchar(45) NOT NULL,
  `address` varchar(200) NOT NULL,
  `phone` varchar(10) NOT NULL,
  `description` varchar(200) DEFAULT NULL,
  `loginid` int NOT NULL,
  PRIMARY KEY (`trainerid`),
  UNIQUE KEY `trainerid_UNIQUE` (`trainerid`),
  KEY `fk_trainer_idx` (`loginid`),
  CONSTRAINT `fk_trainer` FOREIGN KEY (`loginid`) REFERENCES `logintable` (`loginid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trainer`
--

LOCK TABLES `trainer` WRITE;
/*!40000 ALTER TABLE `trainer` DISABLE KEYS */;
INSERT INTO `trainer` VALUES (7,'Sahil','Shaikh','789456123','pune','9420147896','daca',86);
/*!40000 ALTER TABLE `trainer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `buyerid` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `email` varchar(100) NOT NULL,
  `address` varchar(200) NOT NULL,
  `phone` varchar(10) NOT NULL,
  `adharno` varchar(12) NOT NULL,
  `loginid` int NOT NULL,
  PRIMARY KEY (`buyerid`),
  UNIQUE KEY `buyerid_UNIQUE` (`buyerid`),
  KEY `fk_buyer_idx` (`loginid`),
  CONSTRAINT `fk_buyer` FOREIGN KEY (`loginid`) REFERENCES `logintable` (`loginid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (7,'Kunal','Bhakhare','kunal@gmail.com','Nagpur','4569875266','256348795566',81),(8,'Pratik','Patil','pratik@gmail.com','Pune','1234567888','123456789012',88);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usertypetable`
--

DROP TABLE IF EXISTS `usertypetable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usertypetable` (
  `usertypeid` int NOT NULL AUTO_INCREMENT,
  `usertype` varchar(45) NOT NULL,
  PRIMARY KEY (`usertypeid`),
  UNIQUE KEY `usertypeid_UNIQUE` (`usertypeid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usertypetable`
--

LOCK TABLES `usertypetable` WRITE;
/*!40000 ALTER TABLE `usertypetable` DISABLE KEYS */;
INSERT INTO `usertypetable` VALUES (1,'buyer'),(2,'seller'),(3,'trainer'),(4,'veterinary'),(5,'admin');
/*!40000 ALTER TABLE `usertypetable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `veterinary`
--

DROP TABLE IF EXISTS `veterinary`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `veterinary` (
  `vetid` int NOT NULL AUTO_INCREMENT,
  `vetname` varchar(45) NOT NULL,
  `regno` varchar(45) NOT NULL,
  `hospitalname` varchar(100) NOT NULL,
  `qualificationid` int NOT NULL,
  `phone` varchar(10) NOT NULL,
  `address` varchar(200) NOT NULL,
  `loginid` int NOT NULL,
  PRIMARY KEY (`vetid`),
  UNIQUE KEY `vetid_UNIQUE` (`vetid`),
  KEY `fk_veterinary_idx` (`loginid`),
  KEY `fk_qualificationid_idx` (`qualificationid`),
  CONSTRAINT `fk_qualificationid` FOREIGN KEY (`qualificationid`) REFERENCES `qualification` (`qualificationid`),
  CONSTRAINT `fk_veterinary` FOREIGN KEY (`loginid`) REFERENCES `logintable` (`loginid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `veterinary`
--

LOCK TABLES `veterinary` WRITE;
/*!40000 ALTER TABLE `veterinary` DISABLE KEYS */;
INSERT INTO `veterinary` VALUES (8,'Aditya','1236','Sparsh Clinic',5,'9866575665','Solapur',85),(9,'Bakul Joshi','1234','Pet Clinic',4,'9420147896','Nagpur',87),(10,'Prashant Awate','5698','Lavendour hospital',5,'9896674336','Pune',97),(11,'Yohan','123','Sanjivni',3,'9049040007','Pune',98);
/*!40000 ALTER TABLE `veterinary` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-02 12:30:50

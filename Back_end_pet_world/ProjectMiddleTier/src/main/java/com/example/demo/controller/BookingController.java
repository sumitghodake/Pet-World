 package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Booking;

import com.example.demo.entities.Buyer;

import com.example.demo.entities.Veterinary;
import com.example.demo.service.BookingService;

import com.example.demo.service.VeterinaryService;

//import com.example.demo.entities.Barber;
//import com.example.demo.entities.Booking;
//import com.example.demo.entities.Bookingrjs;
//import com.example.demo.entities.City;
//import com.example.demo.entities.Customer;
//import com.example.demo.entities.Salon;
//import com.example.demo.entities.SalonRegistration;
//import com.example.demo.entities.Servic;
//import com.example.demo.entities.TimeSlot;
//import com.example.demo.services.BarberService;
//import com.example.demo.services.BookingService;
//import com.example.demo.services.CustomerService;
//import com.example.demo.services.ServicesService;
//import com.example.demo.services.TimeSlotService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class BookingController {
	
	@Autowired
	BookingService bookserv;
	
	@Autowired
	VeterinaryService barserv;

	
	
	
	

	
	
	
}

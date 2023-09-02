package com.example.demo.controller;

import java.awt.print.Book;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Booking;
import com.example.demo.entities.Buyer;
import com.example.demo.entities.TimeSlot;
import com.example.demo.entities.Veterinary;
import com.example.demo.repositories.BookingRepository;
import com.example.demo.service.BookingService;
import com.example.demo.service.BuyerServices;
import com.example.demo.service.TimeSlotService;
import com.example.demo.service.VeterinaryService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class TimeSlotController {

	@Autowired
	TimeSlotService tserv;
	
	@Autowired
	VeterinaryService vserv;
	
	@Autowired
	BuyerServices bserv;
	
	@Autowired 
	BookingService bookserv;
	
	@GetMapping("/getSlotsById")
	public List<TimeSlot> getTimeSlots(@RequestParam int vid)
	{
		List<TimeSlot> tlist = tserv.getTimeSlots(vid);
		return tlist;
	}
	
	@GetMapping("/bookSlot")
	public Booking bookSlot(@RequestParam int buyerid, @RequestParam int slotid,@RequestParam int vid)
	{

		int st =  tserv.bookSlot( buyerid, slotid);
		
		
		Veterinary v = vserv.getVeterinaryWithid(vid);
		System.out.println("in BookSlot");
		Buyer buy = bserv.getbyId(buyerid);
		TimeSlot t = tserv.getSlotById(slotid);
		Booking b = new Booking(t,buy,v);
		
		Booking book = null;
	
			
			 book = bookserv.saveBooking(b);
		
		return book;
	}
}

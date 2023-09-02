package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Booking;
import com.example.demo.repositories.BookingRepository;

@Service
public class BookingService {

	@Autowired
	BookingRepository brepo;
	
	public Booking saveBooking(Booking b)
	{
		return brepo.save(b);
	}
}

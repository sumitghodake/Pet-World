package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.entities.TimeSlot;
import com.example.demo.repositories.TimeSlotRepo;

@Service
public class TimeSlotService {
	
	
	@Autowired 
	TimeSlotRepo trepo;
	
	public List<TimeSlot> getTimeSlots(int vid)
	{
		List<TimeSlot> tlist = trepo.getTimeSlots(vid);
		return tlist;
	}
	
	
	public int bookSlot(int buyerid, int slotid)
	{
		return trepo.bookSlot( slotid );
	}
	
	public TimeSlot getSlotById(int id) 
	{
		
		Optional<TimeSlot> tr = trepo.findById(id);
		TimeSlot t = null;
		try
		{
			t = tr.get();
			
		}
		catch (Exception e) {
			// TODO: handle exception
		}
		return t;
	}

}

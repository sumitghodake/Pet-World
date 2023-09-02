package com.example.demo.repositories;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.TimeSlot;


@Transactional
@Repository
public interface TimeSlotRepo extends JpaRepository<TimeSlot, Integer> {

	@Query(value = "select * from time_slot where vid = :vid and status = true" , nativeQuery = true)
	public List<TimeSlot> getTimeSlots(int vid);
	
//	 @Transactional
//	    @Modifying
//	    @Query(value = "UPDATE time_slot SET status = false WHERE id = :slotId", nativeQuery = true)
//	  public int bookSlot(@Param("slotId") int slotId);
	
	@Modifying
	@Query("UPDATE TimeSlot t SET t.status = false WHERE t.id = :slotId")
	public int bookSlot(int slotId);
}

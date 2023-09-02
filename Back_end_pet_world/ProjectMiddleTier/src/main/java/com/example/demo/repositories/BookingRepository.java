package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Booking;


@Repository
public interface BookingRepository extends JpaRepository<Booking, Integer> {

//	List<Booking> findByBarber_BarberId(int barber_id);

}

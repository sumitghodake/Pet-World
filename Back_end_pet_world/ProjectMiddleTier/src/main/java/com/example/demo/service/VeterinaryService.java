package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.example.demo.entities.Login;
import com.example.demo.entities.Veterinary;
import com.example.demo.repositories.VeterinaryRepository;

@Service
public class VeterinaryService {

	@Autowired
	VeterinaryRepository vrepo;
	
	public Veterinary getVeterinary(int loginid)
	{
		return vrepo.getVeterinary(loginid);
	}
	
	public Veterinary saveVeterinary(Veterinary v)
	{
		return vrepo.save(v);
	}
	
	public List <Veterinary> getAll()
	{
		return vrepo.findAll();
	}
	
	public List<Veterinary> getVeterinaryWithStatus()
	{
		return vrepo.getVeterinarys();
	}
	
	public Veterinary getVeterinaryWithid(int vetid)
	{
		return vrepo.getVeterinaryWithid(vetid);
	}
	
	public List<Veterinary> getAllVet(String city)
	{
		return vrepo.getAllvet(city);
	}
}

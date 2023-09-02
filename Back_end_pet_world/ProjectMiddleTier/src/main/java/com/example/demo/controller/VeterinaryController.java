package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Login;
import com.example.demo.entities.Qualification;
import com.example.demo.entities.Usertype;
import com.example.demo.entities.Veterinary;
import com.example.demo.entities.VeterinaryRegister;
import com.example.demo.service.LoginService;
import com.example.demo.service.QualificationService;
import com.example.demo.service.UsertypeServices;
import com.example.demo.service.VeterinaryService;

@CrossOrigin (origins="http://localhost:3000")
@RestController
public class VeterinaryController {

	@Autowired
	VeterinaryService vservice;
	
	@Autowired
	LoginService lservice;
	
	@Autowired
	UsertypeServices uservice;
	
	@Autowired
	QualificationService qservice;
	
	@GetMapping("/getVeterinary/{loginid}")
	public Veterinary getVeterinary(@PathVariable("loginid") int Loginid)
	{
	
		return vservice.getVeterinary(Loginid);
	}
	
	@PostMapping("/regVerterinary")
	public Veterinary regVerterinary(@RequestBody VeterinaryRegister vr)
	{
		Usertype u=uservice.getUsertype(4);
		Login l=new Login(vr.getUsername(),vr.getPassword(),u,0);
		Login saved=lservice.save(l);
		
		System.out.println("qualifcation id"+vr.getQualification());
		Qualification q=qservice.findById(Integer.parseInt(vr.getQualification()));
		
		Veterinary v= new Veterinary(vr.getVetname(), vr.getRegno(), vr.getHospitalname(),vr.getPhone(),vr.getAddress(),q,saved);
		System.out.println(vservice.saveVeterinary(v));
		return vservice.saveVeterinary(v);
	}
	
	@GetMapping("/getVeterinaryList")
	public List <Veterinary> getAll()
	{
		return vservice.getAll();
	}
	
	@GetMapping ("/getVeterinaryWithStatus0")
	public List <Veterinary>  getVeterinaryWithStatus()
	{
		return vservice.getVeterinaryWithStatus();
	}
	
	@GetMapping ("/getVetBYAddress/{loginid}")
	public List<Veterinary> getByVet(@PathVariable("loginid") String address)
	{
		return vservice.getAllVet(address);
	}
	
}

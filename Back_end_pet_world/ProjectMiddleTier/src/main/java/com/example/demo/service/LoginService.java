package com.example.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Login;
import com.example.demo.entities.LoginEntity;
import com.example.demo.repositories.LoginRepository;

@Service
public class LoginService {
	
	@Autowired
	LoginRepository lrepo;

	public Login getLogin(String username,String password)
	{
		
		Login l;
		Optional<Login> ol=lrepo.getLogin(username, password);
		try {
			l=ol.get();
		}
		catch(Exception e){
			l=null;
		}
		return l;
	}
	
	public Login getById(int loginid)
	{
		return lrepo.findById(loginid).get();
	}
	
	public Login save(Login l)
	{
		return lrepo.save(l);
	}
	
	
	public int updateStatus(int loginid) 
	{
		return lrepo.updateStatus(loginid);
	}
	
	public int reject(int loginid) 
	{
		return lrepo.reject(loginid);
	}
}

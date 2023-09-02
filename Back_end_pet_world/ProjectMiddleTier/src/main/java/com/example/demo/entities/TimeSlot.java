package com.example.demo.entities;

import javax.persistence.*;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

@Entity
@Table(name = "TimeSlot")
public class TimeSlot {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "start")
	private String start;
	
	@Column(name = "end")
	private String end;
	
	@Column(name = "status")
	private boolean status;
	
	@ManyToOne()
	@Cascade(value = CascadeType.ALL)
	@JoinColumn(name = "vid")
	private Veterinary vet;
	
	
	

	public TimeSlot() {
		super();
		// TODO Auto-generated constructor stub
	}


	


	public TimeSlot(String start, String end, boolean status, Veterinary vet) {
		super();
		this.start = start;
		this.end = end;
		this.status = status;
		this.vet = vet;
	}

	




	public TimeSlot(int id, String start, String end, boolean status, Veterinary vet) {
		super();
		this.id = id;
		this.start = start;
		this.end = end;
		this.status = status;
		this.vet = vet;
	}





	public int getId() {
		return id;
	}




	public void setId(int id) {
		this.id = id;
	}




	public String getStart() {
		return start;
	}




	public void setStart(String start) {
		this.start = start;
	}




	public String getEnd() {
		return end;
	}




	public void setEnd(String end) {
		this.end = end;
	}




	public boolean isStatus() {
		return status;
	}




	public void setStatus(boolean status) {
		this.status = status;
	}




	public Veterinary getVet() {
		return vet;
	}




	public void setVet(Veterinary vet) {
		this.vet = vet;
	}



}

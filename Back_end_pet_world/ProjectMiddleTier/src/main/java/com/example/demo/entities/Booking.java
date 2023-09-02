package com.example.demo.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

@Entity
@Table(name="booking")
public class Booking {
	



    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int bid;
    
    @OneToOne()
    @Cascade(value = CascadeType.ALL)
    @JoinColumn(name = "slotid")
    TimeSlot  slotid;
    
   	@ManyToOne()
	@Cascade(value = CascadeType.ALL)
	@JoinColumn(name = "buyerid")
	Buyer buyerid;
    
    
    @ManyToOne()
	@Cascade(value = CascadeType.ALL)
	@JoinColumn(name = "vetid")
	Veterinary vetid;

    public Booking()
    {
    	
    }
    
    

	public Booking(TimeSlot slotid, Buyer buyerid, Veterinary vetid) {
		super();
		this.slotid = slotid;
		this.buyerid = buyerid;
		this.vetid = vetid;
	}



	public int getBid() {
		return bid;
	}

	public void setBid(int bid) {
		this.bid = bid;
	}

	public TimeSlot getSlotid() {
		return slotid;
	}

	public void setSlotid(TimeSlot slotid) {
		this.slotid = slotid;
	}

	public Buyer getBuyerid() {
		return buyerid;
	}

	public void setBuyerid(Buyer buyerid) {
		this.buyerid = buyerid;
	}

	public Veterinary getVetid() {
		return vetid;
	}

	public void setVetid(Veterinary vetid) {
		this.vetid = vetid;
	}
    
    



    
   

}

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../AllCss/PetReg.css";
import { DrRegistration } from "../Services/Userservice";

  // submit form 

  // const submitForm=(event)=>
  // {
  //   event.preventDefault()

  //   console.log(data)

  //   // data validation


  //   //call server api for sending data

  //   DrRegistration(data).then((resp)=>
  //   {
  //     console.log(resp)
  //   }).catch((error)=>
  //   {
  //     console.log(console.error())
  //   })
  // };



function DoctorRegComp()
{
    return(
                                         
//         <div>
//                <div class="col-5">
//            <form class = 'card p-3 bg-light'>
//   <div class="col-md-5">
//     <label for="inputName" class="form-label">Pet name</label>
//     <input type="text" class="form-control" id="name" placeholder='Enter username'/>
//     </div>
  
//   <div class="col-md-5">
//   <label for="inputage" class="form-label" >Age</label>
//     <input type="number" class="form-control" id="inputage"/>
//   </div>
   
//   <div class="col-md-5">
//     <label for="inputweight" class="form-label" >Weight</label>
//     <input type="number" class="form-control" id="inputweight"/>
//   </div>
  
//   <div class="col-md-5">
//     <label for="inputcolour" class="form-label" >Colour</label>
//     <input type="text" class="form-control" id="inputcolour"/>
//   </div>

//   <div class="col-md-5">
//     <label for="inputbreed" class="form-label" >Breed</label>
//     <input type="text" class="form-control" id="inputbreed"/>
//   </div>

//   <div >
//     <button type="submit" class="btn btn-primary" >Registration</button>
//   </div>
// </form>
//   </div>
//   </div>
                                            
                                                                                                      
<section className="h-100 h-custom gradient-custom-2">
<div className="container py-5 h-100">
  <div className="row d-flex justify-content-center align-items-center h-100">
    <div className="col-8">
      <div className="card card-registration card-registration-2" style={{borderRadius: '15px'}}>
        <div className="card-body p-0">
          <div className="row g-0">
            <div className="col-lg-6">
              <div className="p-5">
                <h3 className="fw-normal mb-5" style={{color: '#4835d4'}}>General Infomation</h3>

                <div className="mb-4 pb-2">
                  {/* <select className="select">
                    <option value="1">Title</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                  </select> */}

                  
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4 pb-2">

                    <div className="form-outline">
                      <input type="text" id="form3Examplev2" className="form-control form-control-lg" />
                      <label className="form-label" for="form3Examplev2">First name</label>
                    </div>

                  </div>
                  <div className="col-md-6 mb-4 pb-2">

                    <div className="form-outline">
                      <input type="text" id="form3Examplev3" className="form-control form-control-lg" />
                      <label className="form-label" for="form3Examplev3">Last name</label>
                    </div>

                  </div>
                </div>

                <div className="mb-4 pb-2">
                </div>
                <div className="mb-4 pb-2">
                  <div className="form-outline">
                    <input type="text" id="form3Examplev4" className="form-control form-control-lg" />
                    <label className="form-label" for="form3Examplev4">Qualification</label>
                  </div>
                </div>


                <div className="mb-4 pb-2">
                </div>
                <div className="mb-4 pb-2">
                  <div className="form-outline">
                    <input type="text" id="form3Examplev4" className="form-control form-control-lg" />
                    <label className="form-label" for="form3Examplev4">Specialization</label>
                  </div>
                </div>

                <div className="mb-4 pb-2">
                </div>
                <div className="mb-4 pb-2">
                  <div className="form-outline">
                    <input type="text" id="form3Examplev4" className="form-control form-control-lg" />
                    <label className="form-label" for="form3Examplev4">Experience</label>
                  </div>
                </div>

                <div className="row">
                  <div className=" mb-4 pb-2 mb-md-0 pb-md-0">
                    <div className="form-outline">
                      <input type="text" id="form3Examplev5" className="form-control form-control-lg" />
                      <label className="form-label" for="form3Examplev5">Registration No</label>
                    </div>

                  </div>
                
                  <div className="col-md-6">

                    {/* <select className="select">
                      <option value="1">Employees</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                      <option value="4">Four</option>
                    </select> */}

                    

                  </div>
                </div>

              </div>
            </div>
            <div className="col-lg-6 bg-indigo text-white">
              <div className="p-5">
                <h3 className="fw-normal mb-5">Contact Details</h3>

                <div className="mb-4 pb-2">
                  <div className="form-outline form-white">
                    <input type="text" id="form3Examplea2" className="form-control form-control-lg" />
                    <label className="form-label" for="form3Examplea2">Address</label>
                  </div>
                </div>

                <div className="mb-4 pb-2">
                  <div className="form-outline form-white">
                    <input type="text" id="form3Examplea3" className="form-control form-control-lg" />
                    <label className="form-label" for="form3Examplea3">City</label>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-5 mb-4 pb-2">
                  </div>
                  <div className="mb-4 pb-2">

                    <div className="form-outline form-white">
                      <input type="text" id="form3Examplea5" className="form-control form-control-lg" />
                      <label className="form-label" for="form3Examplea5">Place</label>
                    </div>

                  </div>
                </div>

                <div className="mb-4 pb-2">
                  <div className="form-outline form-white">
                    <input type="text" id="form3Examplea6" className="form-control form-control-lg" />
                    <label className="form-label" for="form3Examplea6">Country</label>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-5 mb-4 pb-2">

                   

                  </div>
                  <div className=" mb-4 pb-2">

                    <div className="form-outline form-white">
                      <input type="text" id="form3Examplea8" className="form-control form-control-lg" />
                      <label className="form-label" for="form3Examplea8">Phone Number</label>
                    </div>

                  </div>
                </div>

                <div className="mb-4">
                  <div className="form-outline form-white">
                    <input type="text" id="form3Examplea9" className="form-control form-control-lg" />
                    <label className="form-label" for="form3Examplea9">Your Email</label>
                  </div>
                </div>

                <div className="form-check d-flex justify-content-start mb-4 pb-3">
                  <input className="form-check-input me-3" type="checkbox" value="" id="form2Example3c" />
                  <label className="form-check-label text-white" for="form2Example3">
                    I do accept the <a href="#!" className="text-white"><u>Terms and Conditions</u></a> of your
                    site.
                  </label>
                </div>

                <button type="button" className="btn btn-light btn-lg"
                  data-mdb-ripple-color="dark">Register</button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
       
    );

}

export default DoctorRegComp;
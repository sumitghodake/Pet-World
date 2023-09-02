import { Link,Route,Routes, useNavigate } from "react-router-dom";
import LoginComp from "./LoginComp";
import { useState,useEffect } from "react";


export default function VeterinaryComp()
{

  const navigate = useNavigate();
    
    const[allVeterinary,setAllVeterinary]=useState([]);
    const [fields, setFields] = useState([]);
   
    const [selectedVetIds, setSelectedVetIds] = useState([]);

    const addField = () => {
        const newField = {
          name: '',
          value: '',
        };
      
        setFields((prevFields) => [...prevFields, newField]);
      };

      const handleFieldChange = (index, fieldProperty, value) => {
        setFields((prevFields) => {
          const updatedFields = [...prevFields];
          updatedFields[index][fieldProperty] = value;
          return updatedFields;
        });
      };




      const fetchDataFromDatabase = (vetId) => {

        const url = "http://localhost:8080/saveBooking";
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
         
            console.log("Fetched Data:", data);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      };

      const getFieldByName = (fieldName) => {
        const field = fields.find((field) => field.name === fieldName);
        return field ? field.value : null;
      };
      
    const handleSearchSubmit = (e) => {
        e.preventDefault(); // Prevent the form from submitting normally
        const searchInput = document.getElementById("search-input");
        if (searchInput) {
            const searchValue = searchInput.value;
            searchc(searchValue); // Call the searchc function with the search value
        }

    
    };
  

const searchc=(e)=>{
    alert(e);
    fetch("http://localhost:8080/getVetBYAddress/"+e)
    .then(resp=>resp.text())
    .then(text=>text.length? JSON.parse(text):{})
    .then(ops=>
        {
            setAllVeterinary(ops);
        }
    )

};

const handleVetButtonClick = (e) =>{
   
  localStorage.setItem("vetId",e);
    fetch("http://localhost:8080/getSlotsById?vid="+e)
    .then(resp=>resp.text())
    .then(text=>text.length? JSON.parse(text):{})
    .then(ops=>
        {
          localStorage.setItem("DoctorSlots",JSON.stringify(ops));
          navigate("/slots");
        }
    )
}
    return(<div>
          <h1 className="btn btn-primary">Veterinary List </h1>

          <form>
                <label htmlFor="search-input">Search:</label>
                <input type="text" id="search-input" name="q" placeholder="Enter your search term..." />
                <button type="submit" onClick={handleSearchSubmit}>Search</button>
            </form>
       






         <table className = "table table-striped">
                <thead>
                    <tr>
                        <th>Veterinary name:</th>
                        <th>RegNo:</th>
                        <th>Hospitalname:</th>
                        <th>Qualification:</th>
                        <th>phone</th>
                        <th>Address</th>
                    
                    </tr>

                </thead>
                <tbody>
                    {
                        allVeterinary.map(
                            veterinary=>
                                    <tr key = {veterinary.vetid} >
                                    <td>{veterinary.vetname}</td>
                                    <td>{veterinary.regno}</td>
                                    <td>{veterinary.hospitalname}</td>
                                    <td>{veterinary.qualificationid.qualificationid}</td>
                                    <td>{veterinary.phone}</td>
                                    <td>{veterinary.address}</td>
                                    <td><button onClick={ ( ) => handleVetButtonClick(veterinary.vetid)}>Book Appointment</button></td>
                                </tr>

                        )
                    }

                </tbody>


            </table> 
        {/* <div>
            <Routes>
            <Route path="/login" element={<LoginComp/>}>
            </Route>
            </Routes>        
        </div> */}
    </div>)
}
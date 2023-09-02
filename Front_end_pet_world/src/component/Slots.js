import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default  function Slots()
{
    const [DoctorSlots,setDoctorSlots] = useState( []);
    const [vet,setVet] = useState({})

    const navigate = useNavigate();

    useEffect( () =>{
        setDoctorSlots(JSON.parse(localStorage.getItem("DoctorSlots")))
        alert((localStorage.getItem("vetId")))
        setVet(JSON.parse(localStorage.getItem("vetId")))
    },[])

    const bookSlot = (id) =>{

        alert((JSON.parse(localStorage.getItem("loggedbuyer")).buyerid))
        alert(vet)
        alert(id)
        fetch("http://localhost:8080/bookSlot?buyerid="+(JSON.parse(localStorage.getItem("loggedbuyer")).buyerid)+
        "&slotid="+id+"&vid="+vet)
        .then(resp=>resp.json())
        .then(
            // localStorage.clear("DoctorSlots"),
            navigate("/buyer_home")
        )
    

    }

    return (
       
       <div>
            <table>
                <tr>
                    <th>END TIME</th>
                    <th>START TIME</th>
                    <th>Book</th>
                </tr>
            {
                DoctorSlots.map(
                    slot=>
                    <tr key = {slot. id} >
                        <td> {slot.end }</td>
                        <td> {slot.start }</td>
                        <td><button type="button" 
                        onClick={() => bookSlot(slot.id)}
                        value={"BOOK"}
                        >BOOK</button></td>
                    
                    </tr>
                        
                )
            }
            </table>

        </div>
    )
}
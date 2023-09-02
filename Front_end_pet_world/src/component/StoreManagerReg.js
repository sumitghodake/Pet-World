import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
export default function StoreRegComp()
{

    const init={
        
        uid:"",
        pwd:"",
        fname:"",
        lname :"",
        email:"",
        address:"",
        contact_no:"",
        licence_no:""
        
    }
               
    
    const reducer =(state,action)=>
    {
    switch(action.type)
    {
      case 'update':
        return{...state,[action.fld]:action.val}
        case 'reset':
          return init;
    }
    }
    
    const [info,dispatch]=useReducer(reducer,init);
    const navigate=useNavigate();
    // const[file,setFile]=useState();
    
    
    const sendata = (e)=> {
       alert("hi")
      e.preventDefault()
      
          const reqOptions={
                method:'POST',
                headers :{'content-type':'application/json'}, 
                body:JSON.stringify(info)
    
          }
          fetch("http://localhost:8080/regStoreManger",reqOptions)
          .then(resp=>{console.log(resp.ok);
            alert("Hello");
          if(resp.ok)
          return resp.json();
        else 
             throw new Error("server Error");
          
          })
          .then(obj=>{
            if(obj)
            {
              navigate("/Login");
            }
            else{
               navigate("/storereg");
            }
          })
    }
    
    
    //   const [allsp,setAllsp]=useState([]);
    



    return(
        <div class="card shadow text-center" style={{ width: "40%", right: "-30%", top: "50px", animation: "ease-in-out", opacity: "0.92", fontSize: "15px", fontFamily: "Century Gothic" }} >
      <div class="card-body bg-info">

        <form>
          <h3>Store Registraion</h3>

          <div className="mb-3">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter First Name"
              id="fname"
              name="fname"     
              value={info.fname}
              onChange={(e)=>
                        {
                          dispatch({
                            type:'update',
                            fld:'fname',
                            val:e.target.value
                          })
                        }}/>

            <div
              id="fnameHelp"
              className="form-text">
             
            </div>

          </div>

          <div className="mb-3">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Last Name"
              id="lname"
              name="lname"  value={info.lname}
              onChange={(e)=>
                        {
                          dispatch({
                            type:'update',
                            fld:'lname',
                            val:e.target.value
                          })
                        }} />
            <div
              id="lnameHelp"
              className="form-text">
             
            </div>
          </div>

          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              id="email"
              name="email" 
              
              value={info.email}
              onChange={(e)=>
                        {
                          dispatch({
                            type:'update',
                            fld:'email',
                            val:e.target.value
                          })
                        }}/>
            <div
              id="emailHelp"
              className="form-text" >
        
            </div>
          </div>

          {/* <div className="mb-3">
            <label>Store name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Store name"
              id="sname"
              name="sname"/>
              
            </div> */}
          

          <div className="mb-3">
            <label> Store address</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter address"
              id="address"
              name="address"  
              value={info.address}
              onChange={(e)=>
                        {
                          dispatch({
                            type:'update',
                            fld:'address',
                            val:e.target.value
                          })
                        }}/>
            <div
              id="addressHelp"
              className="form-text">
            </div>
          </div>

          <div className="mb-3">
            <label>phoneno</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter phoneno"
              id="contact_no"
              name="contact_no" 
              value={info.contact_no}
              onChange={(e)=>
                        {
                          dispatch({
                            type:'update',
                            fld:'contact_no',
                            val:e.target.value
                          })
                        }}/>
            <div
              id="contact_noHelp"
              className="form-text" >
            </div>
          </div>

          <div className="mb-3">
            <label>Licenceno</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter licence_no"
              id="licence_no"
              name="licence_no" 
              value={info.licence_no}
              onChange={(e)=>
                        {
                          dispatch({
                            type:'update',
                            fld:'licence_no',
                            val:e.target.value
                          })
                        }}/>
           
            
          </div>

          <div className="mb-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Username"
              id="uid"
              name="uid"  
              value={info.uid}
              onChange={(e)=>
                        {
                          dispatch({
                            type:'update',
                            fld:'uid',
                            val:e.target.value
                          })
                        }}/>
            <div
              id="uidHelp"
              className="form-text">
            </div>
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              id="pwd"
              name="pwd" value={info.pwd}
              onChange={(e)=>
                        {
                          dispatch({
                            type:'update',
                            fld:'pwd',
                            val:e.target.value
                          })
                        }} />
            <div
              id="pwdHelp"
              className="form-text"  >
            </div>
          </div>

          <div className="d-grid">
            <button type="submit"
              className="btn btn-primary" onClick={(e) => { sendata(e) }}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    )
    
}
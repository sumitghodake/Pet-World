import { useReducer } from "react";
import { Navigate, Route,Routes } from "react-router-dom";
import LoginComponent from "./LoginComponent";
import { useNavigate } from "react-router-dom";
export default function CustomerRegComp()
{
    const nav = useNavigate();
    const init={
        
        fname:{ value: "", error: "", valid: false, touched: false },
        lname:{ value: "", error: "", valid: false, touched: false },
        email:{ value: "", error: "", valid: false, touched: false },
        address:{ value: "", error: "", valid: false, touched: false },
        contactno:{ value: "", error: "", valid: false, touched: false },
        username:{ value: "", error: "", valid: false, touched: false },
        password:{ value: "", error: "", valid: false, touched: false },
        
    }

    const reducer=(state,action)=>{
        switch(action.type)
        {
            case 'update':
                return { ...state, [action.fld]: { ...state[action.fld], value: action.value, error: action.error, valid: action.valid, touched: action.touched } }
                case 'reset':
                return init;
        }
    }

    const validate = (nm, val) => {
        console.log(nm + " : " + val)
        let error = "";
        let valid = false;
        let touched = true;
        switch (nm) {
          case 'fname':
            const exp1 = /^[A-Z][a-z]{2,12}/
            if (!exp1.test(val)) {
              error = "Atleast 1 Capital Letter, 1 Small Letter";
            }
            else {
              error = "";
              valid = true;
            }
            break;
    
          case 'lname':
            const exp2 = /^[A-Z][a-z]{2,12}/
            if (!exp2.test(val)) {
              error = "Atleast 1 Capital Letter, 1 Small Letter";
            }
            else {
              error = "";
              valid = true;
            }
            break;
    
          case 'email':
            const exp3 = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
            if (!exp3.test(val)) {
              error = "Invalid pattern";
            }
            else {
              error = "";
              valid = true;
            }
            break;

            case 'address':
                const exp4 = /[A-Za-z]/
                if (!exp4.test(val)) {
                  error = "Invalid address";
                }
                else {
                  error = "";
                  valid = true;
                }
                break;
        


          case 'contactno':
            const exp5 = /^[0-9]{10}$/
            if (!exp5.test(val)) {
              error = "Invalid Length";
            }
            else {
              error = "";
              valid = true;
            }
            break;


    
          case 'username':
            const exp7 = /[A-Za-z0-9]{5,12}/
            if (!exp7.test(val)) {
              error = "Atleast 1 Capital Letter, 1 Small Letter and 1 Number  Required ";
            }
            else {
              error = "";
              valid = true;
            }
            break;
    
          case 'password':
            const exp8 = /[A-Za-z]{2,12}/
            if (!exp8.test(val)) {
              error = "Atleast 1 Capital Letter, 1 Small Letter, 1 Number and 1 Specail Character Required ";
            }
            else {
              error = "";
              valid = true;
            }
            break;
    
          
    
          
        }
        console.log(val + "," + error + "," + valid)
        dispatch({ type: 'update', fld: nm, value: val, error, valid, touched })
      }
    
      const [info, dispatch] = useReducer(reducer, init)
    
      const sendData = (e) => {
        e.preventDefault();
        const reqOptions = {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({
            fname: info.fname.value,
            lname: info.lname.value,
            email: info.email.value,
            address:info.address.value,
            contactno: info.contactno.value,
            username: info.username.value,
            password: info.password.value,
            
          })
        }
        fetch("http://localhost:8080/regCustomer", reqOptions)
          .then((resp => {
            if(resp.ok){
              alert('You are Succesfully Registered..!!')
              nav("/")
              return resp.json()
             
            }
            else
            {
              alert('Server Error!!...OR...Use Different Username!!')
              window.location.reload(false)
            }
    
          }))
          
      } 



    return(
        <div class="card shadow text-center" style={{ width: "40%", right: "-30%", top: "50px", animation: "ease-in-out", opacity: "0.92", fontSize: "15px", fontFamily: "Century Gothic" }} >
      <div class="card-body bg-info">

        <form>
          <h3>Customer Registraion</h3>

          <div className="mb-3">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter First Name"
              id="fname"
              name="fname"
              value={info.fname.value}
              onChange={(e) => { validate("fname", e.target.value) }}
            />
            <div
              id="fnameHelp"
              className="form-text"
              style={{ display: (!info.fname.valid && info.fname.touched) ? "block" : "none" }}>
              {info.fname.error}
            </div>

          </div>

          <div className="mb-3">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Last Name"
              id="lname"
              name="lname"
              value={info.lname.value}
              onChange={(e) => { validate("lname", e.target.value) }} />
            <div
              id="lnameHelp"
              className="form-text"
              style={{ display: (!info.lname.valid && info.lname.touched) ? "block" : "none" }}>
              {info.lname.error}
            </div>
          </div>

          <div className="mb-3">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Email"
              id="email"
              name="email"
              value={info.email.value}
              onChange={(e) => { validate("email", e.target.value) }} />
            <div
              id="emailHelp"
              className="form-text"
              style={{ display: (!info.email.valid && info.email.touched) ? "block" : "none" }}>
              {info.email.error}
            </div>
          </div>

          <div className="mb-3">
            <label>address</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter address"
              id="address"
              name="address"
              value={info.address.value}
              onChange={(e) => { validate("address", e.target.value) }} />
            <div
              id="addressHelp"
              className="form-text"
              style={{ display: (!info.address.valid && info.address.touched) ? "block" : "none" }}>
              {info.address.error}
            </div>
          </div>

          <div className="mb-3">
            <label>Contact no</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter contactno"
              id="text"
              name="text"
              value={info.contactno.value}
              onChange={(e) => { validate("contactno", e.target.value) }} />
            <div
              id="contactnoHelp"
              className="form-text"
              style={{ display: (!info.contactno.valid && info.contactno.touched) ? "block" : "none" }}>
              {info.contactno.error}
            </div>
          </div>


          <div className="mb-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Username"
              id="Username"
              name="Username"
              value={info.username.value}
              onChange={(e) => { validate("username", e.target.value) }} />
            <div
              id="usernameHelp"
              className="form-text"
              style={{ display: (!info.username.valid && info.username.touched) ? "block" : "none" }}>
              {info.username.error}
            </div>
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              id="Password"
              name="Password"
              value={info.password.value}
              onChange={(e) => { validate("password", e.target.value) }}
            />
            <div
              id="passwordHelp"
              className="form-text"
              style={{ display: (!info.password.valid && info.password.touched) ? "block" : "none" }}>
              {info.password.error}
            </div>
          </div>

          <div className="d-grid">
            <button type="submit"
              disabled={info.fname.valid && info.lname.valid && info.password.valid && info.email.valid ? false : true}
              className="btn btn-primary" onClick={(e) => { sendData(e) }}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    )
    
}
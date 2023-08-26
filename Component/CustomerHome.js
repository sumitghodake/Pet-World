import Customer from "" 
import React from "react"
function CustomerHome()
{
     return(
          <h1>
               customer home
          </h1>
          
          <div style={{ backgroundImage: `url(${Customer})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '93vh'  }}></div>

     )
  
}

export default CustomerHome;
import React from 'react'
import { toast } from "react-toastify";
import { useState } from 'react';
import wobot from '../images/wobot.png'
import wobotlogo from '../images/wobotlogo.jpg'
import background from '../images/background.jpg'
const FormPage = () => {
    const profilePIcDefault =wobot;
    const logo= wobotlogo
  const [name, setname] = useState("");
  const [company, setcompany] = useState("");
  const [industry, setindustry] = useState("");
  const [location, setlocation] = useState("");
  
  

 

  //form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      toast.error("Name Is Required");
    } else if (company === "") {
      toast.error("Company Is Required");
    } else if (industry === "") {
      toast.error("Industry is Required");
    } else {
      localStorage.setItem("name", name);
      localStorage.setItem("company name", company);
      localStorage.setItem("industry", industry);
     
      localStorage.setItem("location", location);
      
      toast.success("Form Submitted Succesfully!");
    }
  };

  return (
    <  >
      
      <div className="container mt-4" style={{backgroundImage: `url(${background})`}} >       
        <div className="child row border p-4" >      
          <div className="profile_section col-md-4 ">         
              <img
                src={profilePIcDefault}
                alt="profile_pic"
                name="file"
                className="img-thumbnail"
                height={250}
                width={250}
              />       
          </div>
          <div className=" col-md-6">
          <div className='homepage'>
           <div className='center'>
           <img 
             src={logo}
             alt="profile_pic"
             name="file"
             className="img-logo"
             height={250}
             width={250}/>
           </div>         
              <div className='form2'>
              <h2>It's a delight to have  you onboard</h2>
              <p>Help us know you better</p>
              <p>(This is how we optimize Wobot as per your business needs)</p>
              </div>
            <div className="form1 mb-3">  
              <label  className="form-label">
                Your Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setname(e.target.value)}
                className="form-control"
                id="exampleInputName"
                
                placeholder='e.g John Smith'
                required
              />
            </div>
            <div className="form1 mb-3">
              <label  className="form-label">
                Company Name
              </label>
              <input
                type="text"
                value={company}
                onChange={(e) => setcompany(e.target.value)}
                className="form-control"
                placeholder='e.g WobotAI'
                required
              />
            </div>
            <div className="form1 mb-3">
              <label  className="form-label">
                Industry
              </label>           
             <select className="form-select" aria-label="Default select example"value={industry} onChange={e=>setindustry(e.target.value)}>
               <option selected>select</option>
               <option value={1}>Textile</option>
               <option value={2}>Agriculture</option>
               <option value={3}>Tourism</option>
             </select>
            </div>
            {/* radios button inpput ================== */}
            <div className="loc mb-3">
            <label  className="form-label">
                Number of locations
              </label>
            </div>
            <div className="form1 d-flex flex-row">            
             <button className='location' value={location} onChange={e=>setlocation(e.target.value)}>1-20</button>
             <button className='location' value={location} onChange={e=>setlocation(e.target.value)} >21-50</button>
             <button className='location' value={location} onChange={e=>setlocation(e.target.value)}>51-200</button>
             <button className='location' value={location} onChange={e=>setlocation(e.target.value)}>201-500</button>
             <button className='location' value={location} onChange={e=>setlocation(e.target.value)}>500+</button>
            </div>           
            <button
              type="submit"
              className="form__submit-btn"
              onClick={handleSubmit}
            >
              Get Started
            </button>
            </div>
            <div className='last'>
               <a href='##'>Terms Of use | Privacy policy</a>
            </div>
          </div>
          
        </div>
        
      </div>
      
    </>
  );
}

export default FormPage
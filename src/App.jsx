import { useState } from "react";

function StudForm(){

    const [formData,setFormData]=useState({
        regNum:"",
        fullName:"",
        Password:""
    });
    const [submittedData,setSubmittedData]=useState(null);
    const [issubmitted,setIsSubmitted]=useState(false);

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData((prev)=>({
            ...prev,
            [name]:value,
        }))
    }

   const handleSubmit=(e)=>{
        e.preventDefault();
        setSubmittedData(formData);
        setIsSubmitted(true);
   }


    return(
        <>
            {!issubmitted ? (
                <form onSubmit={handleSubmit}>
                <label >Enter Your Register Number: </label>
                <input name="regNum" value={formData.regNum} onChange={handleChange} type="number" maxLength={8} required placeholder="Register Number"/>
                <br /><br />

                <label >Enter Your FullName: </label>
                <input name="fullName" value={formData.fullName} onChange={handleChange} type="text" maxLength={15} placeholder="FullName"/>
                <br />  <br />

                <label >Enter the Password: </label>
                <input name="Password" value={formData.password} onChange={handleChange} type="password" maxLength={6} placeholder="Password"/>
                <br /><br />

                <button type="submit">Submit</button>
            </form>
            ):  (
                alert(`Your Entered details are!.... \n Reg No: ${submittedData.regNum} \n FullName : ${submittedData.fullName} \n Password : ${submittedData.password || "It's Sensitive Data!.."}`)
            )}
        </>
    )
}

export default StudForm;
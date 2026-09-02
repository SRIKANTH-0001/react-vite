import { useState } from "react";
import btnStyles from './button.module.css';

function App(){

    const [doctor,setDoctor]=useState('');

    const handleChange=(e)=>{
        setDoctor(e.target.value);
    }

    const doctorNames=["Stephen","Gowtham","Mukesh","Mubarak"];

    return(
        <>
            <h1 id="head">Prescripto App</h1>
            <br />
            <p>Here,You can find All specialized doctors to book an appointment!</p>

            <ol>
                {doctorNames.map((dName,index)=>(
                    <li key={index}>{dName}</li>
                ))}
            </ol>

            <label>Enter Correct Doctor No : </label>
            <input type="number" name="dNumber" value={doctor.dNumber} max={4} maxLength={1} onChange={handleChange}/>
            <br /><br />
            <button type="submit" onClick={()=>alert(`${doctor <= 4 && doctor >= 1? `Your Appointment is Booked Successfully!..\nThe Doctor Number which you entered is ${doctor}\n The Doctor Name is :- ${doctorNames[doctor-1]}` : "You have Entered Wrong Doctor Number!\nPlease choose any among given one!"}`)}
            className="btn">Book an Appointement</button>

            <button className="btn1" style={{marginLeft:"20px"}} onClick={()=>alert('The last Appointment Which You booked is Cancelled!')}>Cancel</button>
        </>
    )
}

export default App;
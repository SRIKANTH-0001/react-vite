import { useState } from "react";

function RadioBTN(){
    const [ans,setAns]=useState('Mrunal');

    const handleChange=(e)=>{
        setAns(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        alert(`You have selected Heroine as ${ans}`)
    }

    return(
        <>
            <h1 style={{textAlign:"center"}}>Welcome to the place where 
                You can share your Favourite heroine!</h1>
            <br /><br />

            <h3 >Choose your Favourite Heroine in Given options!</h3>
            <br />

            <form onSubmit={handleSubmit}>
                <label>
                <input type="radio" name="heroine" value="Mrunal Thakur" checked={ans==="Mrunal Thakur"} onChange={handleChange}/>
                Mrunal Thakur
                </label>
                <br />
                

                <label>
                    <input type="radio" name="heroine" value="Pooja Hegde" checked={ans==="Pooja Hegde"} onChange={handleChange}/>
                    Pooja Hegde
                </label>
                <br />

                <label>
                    <input type="radio" name="heroine" value="Keerthy Suresh" checked={ans==="Keerthy Suresh"} onChange={handleChange}/>
                    Keerthy Suresh
                </label>
                <br />

                <label>
                    <input type="radio" name="heroine" value="Anika Surendar" checked={ans==="Anika Surendar"} onChange={handleChange}/>
                    Anika Surendar
                </label><br /><br />

                <input type="submit"/>

            </form>
        
        </>
    )
}

export default RadioBTN;
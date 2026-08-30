import { useState } from "react"

function CheckBox(){

    const [data,setData]=useState({
        fullName:"SRIKANTH K",
        Strawberry:true,
        Ice:false,
        BForest:true,
        Honey:true

    });

    const handleChange=(e)=>{
        const target=e.target;
        const value=target.type==="checkbox"?target.checked:target.value;
        const name=target.name;

        setData(prev=>({...prev,[name]:value}));
    }

const handleSubmit = () => {
    const selectedCakes = [];

    if (data.Strawberry) selectedCakes.push("Strawberry Cake");
    if (data.Ice) selectedCakes.push("Ice Cake");
    if (data.BForest) selectedCakes.push("Black Forest Cake");
    if (data.Honey) selectedCakes.push("Honey Cake");

    let type = "";
    if (selectedCakes.length === 1) {
        type = selectedCakes[0];
    } else if (selectedCakes.length > 1) {
        const last = selectedCakes.pop();
        type = selectedCakes.join(", ") + " and " + last;
    }

    alert(`The Person ${data.fullName} is needed following type of Cakes!...\n ${type}`);
};


    return(
        <>
            <h1>Welcome to the Cake Shop!....</h1>
            <form onSubmit={handleSubmit}>
                <label>What's your Name : </label>
                <input type="text" maxLength={15} name="fullName" value={data.fullName} onChange={handleChange}/>
                <br /><br />

                <h3 >I want the Cake type as : &ensp;</h3>
                <br />

                <label >Strawberry Cake : &ensp;</label>
                <input type="checkbox" name="Strawberry" checked={data.Strawberry} onChange={handleChange}/>
                <br /><br />

                <label >Ice Cake : &ensp;</label>
                <input type="checkbox"  name="Ice" checked={data.Ice} onChange={handleChange}/>
                <br /><br />

                <label >Black Forest : &ensp;</label>
                <input type="checkbox"  name="BForest" checked={data.BForest} onChange={handleChange}/>
                <br /><br />

                <label >Honey Cake : &ensp;</label>
                <input type="checkbox"  name="Honey" checked={data.Honey} onChange={handleChange}/>
                <br /><br />

                <input type="submit" />
                
            </form>

        </>
    )
}

export default CheckBox
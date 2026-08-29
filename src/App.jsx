import { useState } from "react"

function MultiInput(){

    const [formData,setFormData]=useState({});

    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setFormData((prev)=>({...prev,[name]:value}))
    }

    return(
        <>
            <h1 style={{textAlign:"center"}}>Welcome to Our bank!..</h1>
            <br />
            <h2 style={{textAlign:"center"}}>Here you can perform Amount Transfer....</h2>
            <br /><br />

            <div style={{backgroundColor:"lightsteelblue",marginLeft:"38%",height:"250px",width:"380px"}}>
                <form style={{padding:"15px",fontSize:"16px"}}>
                    <h1>Amount Transfer Page</h1>
                    <br />

                    <label >Enter From Account No. :- &ensp;</label>
                    <input type="number" name="fanNumber" value={formData.fanNumber} onChange={handleChange} placeholder="FAN Number" required/>
                    <br /> <br />

                    <label >Enter To Account No. :- &ensp;&emsp;</label>
                    <input type="number" name="tanNumber" value={formData.tanNumber} onChange={handleChange} placeholder="TAN Number" required/>
                    <br /> <br />

                    <label >Enter the Amount :- &emsp;&emsp;&emsp;&nbsp;</label>
                    <input type="number" name="amount" value={formData.amount} onChange={handleChange} placeholder="Amount" required/>
                    <br /><br />

                    <div>
                        &emsp;&emsp;&emsp;&emsp;<button style={{ backgroundColor: '#077809', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }} onClick={()=>alert(`Your Entered Amount ₹${formData.amount} has transferred\n to the Account Number ${formData.tanNumber}!...`)}>Transfer</button>&emsp;&emsp;&emsp;&emsp;
                        <button style={{ backgroundColor: '#d91a1a', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }} onClick={()=>confirm('Are you sure that you gonna cancel the Amount transfering process?')?alert("Cancelled"):alert("Not Cancelled")}>Cancel</button>
                    </div>

                </form>
            </div>

        </>
    )
}

export default MultiInput
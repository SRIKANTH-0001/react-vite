import './style.css'

function FlowerNames(){
    const flowers=["Lotus","Jasmine","Rose","Hibiscus","FireCracker"];

    return(
        <>
            <div>
                <h1 style={{textAlign:"center"}}>Welcome to Our Flower shop!...</h1>
                <br /><br />

                <ol style={{color:"blue",fontSize:"30px",paddingLeft:"40px",border:"3px solid black"}}>
                    {flowers.map((flower,index)=>(
                        <li style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly",alignItems:"center"}} key={index}>{flower}</li>
                    ))}    
                
                </ol>

            </div>
        </>
    )
}

export default FlowerNames;
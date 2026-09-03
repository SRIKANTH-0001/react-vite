import { Link } from "react-router-dom"

function Navbar(){
    return(
        <nav style={{display:"flex",justifyContent:"space-between",backgroundColor:"rgb(255, 191, 0)",height:"50px"}}>
            <a href="/" style={{fontSize:"30px",fontWeight:"bold",marginLeft:"20px",textDecoration:"none",color:"black"}}>SriShop🏚️</a>
            <div style={{display:"flex",gap:"3rem",alignItems:"center",fontSize:"25px",fontWeight:"bold"}}>
                <Link style={{textDecoration:"none",color:"black"}} to="/">Home</Link>
                <Link style={{textDecoration:"none",color:"black"}} to="/about">About</Link>
                <Link style={{textDecoration:"none",color:"black"}} to="/contact">Contact</Link>
            </div>
            <button onClick={()=>alert('You have logged out from Your account successfully!....')} style={{cursor:"pointer",height:"32px",width:"80px",border:"none",backgroundColor:"wheat",color:"black",fontSize:"15px",borderRadius:"5px",marginTop:"10px",marginRight:"10px",fontWeight:"bolder"}}>Logout</button>
        </nav>
    )
}

export default Navbar

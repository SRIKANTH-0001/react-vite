import { Link } from "react-router-dom";

function Customer(){
    return(
        <>
            <nav>
                <Link to="/customer/srikanth">Srikanth</Link> &emsp; | 
                <Link to="/customer/suresh">Suresh</Link>&emsp; | 
                <Link to="/customer/gowtham">Gowtham</Link>
            </nav>
        </>
    )
}
export default Customer;
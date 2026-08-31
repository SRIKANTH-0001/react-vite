import { useState } from "react";
import { createPortal } from "react-dom";

function App(){

    const [isOpen,setIsOpen]=useState(false);

    function Modal({isOpen,onClose,children}){

        if(!isOpen) return null;

        return createPortal(
            <>
                <div style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    top:"0",
                    bottom:"0",
                    right:"0",
                    left:"0",
                    position:"fixed",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center"
                }}>
                
                <div style={{
                    backgroundColor:"white",
                    padding:"20px",
                    borderRadius:"10px",
                    height:"150px",
                }}>
                    {children}
                    <br />
                    <button style={{backgroundColor:"green",color:"white",height:"33px",width:"80px",marginRight:"15px",marginLeft:"42%",fontSize:"25px",border:"2px",borderRadius:"10px"}} onClick={onClose}>Close</button>
                </div>

                </div>
            </>,document.body
        )
    }

    return(
        <>
            <h1 style={{textAlign:"center"}}>Welcome to Online Recruitment!..</h1>
            <button style={{backgroundColor:"green",color:"white",height:"33px",width:"180px",marginRight:"15px",marginTop:"15px",marginLeft:"42%",fontSize:"15px",border:"2px",borderRadius:"10px"}} onClick={()=>setIsOpen(true)}>Open To see Result</button>


            <Modal isOpen={isOpen} onClose={()=>setIsOpen(false)}>
                <h1>You have Opened the Modal!</h1>
                <br />
                <p>Congrats!You have Selected in Interview and We'll let you know about Joining Date!...</p>
            </Modal>
        </>
    )
}

export default App;

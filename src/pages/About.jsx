import divStyle from '../Styles.module.css'

function About(){
    return(
        <>
            <div className={divStyle.primary}>
                <div className={divStyle.secondary}>
                    <h2 style={{ color: "red", fontFamily: "Arial", fontSize: "30px", fontWeight: "bold", marginBottom: "20px",textDecoration:"underline"}}>About SriShop</h2>
                    <p style={{ color: "green", fontFamily: "Arial", fontSize: "18px", fontWeight: "600", lineHeight: "1.6", marginBottom: "10px" }}>SriShop is your friendly online store for everyday products.</p>
                    <p style={{ color: "green", fontFamily: "Arial", fontSize: "18px", fontWeight: "600", lineHeight: "1.6", marginBottom: "10px" }}>We make shopping simple, convenient, and enjoyable.</p>
                    <p style={{ color: "purple", fontFamily: "Arial", fontSize: "18px", fontWeight: "600", lineHeight: "1.6" }}>Thank you for choosing SriShop!</p>
                </div>
            </div>
        </>
    )
}

export default About

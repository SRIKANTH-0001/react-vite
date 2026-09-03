import divStyle from '../Styles.module.css'

function Contact(){
    return(
        <>
            <div className={divStyle.primary}>
                <div className={divStyle.secondary}>
                    <h2 style={{ color: "red" ,textDecoration:"underline"}}>Contact SriShop</h2><br />
                    <p style={{ color: "green" }}>Phone: +1 (202) 555-0147</p>
                    <p style={{ color: "green" }}>Email: hello@srishop.example.com</p>
                    <p style={{ color: "green" }}>Address: 24 Market Street, Chennai</p><br />
                    <p style={{ color: "purple" }}>Hours: Monday - Saturday, 9:00 AM - 7:00 PM</p>
                </div>
            </div>
        </>
    )
}

export default Contact

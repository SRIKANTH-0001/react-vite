import divStyle from "../Styles.module.css"

function Home(){
    return(
        <>
            <div className={divStyle.primary}>
                <div className={divStyle.secondary}>
                    <h2 style={{color:"red"}}>Welcome to SriShop!</h2><br /> <h3 style={{color:"darkgreen"}}>Here,You can get whatever You want to buy..!</h3>
                    <h1 style={{marginTop:"20px",color:"purple"}}>Happy Buying!...</h1>
                </div>
            </div>
        </>
    )
}

export default Home
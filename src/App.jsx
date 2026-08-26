function NotPaid(){
    return <p>Access Denied!You didn't paid the fees for the Course!...</p>;
}

function Paid(props){
    let Paid=props.isPaid;

    //Method 1:

    // if(Paid){
    //     return <h1>You have Paid the fees for the Course!..</h1>;
    // }
    // return <NotPaid/>

    //Method 2:

    // return(
    //         <h1>{Paid?`You have Paid the fees for the Course...`:<NotPaid/>}</h1>
    // )


    //Method 3:
    // it works if the paid is true otherwise nothing.Because, && operator executes if both are true!
    
    // return(
    // <>
    //      {Paid && <h1>{Paid?`You have Paid the fees for the Course...`:<NotPaid/>}</h1>}
    // </>
    // )

    
}

function PaymentDetails(){
    return(
        <>
            <h1>Welcome to the USpiders Tutorials!....</h1>
            <br />
            <br />
            <Paid isPaid={false}/>
        </>
    )
}

export default PaymentDetails;
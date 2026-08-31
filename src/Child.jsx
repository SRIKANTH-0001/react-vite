function fruitNames(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(["Apple","Banana","Grapes","Mango"])
        },1000);
    });
}

const fetchFruits={
    data:null,
    read(){
        if(this.data!==null) return this.data;
        throw fruitNames().then(fruitName=>this.data=fruitName);
    }
};



function SuspenseConcept(){

    const fruitDetails=fetchFruits.read();


    return(
        <>
            <h1>Here,Yoou can get some Fruit Details!...</h1>
            <br /><br />

            <ol>
                {fruitDetails.map((fName,index)=>(
                    <li key={index}>{fName}</li>
                ))}
            </ol>


        </>
    )
}

export default SuspenseConcept;
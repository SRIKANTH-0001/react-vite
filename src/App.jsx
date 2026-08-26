function App(){

    const fruits=["Apple","Mango","Banana","Grapes"];
    const vegitables=["Ladies Finger","Carrot","Beet Root","Capsicum"];

    const studentDetails=[
        {id:1,name:"Srikanth",age:23},
        {id:2,name:"Suresh",age:25},
        {id:3,name:"Sara",age:22},
    ];


    return(
        <>
            <h2 style={{backgroundColor:"darkblue",color:"white",position:"absolute"}}>list of Fruits!...</h2>
            <br /><br />
            <ul style={{backgroundColor:"lightgoldenrodyellow"}}>
                {fruits.map((fruit)=>
                    <li>{fruit}</li>)}
            </ul>
            <br /><br />

            <h2 style={{backgroundColor:"darkred",color:"white",position:"absolute"}}>List of Vegetables!...</h2><br /><br />
            <ul style={{backgroundColor:"lightseagreen"}}>
                {vegitables.map((vegetable)=>
                    <li>{vegetable}</li>)}
            </ul>
            <br /><br />

        <h2 style={{backgroundColor:"darkorange",color:"white",position:"absolute"}}>List of Students!...</h2><br /><br />
        <ul style={{backgroundColor:"lightseagreen"}}>
                {studentDetails.map((student)=>
                    <li key={student.id}>StudName: {student.name} //----// StudAge: {student.age}</li>)}
        </ul>
        <br /><br />

        </>
    )
}

export default App;
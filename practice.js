// const displayValues=(a,b,...rest)=>{
//     // if(a===b){
//     //     console.log("Both the given numbers are Equal to Eachother!");
//     // }else{
//     //     console.log("Condition is failed!");
//     // }

//     // rest.forEach((val,index)=>{
//     //     console.log(`${index} -- : --  ${val}`);
//     // })

//     // for(let x in rest){
//     //     console.log(x);
//     // }

//     // for(let x of rest){
//     //     console.log(x)
//     // }

//     // let add=rest.map((val,index,arr)=>{
//     //     console.log("Complete Array :-- "+arr);
        
//     //     console.log(`${index} --:-- ${val+1}`);
        
//     // }
//     // );

    

//     // let odd=rest.filter((num)=>num%2==0);
//     // console.log(odd);

//     // let marks=rest.reduce((a,b,c)=>{
//     //    return a+b;
//     // })

//     // console.log(marks);

//     //Reduce method takes all the elements in the array and returns the sigle value
    
// }

// displayValues(10,10,398,37,2,6,253,90,625);

    //  let add=(a,b,c,d)=>{
    //     console.log(a);
    //     console.log(b);
    //     console.log(c);
    //     console.log(d);
    //     console.log(a+b+c+d);
    // }


    // let arr=[10,30,20,40];
    // add(...arr);

// let arr=[10,30,50,60,70];

// let [a,b,...rest]=arr;
// console.log(a);
// console.log(b);

// console.log(rest);

    // const names=["Srikanth","Mahadev","Joshva","Rahul"];

    // const [a,b,,,]=names;

    // console.log(a+b);


// let obj={
//     name:"SRIKANTH",
//     age:56,
//     location:"Chennai",
//     food:{
//         Tamilnadu:{
//             morning:"Idli",
//             afterNoon:"Fried Rice",
//             evening:"parotta"
//         },
//         Vadakku:{
//             morning1:"Chapatti",
//             afterNoon2:"Chapatti",
//             evening3:"Chapatti"
//         }
//     },
//     language:{
//         Tamilnadu:"Tamil",
//         Vadakku:"Hindhi"
//     }
// }

// const {name,location,food:{Tamilnadu:{morning,afterNoon,evening},Vadakku:{morning1,afterNoon2,evening3}},language:{Tamilnadu,Vadakku}}=obj;

// console.log(`${name} : ${location}`);
// console.log(`Tamilnadu foods: ${morning} ${afterNoon} ${evening}`);
// console.log(`Vadakku foods: ${morning1} ${afterNoon2} ${evening3}`);
// console.log(`languages: In Tamilnadu ${Tamilnadu} In Vadakku: ${Vadakku}`);

let arr=[10,20,30,40];

let arr1=arr.map((a,b,c)=>{
    console.log(c)

})

console.log(arr1);





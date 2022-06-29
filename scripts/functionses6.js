//function expression

/*const greet=function(uname){
return `Welcome to the dashboard ${uname}`
}
console.log(greet("john"))*/

//arrow functions
/*const greet=(uname)=>{
    return `Welcome to the dashboard ${uname}`
}
console.log(greet("john"))*/

//one statement implementation and no return 
const greet1=(uname)=>{return  `welcome ${uname}`}
const greet2=(uname)=>console.log(`welcome ${uname}`)
console.log(greet1("john"))
greet2("peter")


const minmax=()=>{
    let min;
    let max;
    let a=+prompt("enter a")
    let b=+prompt("enter b")
    let c=+prompt("enter c")
    if(a>b&&a>c){
        max=a
    }
    else if(b>a&&b>c){
    max=b
    }
    else if(a==b&&b==c){
      max="equal"  
    }
    else{
       max=c
    }
    if(a<b&&a<c){
    min =a
    }
    else if(b<a&&b<c){
    min=b
    }
    else if(a==b&&b==c){
      min="equal"  
    }
    else{
       min=c
    }
    console.log("max is :",max)
    console.log("min is:",min)
    console.log(`max is ${max} min is ${min}`)
    }
for(i=0;i<4;i++){
    minmax()
}





/*const greetmessage=greetUser("john")
console.log(greetmessage)
console.log(greetUser("henry"))*/


/*function minmax(a,b,c){
let min;
let max;
if(a>b&&a>c){
    max=a
}
else if(b>a&&b>c){
max=b
}
else if(a==b&&b==c){
  max="equal"  
}
else{
   max=c
}
if(a<b&&a<c){
min =a
}
else if(b<a&&b<c){
min=b
}
else if(a==b&&b==c){
  min="equal"  
}
else{
   min=c
}
console.log("max is :",max)
console.log("min is:",min)
console.log(`max is ${max} min is ${min}`)
}
let x=1
let y=3
let z=5
minmax(x,y,z)*/

//used prompts
/*function minmax(){
    let min;
    let max;
    let a=+prompt("enter a")
    let b=+prompt("enter b")
    let c=+prompt("enter c")
    if(a>b&&a>c){
        max=a
    }
    else if(b>a&&b>c){
    max=b
    }
    else if(a==b&&b==c){
      max="equal"  
    }
    else{
       max=c
    }
    if(a<b&&a<c){
    min =a
    }
    else if(b<a&&b<c){
    min=b
    }
    else if(a==b&&b==c){
      min="equal"  
    }
    else{
       min=c
    }
    console.log("max is :",max)
    console.log("min is:",min)
    console.log(`max is ${max} min is ${min}`)
    }
for(i=0;i<4;i++){
    minmax()
}*/


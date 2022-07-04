/*let obj={
    fname:"henry",
    age:20,
    cgpa:9.0,
    getDetails:function(){
        console.log(this.fname,this.cgpa)
    }
}
obj.address="IND"
console.log(obj)
obj.getDetails()
for(let property in obj){
    console.log(property,obj[property])
}
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))*/

/*let obj=[
    {
        "fname":"peter",
        "age":20,
        "email":"peter@gmail.com"
    },
    {
        "fname":"henry",
        "age":22,
        "email":"henry@gmail.com"
    },
    {
        "fname":"peter",
        "age":23,
        "email":"peter01@gmail.com"
    },
]
const result=obj.filter(
    (item)=>item.age>=22
    )
console.log(result)

let obj={
    "fname":"peter",
    "age":23,
    "email":"peter01@gmail.com"
}

let {fname,age,email}=obj

console.log(fname)

let arr=["john",20,"john@gmail.com"]

let [fname,age,email]=arr
console.log(fname)*/
let obj=[
    {
        "fname":"peter",
        "age":20,
        "email":"peter@gmail.com"
    },
    {
        "fname":"henry",
        "age":22,
        "email":"henry@gmail.com",
        
    },
    {
        "fname":"peter",
        "age":23,
        "email":"peter01@gmail.com"
    },
]
/*let [obj1,obj2,obj3]=obj
console.log(obj1)*/
/*let temp=obj
temp.push({
    "fname":"carry",
    "age":21,
    "email":"carry@gmail.com"
})
console.log(temp)

//spread operator
const temp=[...obj,
{ "fname":"carry",
"age":21,
"email":"carry@gmail.com"
}]
console.log(temp)*/

//rest operator

/*function add(...a){
    let sum=0
   for(let i=0;i<a.length;i++){
    sum+=a[i]
   }
   return sum
}
console.log(add(10,20,30,50,90,100))*/

//1. find the user details with fname-peter and age=23









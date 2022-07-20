// execution resolve/fullfilled reject/unfullfilled state
/*let fetchUser=new Promise(
    (resolve,reject)=>{
        let user
        if(user){
            resolve(user)
        }else{
            reject("user is not define try again")
        }  
    }
)

fetchUser.then((res)=>console.log(res)).catch((err)=>console.log(err))*/

/*let fetchUser=new Promise(
    (resolve,reject)=>{
        let user={
            fname:"john",
            role:"trainee"
        }
        if(user){
            resolve(user)
        }else{
            reject(new Error("user is not defined"))
        }  
    }
)

fetchUser.then((res)=>{
  let rolepromise=new Promise((resolve,reject)=>{
    if(res.role==="admin"){
        resolve(res)
    }
    else{
        reject(new Error("you are not authorzied"))
    }
  })
  return rolepromise
}).then((res)=>console.log("level 2",res)).catch((err)=>console.log(err))*/

let fetchUser=new Promise(
    (resolve,reject)=>{
        let user={
            fname:"john",
            role:"trainee"
        }
        if(user){
            resolve(user)
        }else{
            reject(new Error("user is not defined"))
        }  
    }
)

fetchUser.then((res)=>{
    if(res.role==="admin"){
       return res
    }
    else{
        return "you are not authorized"
    }
}).then((res)=>console.log("level 2",res)).catch((err)=>console.log(err))





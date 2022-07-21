function userPromise(){
    const upromise=new Promise(
        (resolve,reject)=>{
            let user
            if(user){
                resolve(user)
            }else{
                reject("user is not define try again")
            }  
        }
    )
    return upromise 
}
/*userPromise().then((res)=>console.log(res)).catch((err)=>console.log(err))*/
async function asyncfun(){
    try{
    const result=await userPromise()
    console.log(result)}
    catch(err){
        console.log(err)
    }
}
asyncfun()






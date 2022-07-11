let tasks=[
    {
        "id":0,
        "taskname":"buy eggs",
        "completion":true
    },
     {
        "id":1,
        "taskname":"buy milk",
        "completion":false
    },
    {
        "id":3,
        "taskname":"buy rice",
        "completion":false
    },
]
function getCompleted(tasks){
const result=tasks.filter((item)=>item.completion===true)
return result
}
const completeditems=getCompleted(tasks)
console.log(completeditems)

function getPending(tasks){
    const result=tasks.filter((item)=>item.completion===false)
return result
}
const pendingitems=getPending(tasks)
console.log(pendingitems)

function changeCompletion(todoid){
let temp=[...tasks]
let obj=temp.find((item)=>item.id===todoid)
obj.completion=true
return temp
}
console.log("initial",tasks)
tasks=changeCompletion(3)
console.log("updated",tasks)



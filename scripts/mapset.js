/*let mymap=new Map()//creation of map
mymap.set("fname","peter")
mymap.set(true,"arrears")
console.log(mymap.get("fname"))
console.log(mymap.get(true))
mymap.delete(true)
//console.log(mymap.get(true))

mymap.clear()
console.log(mymap.has(true))*/

let myset=new Set()
myset.add("john")
myset.add("peter")
console.log(myset)
//myset.delete("peter")
//myset.clear()
console.log(myset.has("carry"))
console.log(myset)

for(let item of myset){
    console.log(item)
}



/*function addHeading(){
 /* const headingelement=document.getElementById("newheading")
 const headingelement=document.querySelector("#newheading")
  const paraelement=document.querySelector(".newpara")
  headingelement.innerHTML="<h1>new heading from Js </h1>"
  paraelement.innerHTML="<p>para</p>"
}*/

function addElements(){
    console.log("fun")
    const parent=document.getElementById("body-container")
    const element=document.createElement('h1')
    element.style.backgroundColor="red"
    const textValue=document.createTextNode("this is from js")
    //link
    const linkelement=document.createElement('a')
    const textlink=document.createTextNode("js link")
    linkelement.appendChild(textlink)
    linkelement.href="https://google.com"
    element.appendChild(textValue)
    parent.appendChild(element)
    parent.appendChild(linkelement)
     
}

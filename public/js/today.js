let element=document.querySelector("#long")
;

// const para=document.createElement("p")
//     para.innerHTML="did you read me ?"
//     document.body.appendChild(para) 
//     para.classList.add("try")
let today=document.querySelector(".today")
 let please =document.getElementById("please")//paragraph
 element.addEventListener("click",function(){
  
    please.classList.toggle("today")
})
let name=document.getElementById(`name`).value
const myButton =document.getElementById("btn")
const myParagraph=document.getElementById("para")




myButton.addEventListener("click",function(){

  myParagraph.classList.toggle("paragraph")

})

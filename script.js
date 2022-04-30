var div=document.createElement("div")
div.style.backgroundColor="#B0A8B9"
div.style.height="100vh"
var lab1=document.createElement("label");
lab1.innerHTML="Find Article  !!!"
lab1.setAttribute("id","titel");
var br1=document.createElement("br")
var lab2=document.createElement("lable");
lab2.innerHTML="Please Enter Details of Article :"
lab2.setAttribute("id","subtitel");
var br2=document.createElement("br");
var input1=document.createElement("input")
input1.setAttribute("id","input")

var btn=document.createElement("button")
btn.innerHTML="Search Now"
btn.setAttribute("id","clickbtn");
btn.addEventListener("click",()=>{
 var one=document.getElementById("input").value
 let a= one
 console.log(a)
   fetch("https://dev.to/api/articles")
.then(x=> x.json())
.then((y)=>{
console.log(y)
y.forEach(x => {
  if (x.id==a || x.title==a){
  console.log(x.id)
  var br3= document.createElement("br")
var lab3= document.createElement("label");
lab3.innerHTML=` Id Of Article : ${x.id} `
lab3.style.marginLeft='10%'
lab3.style.marginBottom='5px'
  var br4= document.createElement("br")
var lab4= document.createElement("label");
lab4.innerHTML=` Name Of Article : ${x.title} `
lab4.style.marginLeft='10%'
var br5= document.createElement("br")
var lab5= document.createElement("label");
lab5.innerHTML="<h4>Image Of Article :</4>"
lab5.style.marginLeft='10%'
var br6= document.createElement("br")
var img= document.createElement("img");
img.style.paddingLeft='10%'
img.src=x.social_image

img.style.height="50%"
img.style.width="50%"


div.append(br3,lab3,br4,lab4,br5,lab5,br6,img)
}
});
 
 
}).catch((z)=>{
    console.log(z)
})
})


div.append(lab1,br1,lab2,br2,input1,btn)
  document.body.append(div)











































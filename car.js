let nums=document.querySelectorAll(".loy")
let numbers=document.querySelector("#number")
let clea=document.querySelector("#clear")
let pls=document.querySelectorAll(".sign")
let delet=document.querySelector("#del")
let ans=document.querySelector(".answer")
pls.forEach(pl => {
   pl.addEventListener("click",function (params) {
      numbers.innerHTML+=pl.innerHTML
   })
});
clea.addEventListener( "click",function (params) {
numbers.innerHTML=""  
ans.innerHTML=""
})
nums.forEach(num => {
 num.addEventListener("click",function (params) {
   numbers.innerHTML+=num.innerHTML 

 })
});
delet.addEventListener("click",function (params) {

});

let ere=document.querySelector("#eqral")
ere.addEventListener("click",function (params) {
   let ass=numbers.innerHTML;
   if (ass.length===0) {
      ans.innerHTML="Input A  Number"
   } else {
      ans.innerHTML=eval(ass)
   }


})
//the use of delete function
delet.addEventListener("click",function (params) {
let awe=numbers.innerHTML;

let deletel=awe.length-1;
let last_index=awe[deletel]
let term=awe.replace(last_index, '');
numbers.innerHTML=term
})
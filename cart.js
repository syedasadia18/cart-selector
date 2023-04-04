function f(obj){


    console.log(obj);
}
let x=document.querySelector("#courses-list");
x.addEventListener("click",function(e)
{
let adc=e.target.innerText;
if (adc=="ADD TO CART")
{
    let recivecart=e.target.parentElement.parentElement;
    let img=recivecart.firstElementChild.getAttribute("src");
    let pric=recivecart.lastElementChild.querySelector("span").innerText;
    let name=recivecart.lastElementChild.querySelector("p").innerText;
  let obj=

  {


image:img,price:pric,nam:name,


  }
  f(obj);
}

});




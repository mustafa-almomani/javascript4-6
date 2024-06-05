



// document.getElementById("div1").onmouseover = function() {myFunction()};

// function myFunction() {
//   document.getElementById("div1").innerHTML= "Hello Word!";
// }

// document.getElementById("div1").onmouseleave= function() { myout()};


// function myout() {
//   document.getElementById("div1").innerHTML = "Can I Help You !";
// }


var x=document.getElementById("div1")

x.onmouseover = function ()
{
x.innerHTML="Can I Help You !";
};
x.onmouseleave = function ()
{
x.innerHTML="Hello Word !";
};





document.getElementById("flags").onchange = function() {changeimg(this.value)};

function changeimg(value){
document.getElementById("img").src=value;
}


function change_family(value){
    document.getElementById("p-2").style.fontFamily=value;


}

function change_size(value){
    document.getElementById("p-2").style.fontSize=value;
    

}






// document.querySelector(".cars #jordan").onclick = function() {cccc()};

// function cccc(){
//     document.getElementById("img").src="image/ف.jpg"
// }


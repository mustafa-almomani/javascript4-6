



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


document.getElementById("image").onchange=function(){changeimg2(this.value)}

function changeimg2(value)
{
document.getElementById("img2").src=value;
}



function change_family(value){
    document.getElementById("p-2").style.fontFamily=value;


}

function change_size(value){
    document.getElementById("p-2").style.fontSize=value;
    

}


function change_style(){
if(document.getElementById("underline").checked== true)
    {
        document.getElementById("p-2").style.textDecoration= "underline";

    }
    else
    {
        document.getElementById("p-2").style.textDecoration= "none";;

    }
    if(document.getElementById("italic").checked== true)
        {
            document.getElementById("p-2").style.fontStyle = "italic";
        }
        else{
            document.getElementById("p-2").style.fontStyle = "normal";
        }
        if(document.getElementById("bold").checked== true)
            {  
                 document.getElementById("p-2").style.fontWeight = "bold";
            }
            else{
                document.getElementById("p-2").style.fontWeight = "normal";
            }
        
}

           
var y=document.getElementById("color");
y.onclick=function(){
    y.style.backgroundColor="red"
};

 
function check(){
   
var pass = document.getElementById("checkpass");
var pass2 = document.getElementById("checkpass2");


    var message = document.getElementById('p-3');

    if( pass.value.length < 6  )
        {
            message.innerHTML="too short"
        }
        else{
            message.innerHTML="ok"

        }
        if(pass.value==pass2.value){
            message.innerHTML="ok"

            document.getElementById ("submit").style.display="inline"     
         }



}


function add(){
let song =document.getElementById("song")
let addsong=document.getElementById("addsong")
let div1 =document.getElementById("divv1")



}
function msg()
{
    alert("welcome")
}







function addSong() {
    var songInput = document.getElementById("song");
    var songName = songInput.value;

 

    var playlist = document.getElementById("playlist");
    var listItem = document.createElement("li");
    listItem.textContent = songName;
    playlist.appendChild(listItem);

    
    songInput.value = "";
}
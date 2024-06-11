const url="https://66681676f53957909ff67af8.mockapi.io/users/Animals";
async function getdata()

{
    const response = await fetch(url);

    var jsondata = await response.json()
    var variabelselect=document.getElementById("myselect")

     for(let i=0; i<jsondata.length ;i++)
     {
        var createitem=document.createElement("option");
        createitem.innerHTML=jsondata[i].name;
        createitem.value=jsondata[i].image;
        variabelselect.appendChild(createitem);
        var img= document.getElementById("image")

       
     }
    
   
}
getdata();
 function imagechange(value){
    var img= document.getElementById("image")

     img.src=value;
 }







document.querySelector("#submit").addEventListener("click",save);
var arr=JSON.parse(localStorage.getItem("data"))||[];
function save(){
    
    var name= document.getElementById("name").value;
    var email=document.getElementById("email").value;
   var password= document.getElementById("password").value;
   var check= document.getElementById("check").checked;

   obj={
    name:name,
    email:email,
    password:password,
   }
  

   if(name!=""&&email!=""&&password!=""){
arr.push(obj)
localStorage.setItem("data",JSON.stringify(arr))
   }

   else{
    if(name==""){
       document.querySelector("#alert1").innerText="Please enter your full name";
       }
        if(email==""){
        document.querySelector("#alert2").innerText="Please enter your email";
        }
        if(password==""){
            document.querySelector("#alert3").innerText="Please enter your password";
            }
            if(check==false){
                document.querySelector("#alert4").innerText="Please accept Terms&Conditions";
            }
           
   }
   
}


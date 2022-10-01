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
  

   if(name!=""&&email!=""&&password!=""&&check==true){
     var upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     var lower="abcdefghijklmnopqrstuvwxyz";
     var numeric="0123456789";
     var symbol="~!@#$%^&*";
     countu=0;countl=0;countn=0;counts=0;
    for(i=0;i<password.length;i++){
            for(var j=0;j<upper.length;j++){
                if(password[i]==upper[j]){
                   countu++
                }
                if(password[i]==lower[j]){
                    countl++
                 }
                 if(password[i]==numeric[j]){
                    countn++
                 }
                 if(password[i]==symbol[j]){
                    counts++
                 }
            }

        }
        if(countn<1||counts<1||countl<1||countu<1){
           let alert= document.getElementById("alert3");
           alert.innerText="Password must contain at least one uppercase letter,one lowercase letter,one digit and atleast one symbol"
        }
    
    if(countn>0&&counts>0&&countl>0&&countu>0){
       if(password.length>7){
arr.push(obj)
localStorage.setItem("data",JSON.stringify(arr));
window.location.href = "login.html";
       }
       else{
        let alert= document.getElementById("alert3");
        alert.innerText="Password must be of atleast 8 characters"
       }
   }
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


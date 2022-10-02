document.getElementById("login").addEventListener("click",save);
let data=JSON.parse(localStorage.getItem("data"));
function save(){
    let iemail=document.getElementById("email").value;
    let ipassword=document.getElementById("password").value;
    let obj={
        email:iemail,
        password:ipassword,
    }
    if(obj.email==""){
        let alert= document.querySelector("#email+p");
        alert.innerText="Please enter email"
    }
    if(obj.password==""){
        let alert= document.querySelector("#password+p");
        alert.innerText="Please enter password"
    }
    
var count=0;
    for(var i=0;i<data.length;i++){
        if(obj.email==data[i].email&&obj.password==data[i].password){
            count++;
            let alert=document.querySelector("h2")
            alert.innerText="Logged in Successful";
            alert.style.color="teal";
           
            let direct=document.querySelector("h4");
            direct.innerText="return to homepage";
          
            let redirect=document.querySelector("h4").addEventListener("click",fun);
            function fun(){
                window.location.href="index.html";
            }
          
        }
    }
    if(count==0&&obj.email!=""&&obj.password!=""){
        let alert=document.querySelector("h2")
        alert.innerText="Incorrect Email id or Password";

        alert.style.color="red"
    }
}
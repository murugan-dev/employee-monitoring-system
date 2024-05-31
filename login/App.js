const checkbox = document.getElementById("checkbox");
const pass = document.querySelector(".i2");


checkbox.addEventListener("click",()=>{
 
    if(checkbox.checked){
        pass.type = "text";
    }
    else{
        pass.type="password";
    }
})

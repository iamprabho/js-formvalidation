let username = document.getElementById("username");
let password = document.getElementById("password");
let flag1;
let flag2;



function validateForm(){ 
    if(username.value==""){
     document.getElementById("userError").innerHTML = "user name is empty";
     flag1 = 0;
     




    }else if(username.value.length < 3){
        document.getElementById("userError").innerHTML = "user name required min 3 characters";
        flag1 = 0 ;


    }
    else{
        document.getElementById("userError").innerHTML = "";
        flag1 = 1;

    }
    
    if(password.value ==""){
        document.getElementById("passError").innerHTML = "password is empty";
        flag2 = 0;



    }else if(password.value.length < 3){
        document.getElementById("passError").innerHTML = "password required min 3 characters";
        flag2 =0 ;
        
    }
    else{
        document.getElementById("passError").innerHTML = "";
        flag2 = 1;


    }
    if(flag1 && flag2){
        return true;

    }
    else{ 
        return false;
    }
    

    
 }
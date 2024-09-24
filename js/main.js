var user =document.getElementById("name").value;
var email =document.getElementById("mail").value;
var pass =document.getElementById("pass").value;
var confirmPass =document.getElementById("confirm").value;
var result =document.getElementById("result");
function validation(){

    if(user=="" && email == "" && pass == ""&& confirmPass == ""){
    result.innerHTML="Write Data in Form"
    return false;
    }else if(user.length<5 || user.length>15){
    result.innerHTML="Write a name 5-15 Character"
    return false;
    }
    else if(email.indexof("@")==-1||email.indexof(".com")==-1){
    result.innerHTML="Write a correct email"
    return false;
    }else if(pass==""){
        result.innerHTML="Enter Password"
    return false;
    }else if(pass.length<8){
        result.innerHTML="Week Password"
    return false;
    }
    else if(confirmPass!=pass){
        result.innerHTML="Match Password"
        return false;
    }
}
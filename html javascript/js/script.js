/* 
* Author : Tony philipose
* Create on : 22-oct-18
* Recived by : Sreekumari R
* javascript for page validation in sj school web app
*/

/*function to validate the name of the user it must
 contain only letters for signup.html */
function validateName() {
    var Name = document.getElementById("Name");
    var regexname = /^[a-zA-Z ]{2,30}$/;
    
    if(regexname.test(Name.value)==false ){ 
        alert(Name.name+" "+"must contain atleast 2 letters..!");
        Name.value="";
        Name.focus();
        return false;
    }
}

//function to validate email feild for both index.html and signup.html
function validateEmail(){
    var email = document.getElementById("email");
    var regexmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if(regexmail.test(email.value)==false ){ 
        alert("Enter a valid email id..!");
        email.value="";
        email.focus();
        return false;
    }
}

/*Function to validate the password it contain letters 
numbers ,atleast 5 elements and max 10. for both index.html and signup.html*/
function validatePassword(){
    var passwd = document.getElementById("password");
    var regexpaswd = /^[a-zA-Z0-9 ]{5,10}$/;
    if(regexpaswd.test(passwd.value)==false ){ 
        alert("Passwor must contain atleast 5 elements..!");
        passwd.value="";
        passwd.focus();
        return false;
    }
}

//signup button click in signup.html
function signUp(){ 
    var name = document.getElementById("Name");
    var email = document.getElementById("email");
    var passwd = document.getElementById("password");
   
    //isEmpty fn for null check
    if(isEmpty(name)){
        return false;
    }
    if(isEmpty(email)){
        return false;
    }
    if(isEmpty(passwd)){
        return false;
    }

    //store data into local storage
    localStorage.setItem("name",name.value);
    localStorage.setItem("uname",email.value);
    localStorage.setItem("pswd",passwd.value);
    window.location.href="index.html";  
}

//login button click in index.html
function login() {
    var email = document.getElementById("email");
    var passwd = document.getElementById("password");

    //fetch data from local database
    var lun = localStorage.getItem("uname");
    var lpwd = localStorage.getItem("pswd");

    if(isEmpty(email)){
        return false;
    }
    if(isEmpty(passwd)){
        return false;
    }
    
    //check the username and password are matched 
    if(email.value === lun && passwd.value === lpwd){
        window.location.href="home.html";
    }
    else{
        alert("Username and  Password are invalid..!!");
        email.focus();
    }

}

//empty check function for feilds, for  home.html, index.html, signup.html
function isEmpty(obj){
    if(obj.value == "" || obj.value == null){
        alert(obj.id+" "+"must be required..!");
        obj.focus();
        return true;
    }else{
        return false;
    }  
}

//checked true validation function its not using 
/* function checkTrue(check1, check2){
    if(check1.checked == false && check2.checked == false){
        alert(check1.name+" "+"must be required..!");
        return true;
    }else{
        return false;
    }  
}  */

/*This function doing the radio and check list validation
 using the feild name.- home.html  */ 
function checkElement(obj){
 var n = obj.length;
 var i;
 var status ='not check';
 for(i=0; i < n; i++){
     if(obj[i].checked){
         status = 'check';
         break;
     }else{
         status = 'not check';
     }
 }
 if(status == 'not check'){
     alert(obj[0].name+" "+'must be choose..!');
     return true;
 }else {
     return false;
 }
}

/*dobDate function is for validate the age should
 be greater than 8 - home.html  */
function dobDate(){
    var dob = document.getElementById("Date_of_birth");
    var limt ='2010-01-01';
    if(dob.value > limt){
        alert("Age should greater than 8 ");
        dob.value="";
        dob.focus();
        return false; 
    } 
}

// validation for registeration in home page - home.html  
function validateForm() {
    var name = document.getElementById("First_name");
    var lname = document.getElementById("Last_name");
    var dob = document.getElementById("Date_of_birth");
    var fn = document.getElementById("Father_name");
    var mn = document.getElementById("Mother_name");
    var cn = document.getElementById("contact");
    var email = document.getElementById("email");
    var s1 = document.getElementById("state");
    var s2 = document.getElementById("district");
    var address = document.getElementById("address");
    var pin = document.getElementById("pin");
    var arts = document.getElementById("arts");
    var sports = document.getElementById("sports");
    var female = document.getElementById("female");
    var male = document.getElementById("male");
    var radios = document.getElementsByName("gender");
    var checkboxs = document.getElementsByName("Hobbies");

    //regex for validations
    var regemail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    var regname = /^[a-zA-Z ]{2,30}$/;
    var regadres = /^[a-zA-Z ]{5,30}$/;
    var con = /^[0-9]{10}$/;
    var p = /^[0-9]{6}$/;
    

    /*using a single isEmpty function for null check 
    function mentioned above */
    if(isEmpty(name)){}
    else if(isEmpty(lname)){}
    else if(isEmpty(dob)){}
    else if(isEmpty(fn)){}
    else if(isEmpty(mn)){}
    else if(isEmpty(cn)){}
    else if(isEmpty(email)){}
    else if(isEmpty(address)){}
    else if(isEmpty(pin)){}
    else{
        validateFeilds();
    }
   
   /*function for regex validation on button click 
   in registeration -home.html */
   function validateFeilds(){ 
    
    if(regname.test(name.value)==false ){ 
        alert("Name contain atleast 2 letters");
        name.focus(); 
        return false;   
    }
    else if(regname.test(lname.value)==false){
        alert("Last name contain atleast 2 letters");
        lname.focus();
        return false; 
    } 
    else if(regname.test(fn.value)==false){
        alert("Father name contain atleast 2 letters");
        fn.focus();
        return false; 
    } 
   
   else if(regname.test(mn.value)==false){
        alert("Mother name contain atleast 2 letters");
        mn.focus();
        return false; 
    } 
    else if(con.test(cn.value)==false){
        alert("contact number must be 10 digits");
        cn.focus();
        return false; 
    }
    else if(regemail.test(email.value)==false){
        alert("Enter a valid email address");
        email.focus();
        return false; 
    }
    else if(s1.value == 'Select State'){
        alert("Select your state");
        s1.focus();
    }
    else if(s2.value == 'Select District'){
        alert("Select your District");
        s2.focus();
        return false; 
    }
    // checkElement fn for validating the both radio and check button
    else if( checkElement(radios) ) 
    {           

    }
    else if( checkElement(checkboxs) ) 
    {           
        
    }
    else if(regadres.test(address.value)==false){
        alert("Address contain min 5 letters");
        address.focus();
        return false; 
    } 
    else if(p.test(pin.value)==false){
        alert("Pincode number must be 6 digits");
        pin.focus();
        return false; 
    }
    
    else{
        mainFunction();
    }
    }  

     //form submit after check validation -home.html 
    function mainFunction(){
        alert("sucessfully saved..!!");
        document.forms['myForm'].reset();
    }
}

//cancel button click -home.html
function cancelForm(){
   var close = confirm("do you want to cancel..!!");
   if (close == true){
        document.forms['myForm'].reset();
   }
    
}
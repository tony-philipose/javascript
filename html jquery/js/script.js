/* 
* Author : Tony philipose
* Create on : 22-oct-18
* Recived by : Sreekumari R
* jquery for page validation in sj school web app
 alert(obj.val());
            if(obj.val() != "" || obj.val() != null){
            $(obj1).hide();
            }else{
                $(obj1).show();    
            }
*/

function isEmpty(obj, obj1){
    if(obj.val() == "" || obj.val() == null){
       //alert(obj.attr("name")+" "+"must be required..!");
       //alert(obj1);
      $(obj1).show(function(){});
        obj.focus();
        obj.focusout(function(){
            if(obj.val() == "" || obj.val() == null){
                $(obj1).show();
                }else{
                    $(obj1).hide();    
                } 
        })
        return true;
    }else{
        return false;
    }  
}

function isSelect(obj1, obj2){
    if(obj1.prop('selectedIndex') == 0){
        $(obj2).show(function(){});
        obj1.focus();
        obj1.focusout(function(){
            if(obj1.prop('selectedIndex') == 0){
                $(obj2).show();
                }else{
                    $(obj2).hide();    
                } 
        })
        return true;
    }
    else{
        return false;
    }
}

function isCheck(obj1, obj2){
    if($(obj1).is(":checked")){

        return false;
    }
    else{
        $(obj2).show();
        $(obj1).click(function(){
            $(obj2).hide();
        });
        return true;
    }
}

function nameVal(obj1, obj2){
    var nameRegex = /^[a-zA-Z ]{2,30}$/;
    
    if(!$(obj1).val().match(nameRegex)){
        $(obj2).show(); 
        $(obj1).focus();
        return false;
    }
    else{
        $(obj2).hide();
        return true;
    }
}

function addressVal(obj1, obj2){
    var addressRegex = /^[a-zA-Z ]{5,30}$/;
    
    if(!$(obj1).val().match(addressRegex)){
        $(obj2).show(); 
        $(obj1).focus();
        return false;
    }
    else{
        $(obj2).hide();
        return true;
    }
}


function contactVal(obj1, obj2){
    var contactRegex = /^[0-9]{10}$/;
    
    if(!$(obj1).val().match(contactRegex)){
        $(obj2).show(); 
        $(obj1).focus();
        return false;
    }
    else{
        $(obj2).hide();
        return true;
    }
}

function emailVal(obj1, obj2){
    var emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    
    if(!$(obj1).val().match(emailRegex)){
        $(obj2).show(); 
        $(obj1).focus();
        return false;
    }
    else{
        $(obj2).hide();
        return true;
    }
}

function pinVal(obj1, obj2){
    var pinRegex = /^[0-9]{6}$/;
    
    if(!$(obj1).val().match(pinRegex)){
        $(obj2).show(); 
        $(obj1).focus();
        return false;
    }
    else{
        $(obj2).hide();
        return true;
    }
}

$(document).ready(function(){
    
    $("span").hide();
    $("#save").click(function(){
       var r = $("#First_name").val();
       
        if(isEmpty($("#First_name"),$("#name"))){
            return false
        }
        else if(isEmpty($("#Last_name"),$("#lname"))){
            return false
        }
        else if(isEmpty($("#Date_of_birth"),$("#Dob"))){
            return false
        }
        else if(isEmpty($("#Father_name"),$("#fname"))){
            return false
        }
        else if(isEmpty($("#Mother_name"),$("#mname"))){
            return false
        }
        else if(isEmpty($("#contact"),$("#mob"))){
            return false
        }
        else if(isEmpty($("#email"),$("#mail"))){
            return false
        }
        else if(isSelect($("#state"),$("#stateerror"))){
            return false
        }
        else if(isSelect($("#district"),$("#districterror"))){
            return false
        }
        else if(isEmpty($("#address"),$("#addresserror"))){
            return false
        }
        else if(isEmpty($("#pin"),$("#pinerror"))){
            return false
        }
        else if(isCheck($(".gender"),$("#gendererror"))){
            return false
        }
        else if(isCheck($(".Hobbies"),$("#Hobbieerror"))){
            return false
        }
        else{
            alert('ok');
        }
      }); 

      $("#First_name").on('change',function(){
        nameVal("#First_name","#rname");
      });

      $("#Last_name").on('change',function(){
        nameVal("#Last_name","#rlname");
      });

      $("#Father_name").on('change',function(){
        nameVal("#Father_name","#rfname");
      });

      $("#Mother_name").on('change',function(){
        nameVal("#Mother_name","#rmname");
      });

      $("#contact").on('change',function(){
        contactVal("#contact","#rmob");
      });

      $("#email").on('change',function(){
        emailVal("#email","#rmail");
      });

      $("#address").on('change',function(){
        addressVal("#address","#raddresserror");
      });

      $("#pin").on('change',function(){
        pinVal("#pin","#rpinerror");
      });
});
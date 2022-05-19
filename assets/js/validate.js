function validateEmail(){
    // get value of input email
    var email=$("#mail_id").val();
    // use reular expression
     var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
     if(reg.test(email)){
         return true;
     }else{
         return false;
     }

}

function validatePassword(){
    //get input password value
    var pass=$("#password_id").val();
    // check it s length
    if(pass.length >7 ){
        return true;
    }else{
        return false;
    }

}

function validateConfirmPassword(){
    //get input password value
    var passconfirm=$("#repeat_pass_id").val();
var pass=$("#password_id").val();
    // check it s length
    if(passconfirm != pass ){
        return false;
    }else{
        return true;
    }

}

    //Validation PART
    function ContactvalidateEmail() {
        // get value of input email
        var email = $("#contact_email_id").val();
        // use reular expression
        var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        if (reg.test(email)) {
          return true;
        } else {
          return false;
        }

      }

      $(document).ready(function () {

        $("#contact_email_id").keyup(function () {
          if (ContactvalidateEmail()) {
            // if the email is validated
            // set input email border green
            $("#contact_email_id").css("border", "2px solid green");
            // and set label 
            $("#validate_email").html("<p class='text-success'>Validated</p>");
          } else {
            // if the email is not validated
            // set border red
            $("#contact_email_id").css("border", "2px solid red");
            $("#validate_email").html("<p class='text-danger'>Invalid email</p>");
          }

        });



      });


$(document).ready(function () {

  $("#mail_id").keyup(function(){
        if(validateEmail()){
            // if the email is validated
            // set input email border green
            $("#mail_id").css("border","2px solid green");
            // and set label 
            $("#email_validation").html("<p class='text-success'>Validated</p>");
        }else{
            // if the email is not validated
            // set border red
            $("#mail_id").css("border","2px solid red");
            $("#email_validation").html("<p class='text-danger'>Invalid email</p>");
        }
        buttonState();
    });


// use keyup event on password
$("#password_id").keyup(function(){
        // check
        if(validatePassword()){
            // set input password border green
            $("#password_id").css("border","2px solid green");
            //set passMsg 
            $("#pass_validation").html("<p class='text-success'>Password validated</p>");
        }else{
                // set input password border red
            $("#password_id").css("border","2px solid red");
            //set passMsg 
            $("#pass_validation").html("<p class='text-danger'>Password not valid</p>");
        }
        buttonState();
    });

$("#repeat_pass_id").keyup(function(){
        // check
        if(validateConfirmPassword()){
            // set input password border green
            $("#repeat_pass_id").css("border","2px solid green");
            //set passMsg 
            $("#passConfirm_validation").html("<p class='text-success'>Password validated</p>");
        }else
      {
      $("#repeat_pass_id").css("border","2px solid red");
      $("#passConfirm_validation").html("<p class='text-danger'>Password not valid</p>");
    }
        buttonState();
    });


});

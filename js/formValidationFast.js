$(function() {
      
      var form = $("#form");
      enableFastFeedback(form);
      
      $("#form").submit(function(event){
            var name = $("#name").val();
            var password = $("#password").val();
            var message = $("#message").val();
            var checked = $("#checkbox").is(":checked");
            
            validateNameField(name, event);
            validatePasswordField(password, event);
            validateMessageField(message, event);
            validateCheckboxField(checked, event);
            
            });
      });

function enableFastFeedback(formElement){
      var nameInput = formElement.find("#name");
      var passwordInput = formElement.find("#password");
      var messageInput = formElement.find("#message");
      var checkboxInput = formElement.find("#checkbox");
      
nameInput.blur(function(){
      var name = $(this).val();
      validateNameField(name, event);
      
      if(!isValidName(name)){
            $(this).css("box-shadow", "0 0 4px #811");
      }else{
            $(this).css("box-shadow", "0 0 4px #181");
      }
      });

passwordInput.blur(function(){
      var password = $(this).val();
      validatePasswordField(password, event);
      
      if(!isValidPassword(password)){
            $(this).css("box-shadow", "0 0 4px #811");
      }else{
            $(this).css("box-shadow", "0 0 4px #181");
      }
      });
      
messageInput.blur(function(){
      var message = $(this).val();
      validatePasswordField(message, event);
      
      if(!isValidMessage(message)){
            $(this).css("box-shadow", "0 0 4px #811");
      }else{
            $(this).css("box-shadow", "0 0 4px #181");
      }
      });

checkboxInput.changed(function(){
      var isChecked = $(this).is(":checked");
      validateCheckboxField(isChecked, event);
      
      if(!isChecked){
            $(this).add("label[for='cb']").css("box-shadow", "0 0 4px #811");
      }else{
            $(this).add("label[for='cb']").css("box-shadow", "0 0 4px #181");
      }
      });

}


function validateNameField(name, event){
if(!isValidName(name)){
      $("#name-feedback").text("Please enter at least 2 characters");
      event.preventDefault();
      }else{
          $("#name-feedback").text("");  
      }
}



function validatePasswordField(password, event){
if(!isValidPassword(password)){
      $("#password-feedback").text("Password must have at least 6 characters including a number");
      event.preventDefault();
      }else{
          $("#password-feedback").text("");  
      }
}

function validateMessageField(message, event){
if(!isValidMessage(password)){
      $("#message-feedback").text("Please enter a message");
      event.preventDefault();
      }else{
          $("#message-feedback").text("");  
      }
}

function validateCheckboxField(isChecked, event){
if(!isChecked){
      $("#checkbox-feedback").text("Please enter a checkbox");
      event.preventDefault();
      }else{
          $("#checkbox-feedback").text("");  
      }
}


function isValidName(name){
      return name.length >= 2;
}

function isValidPassword(password){
      return password.length >= 6 && /.*[0-9].*/.test(password);
}

function isValidMessage(message){
      return message.trim() !== "";
}




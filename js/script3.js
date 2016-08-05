$(function() {
        
        //$("#btn-hover").hover(function(){
        //        alert("button was hovered");
        //        });
        //
        //$(".green-box").hover(function(){
        //        $(this).text("I was Hovered");
        //        });
        
        //$(".green-box").mouseenter(function(){
        //        $(this).fadeTo(500, 0.2);
        //        });
        //
        //$(".green-box").mouseleave(function(){
        //        $(this).fadeTo(500, 1.0);
        //        });          
        //
        //$("#btn-hover").mouseenter(function(){
        //        alert("button was hovered");
        //        });
        //
        //$("#btn-click").click(function(event){
        //        console.log(event);
        //        alert("button was clicked");
        //        });
        //
        //$(".red-box").click(function(){
        //        $(this).fadeTo(1000, 0.5);
        //        });
        //
        //var blueBox = $(".blue-box");
        
        //blueBox.mouseenter(function(){
        //        $(this).stop().fadeTo(500, 0.2);
        //        });
        //blueBox.mouseleave(function(){
        //        $(this).stop().fadeTo(500, 1);
        //        });
        
        //blueBox.hover(function(){
        //        $(this).stop().fadeTo(500, 0.2);
        //        }, function(){
        //        $(this).stop().fadeTo(500, 1);               
        //        });
        //
        
        //function definition
        //function logEvent(){
        //        console.log("Mouse click or Keydown");
        //}
        //function call      
        //$("html").on("click keydown", logEvent);
        //~~~~~~~~~~~~~~~~
        
        
        //var galleryImage = $(".gallery").find("img");
        ////function definition
        //function imageFade(){
        //        i = (i + 1) % images.length;
        //        $(this).fadeOut(function(){
        //              $(this).attr("src", images[i]).fadeIn();  
        //                });
        //        }
        ////function call 
        //var images = [
        //        "images/laptop-mobile_small.jpg",
        //        "images/laptop-on-table_small.jpg",
        //        "images/people-office-group-team_small.jpg"                  
        //];
        //var i = 0;
        //galleryImage.on("click", imageFade);
        
        //~~~~~~~~~~~~~~~~~~~
        
        //$("#btn-click").click({
        //        user: "Peter"
        //}, function(event){
        //        greetUser(event.data);
        //        });
        //
        //function greetUser(userdata){
        //        username = userdata.user || "Anonymous";
        //        
        //        alert("Welcome Back " + username + "!");
        //}
        
        //$("p").click(function(){
        //        $(this).slideUp();
        //});
        //$("#content").append("<p>This is a dynamically added paragraph </p>");
        
        //$("#content").on("click", "p", function(){
        //        $(this).slideUp();
        //        });
        //$("#content").append("<p>This is a dynamically added paragraph </p>");
        //
        //$("body").on("mouseenter", "li", function(){
        //        $(this).css("color", "#666");
        //        });
        //
        
        $("html").keydown(function(event){
            console.log(event.which);
            });
        
        var ARROW_RIGHT = 39;
        $("html").keydown(function(event){
            if(event.which == ARROW_RIGHT){
                  $(".blue-box").stop().animate({
                       marginLeft: "+=10px"
                        },50);
            }
        });
        
        var ARROW_LEFT = 37;
        $("html").keydown(function(event){
            if(event.which == ARROW_LEFT){
                  $(".blue-box").stop().animate({
                       marginLeft: "-=10px"
                        },50);
            }
        });
        
      });
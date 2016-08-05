$(function() {
        
        //$("#btn-hover").hover(function(){
        //        alert("button was hovered");
        //        });
        //
        //$(".green-box").hover(function(){
        //        $(this).text("I was Hovered");
        //        });
        
        $(".green-box").mouseenter(function(){
                $(this).fadeTo(500, 0.2);
                });
        
        $(".green-box").mouseleave(function(){
                $(this).fadeTo(500, 1.0);
                });          
        
        $("#btn-hover").mouseenter(function(){
                alert("button was hovered");
                });
        
        $("#btn-click").click(function(event){
                console.log(event);
                alert("button was clicked");
                });
        
        $(".red-box").click(function(){
                $(this).fadeTo(1000, 0.5);
                });
        
        var blueBox = $(".blue-box");
        
        //blueBox.mouseenter(function(){
        //        $(this).stop().fadeTo(500, 0.2);
        //        });
        //blueBox.mouseleave(function(){
        //        $(this).stop().fadeTo(500, 1);
        //        });
        
        blueBox.hover(function(){
                $(this).stop().fadeTo(500, 0.2);
                }, function(){
                $(this).stop().fadeTo(500, 1);               
                });
        
      });
$(function() {
        
        //var inputFields = $("input:text, input:password, textarea");
        //inputFields.focus(function(){
        //        $(this).css("box-shadow", "0 0 4px #666");
        //        });
        //
        //inputFields.blur(function(){
        //        $(this).css("box-shadow", "none");
        //        });
        //
        //$("#name").blur(function(){
        //        var text = $(this).val();
        //        if(text.length < 3){
        //                $(this).css("box-shadow", "0 0 4px #811");
        //        }else{
        //                $(this).css("box-shadow", "0 0 4px #181");
        //        }
        //        });         
        
        $("#checkbox").change(function(){
                var isChecked = $(this).is(":checked");
                if(isChecked){
                        $(this).add("label[for='cb']").css("box-shadow", "0 0 4px #818");
                }else{
                        $(this).css("box-shadow", "0 0 4px #181");
                }
                });
        
      });
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
        
        //$("#checkbox").change(function(){
        //        var isChecked = $(this).is(":checked");
        //        if(isChecked){
        //                $(this).add("label[for='cb']").css("box-shadow", "0 0 4px #818");
        //        }else{
        //                $(this).css("box-shadow", "0 0 4px #181");
        //        }
        //        });
        //
        //$("#selection").change(function(){
        //        var selectedOption = $(this).find(":selected").text();
        //        alert(selectedOption);
        //        });
        
        //$("#form").submit(function(event){
        //        var textArea = $("#message");
        //        if(textArea.val().trim() === ""){
        //                textArea.css("box-shadow", "0 0 4px #811");
        //                event.preventDefault();
        //        }else{}
        //        });
        
        //$("#code").load("Text.txt");
        //
        //$("#code").load("noSuchFile.php", function(response, status){
        //    if(status == "error"){
        //          alert("No Such File!");
        //    }
        //    console.log(response);
        //    });
        //
        
        //var flickrApiUrl =  "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
        //
        //$.getJSON(flickrApiUrl, {
        //    tags: "sun, beach",
        //    tagmode: "any",
        //    format: "json"
        //}).done(function(data){
        //    console.log(data);
        //    $.each(data.items, function(index, item){
        //          console.log(item);
        //          $("<img>").attr("src", item.media.m).appendTo("#flickr");
        //          if(index == 4){
        //                return false;
        //          }
        //          });
        //    }).fail(function(){
        //    alert("Ajax call failed!");
        //    });
        
        var pokemonUrl = "http://pokeapi.co/api/v2/generation/1";
        var pokemonByName = "http://pokeapi.co/api/v2/pokemon/";
        
        $.getJSON(pokemonUrl).done(function(data){
            console.log(data);
            $.each(data.pokemon_species, function(index, pokemon){
                  var name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
                  var link = $("<a>").attr("id", pokemon.name).attr("href", "#").append($("<strong>").text(name));
                  var par = $("<p>").html("Pokemon species No: " + (index+1) + " is ").append(link);
                  
                  link.click(function(event){
                        $.getJSON(pokemonByName + pokemon.name).done(function(details){
                              console.log(details);
                              var pokemonDiv = $("#pokemon-details");
                              pokemonDiv.empty();
                              pokemonDiv.append("<h2>" + name + "</h2>");
                              pokemonDiv.append("<img src='" + details.sprites.front_default + "'>");
                              pokemonDiv.append("<img src='" + details.sprites.back_default + "'>");
                              pokemonDiv.append("<img src='" + details.sprites.front_shiny + "'>");
                              pokemonDiv.append("<img src='" + details.sprites.back_shiny + "'>");                              
                              });
                        event.preventDefault();
                        });
                  
                  par.appendTo("#pokemon");
            });
        }).fail(function(){
            console.log("request to pokemon api failed");
            }).always(function(){
            console.log("pokemon is awesome");
            });
      });
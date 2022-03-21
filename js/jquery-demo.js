//=========== Change background 
// $(".changecolor").css
// ("background-color", "rgb(24, 71, 151)");
//=========== Change multiple properties 
// $(".changecolor").css({"color":"yellow",
// "font-size":"30px"}); 

//=========== Add a CSS Class
// $("#addClass").addClass( "gray-bg" );
//=========== Add multiple CSS Classes
// $("#addClass").addClass( "gray-bg blue-border" );   

//=========== Remove a CSS Class
// $("#addClass").removeClass ("gray-bg");
//=========== Remove multiple CSS Classes
// $("#addClass").removeClass ("gray-bg blue-border"); 

//=========== Replace HTML content
// $("#addClass").html ("I've been replaced!");

//=========== adds content at the beginning
// $("#addContent p").prepend("This will go at the beginning.<br>");
//=========== adds content at the end
// $("#addContent p").append("<br>This will go at the end");

//=========== adds content before
// $("#addContent p").before("This will go before.<br>");
//=========== adds content after
// $("#addContent p").after("<br>This will go after");

//=========== Removes the element
// $("#addContent p").remove();
//=========== Empties the element
// $("#addContent p").empty();

//=========== Changes width of the element
// $("#changewidth").width("20rem");
//=========== Changes height of the element
// $("#changewidth").height("20rem");

//=========== JQuery Events
//=========== Click
// $( "#target" ).click(function() { 
//     $(".clickTarget").addClass( "gray-bg" );
// });
//=========== Double Click
$("#target").dblclick (function(){
    $(".clickTarget").removeClass( "gray-bg" );
});
//=========== Mouse Enter
$("#enterTarget").mouseenter (function(){ 
    $("#enterTarget").css("background-color", "rgb(24, 71, 151)");
});
//=========== Mouse Leave
$("#enterTarget").mouseleave (function(){ 
    $("#enterTarget").css("background-color", "white");
});

//=========== On Method
$("#onMethod").on({ mouseenter: function(){
    $(this).css("background-color", "lightgray");
    },
    mouseleave: function(){
    $(this).css("background-color", "lightblue");
    },
    click: function(){
    $(this).css("background-color", "yellow");
    }
    });

//=========== Effects
$( "#effects" ).mouseenter(function() { 
    $("#effects p").hide();
});
$( "#effects" ).mouseleave(function() { 
    $("#effects p").show();
});
//=========== Slide
// $( "#slideUp" ).click(function(){
//     $("#slides").slideUp();
// });
// $( "#slideDown" ).click(function(){
//     $("#slides").slideDown();
// })
// $( "#toggle" ).click(function(){
//     $("#slides").slideToggle();
// })
    
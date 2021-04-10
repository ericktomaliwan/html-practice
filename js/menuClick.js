$(document).ready(function(){
    
});



$(".submenu").click(function(){
    $(this).children("ul").slideToggle();
});


$("ul").click(function(st){
    st.stopPropagation();
});
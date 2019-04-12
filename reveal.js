// using event delegation but it does not offer any advantage in this case 

jQuery('#wrapper-snippet').on('click', '.reveal' , function(){
 
  // event chaining
  $(this).hide().prev().addClass('reveal-text-toggled').parent().removeClass('snippet-box');
  
  
});


jQuery('#wrapper-snippet').on('click', '.hide' , function(){
  
  // more chaining
  $(this).prev().show().prev().removeClass('reveal-text-toggled').parent().addClass('snippet-box');
});
  
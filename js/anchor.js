function rolar_para(elemento) {
  $('html, body').animate({
    scrollTop: $(elemento).offset().top
  }, 1000);
}



//var $doc = $('html, body');
//$('a').click(function() {
//    $doc.animate({
//        scrollTop: $( $.attr(this, 'href') ).offset().top
//    }, 500);
//    return false;
//});
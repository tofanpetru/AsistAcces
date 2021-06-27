(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.tap-target').tapTarget();
    $('#quick-menu').modal();
    $('.collapsible').collapsible();
    $('.dropdown-trigger').dropdown();
    $('select').formSelect();
    
  }); // end of document ready
  $(function () {
  var includes = $('[data-include]')
  $.each(includes, function () {
    var file = 'includes/' + $(this).data('include') + '.html'
    $(this).load(file)
  })
})
})(jQuery); // end of jQuery name space

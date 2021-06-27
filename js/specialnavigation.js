
	$( document ).ready(function() {
        $(".collapsible").collapsible(); 
       });
       function expandAll() { 
           $(".collapsible-header").addClass("active"); 
           $("#expand").fadeOut(); $("#collapse").fadeIn();
            var instance = M.Collapsible.getInstance($('.collapsible'));
            instance.open()
       } 
       
       function collapseAll() { 
           $(".collapsible-header").removeClass(function() { 
               return "active"; 
               }); 
               $("#expand").fadeIn(); 
               $("#collapse").fadeOut(); 
               var instance = M.Collapsible.getInstance($('.collapsible')); 
               instance.close()}
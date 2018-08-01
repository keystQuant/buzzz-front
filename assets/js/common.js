( function($) {
    $(document).on('keyup', '#totalSearch', function(){
        var totalval = $(this).val(); 
        
        if ( totalval == '' ){
            $('#totalSearch_content').removeClass('active');
        } else {
            $('#totalSearch_content').addClass('active');
        }
        
        
    });
})(jQuery);
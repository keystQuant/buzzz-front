( function($) {
    
    $(document).click(function (e) {
        
        if( $('.edit_portfolio').hasClass('active') ) {
            if (e.target.className == "edit_portfolio" || $(event.target).parents('.edit_portfolio').length > 0 || e.target.className == "edit_btn" ) {
                return false
            } else {
                $('.edit_btn').attr('data-click', '0');
                $('.edit_portfolio.active').removeClass('active');
            }
        } else if( $('.event_portfolio').hasClass('active') ){
            if( $(e.target).is("#event_submit") || e.target.className == "event_portfolio" || $(e.target).parents('.event_portfolio').length > 0 ){
                return false
            } else {
                $('.event_portfolio').removeClass('active');
            }          
        }
    });
    
    $(document).on('click', '.btn_wrap>.edit_btn', function (){
        var btn_container =  $(this).parent('.btn_wrap');

        if( $(this).attr('data-click') == '1' ){
            $('.edit_btn').attr('data-click', '0');
            $('.edit_portfolio').removeClass('active');
            $(this).attr('data-click', '0');
            btn_container.find('.edit_portfolio').removeClass('active');
        } else {
            $('.cart_button').attr('data-click', '0');
            $('.edit_portfolio').removeClass('active');
            $(this).attr('data-click', '1');
            btn_container.find('.edit_portfolio').addClass('active');
        }
    });
    
    $(document).on('click', '.edit_portfolio>.edit_cart_btn', function (){
        var submit_cotainer = $(this).parents('.edit_portfolio');
        var port_cotainer = $(this).parents('.btn_wrap');
        submit_cotainer.removeClass('active');
        port_cotainer.find('.edit_btn').attr('data-click', '0');
    });
    
    
    $(document).on('click', '.info_content_wrap>#event_submit', function (){
        var btn_container2 =  $(this).parent('.info_content_wrap');
        btn_container2.find('.event_portfolio').toggleClass('active');
    });
    
    
    $(document).on('click', '.event_portfolio>.event_cart_btn', function (){
        var submit_cotainer2 = $(this).parents('.event_portfolio');
        submit_cotainer2.removeClass('active');
    });
    
    
    
    
    
})(jQuery);
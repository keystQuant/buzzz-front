/*
20171204 수정
*/

( function($) {
    $(document).ready(function(){
        var transCon = $('#rms_section3>.content_row_wrap');
        var transConH = transCon.outerHeight();
        var listH = $('.search_list_wrap.active').outerHeight();
        
        transCon.css('transform', 'translate(0, -'+(transConH-listH)/2+'px)');
    });
                      
    $(document).on('click', '#select_submit_btn', function (){
        $('#save_submit_pop').toggleClass('active');
    });
    
    $(window).resize(function(){
        var transCon = $('#rms_section3>.content_row_wrap');
        var transConH = transCon.outerHeight();
        var listH = $('.search_list_wrap.active').outerHeight();

        transCon.css('transform', 'translate(0, -'+(transConH-listH)/2+'px)');
    });
    
    $(document).on('click', '#rms_save_list', function (){
        $('#rms_search_list').toggleClass('active');
    });
    
    $(document).on('click', '#search_list_submit', function (){
        $('#rms_search_list').removeClass('active');
    });
    
    $(document).on('click', '#search_display .display_list>a', function (){
        var list_val = $(this).text();
        
        $('#search_code').val(list_val);
        $("#search_display").removeClass('active');
    });
    
    $(document).on('keyup', '#search_code', function (){
        var codeval = $(this).val();
        
        if ( codeval == '' ){
            $("#search_display").removeClass('active');
        } else {
            $("#search_display").addClass('active');  
        }
    });
    
    $(document).on('click', '#rms_search_list .sub_popup_close', function (){
        $('#rms_search_list').removeClass('active');
    });
    
    $(document).on('click', '#save_submit_pop .sub_popup_close', function (){
        $('#save_submit_pop').removeClass('active');
    });
    
            
    $(document).mouseup(function(e){
        var container1 = $('#save_submit_pop');
        var container2 = $('#rms_search_list');
        
        if( container1.has(e.target).length === 0) {
            container1.removeClass('active');
        }
        
        if( container2.has(e.target).length === 0) {
            container2.removeClass('active');
        }
        
    });
})(jQuery);
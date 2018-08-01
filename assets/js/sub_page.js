( function($) {
    $(window).load(function(){
        table_height();
        chart_resize();
    });
    $(window).resize(function(){
        table_height();
        chart_resize();
    });
    $(document).on('click', '.identity_icon_btn.message_on', function (){
        $(this).addClass('message_click');
    });
    $(document).on('click', '.identity_icon_btn.message_on.message_click', function (){
        $(this).removeClass('message_on');
        $(this).removeClass('message_click');
        $(this).addClass('message_off');
    });
    
    $(document).on('click', '.identity_icon_btn.message_off', function (){
        $(this).removeClass('message_on');
        $(this).addClass('message_click');
    });
    $(document).on('click', '.identity_icon_btn.message_off.message_click', function (){
        $(this).removeClass('message_on');
        $(this).removeClass('message_click');
        $(this).addClass('message_off');
    });
    
    // 로딩 보여주는 예제
    // 페이징 네비게이션 클릭시 뜨게 해주세요
    $(document).on('click', '.table_paging_nav>a, .table_paging_nav>li', function(){             
        $(this).parents('.buzz_table_container').find('.buzz_table_wrap>.table_loader').addClass('active');
    });
    
    
    // 차트 글자 넓이에 따라 넓이 다르게 설정
    function chart_resize(){
        $('.chart_info_line2>.chart_col').each(function(){
            var chart_W = parseInt($(this).parent().width())/3;
            var title_W = $(this).find('.info_title').outerWidth(true);
            var icon_W = $(this).find('.up_down_icon').outerWidth(true);
            var num_W = $(this).find('.info_num').outerWidth(true);
            
            var total_W = title_W+icon_W+num_W;
            
            if( chart_W < total_W ){
                $(this).addClass('col-auto');
                $(this).parents('.chart_info_line2').addClass('line-left')
            } else {
                $(this).removeClass('col-auto');
            }
        });
        
        $('.chart_info_line2').each(function(){
            if( $( '.col-auto', this ).length <= 0 ) {
                $(this).removeClass('line-left');
            }
        });
        
    }
    
    
    function table_height(){
        
        $('.buzz_table_wrap').each(function(){
            var tableH = $(this).find('table').height();
        
            $(this).css({
               'min-height' : tableH+'px'
            });
        });
        
        
    }
    
})(jQuery);
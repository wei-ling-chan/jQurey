$(document).ready(function () {
    /*下拉選單js */
    $('.nav>li>a').click(function (e) { 
        
        e.preventDefault();
        //點擊 slideToggle
        $(this).parent().find('ul').slideToggle();
        //除點擊的，其他slideup
        $(this).parent().siblings().find('ul').slideUp();
        //點擊，增加active
        $(this).toggleClass('active');
        //除點擊的，移除active
        $(this).parent().siblings().find('a').removeClass('active');
    });

    /*swiper js*/
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal', //滾動方向上下改成左右
        loop: true,
        speed:3000, //滾動速度
        autoplay:{  //自動輪播，delay速度5秒
        delay:5000,
        },
        effect:'cube',  //效果
        
    
        // If we need pagination
        pagination: {
        el: '.swiper-pagination',
        },
    
        // Navigation arrows
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        }, 
    });

    /*top效果*/
    $('.btn').click(function (e) { 
        e.preventDefault()
        $('html,body').animate({scrollTop:0},2000);
     });
  
     
  
    

});
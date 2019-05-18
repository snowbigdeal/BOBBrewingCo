$(function(){
        // var sw = screen.availWidth;
        var sw = window.innerWidth;
        var el = $('.orderPopMSS');

        // console.log((sw-750)/2);
        if (sw < 750){
            $(".orderPopMSS").css("margin-left", "10%");
            $(".orderPopMSS").css("margin-right","10%");
        }
        else{
            $(".orderPopMSS").css("margin-left", (sw-750)/2);
            $(".orderPopMSS").css("margin-right",(sw-750)/2);
        }

    $(".beerDeliverySelection1MSS .buttonHoverOverlayMSS").mouseenter(function(){
            $(".beerDeliverySelection1MSS .orderLinkMSS").css("display", "block");
            $(".beerDeliverySelection1MSS .orderHoverOverlayMSS").css("display", "none");
            var el = $('.beerDeliverySelection1MSS');
            el.toggleClass('boxSelectionShadowMSS');
    });
    $(".beerDeliverySelection2MSS .buttonHoverOverlayMSS").mouseenter(function(){
            $(".beerDeliverySelection2MSS .orderLinkMSS").css("display", "block");
            $(".beerDeliverySelection2MSS .orderHoverOverlayMSS").css("display", "none");
            var el = $('.beerDeliverySelection2MSS');
            el.toggleClass('boxSelectionShadowMSS');
    });
    $(".beerDeliverySelection3MSS .buttonHoverOverlayMSS").mouseenter(function(){
            $(".beerDeliverySelection3MSS .orderLinkMSS").css("display", "block");
            $(".beerDeliverySelection3MSS .orderHoverOverlayMSS").css("display", "none");
            var el = $('.beerDeliverySelection3MSS');
            el.toggleClass('boxSelectionShadowMSS');
    });
    $(".beerDeliverySelection4MSS .buttonHoverOverlayMSS").mouseenter(function(){
            $(".beerDeliverySelection4MSS .orderLinkMSS").css("display", "block");
            $(".beerDeliverySelection4MSS .orderHoverOverlayMSS").css("display", "none");
            var el = $('.beerDeliverySelection4MSS');
            el.toggleClass('boxSelectionShadowMSS');
    });
    $(".beerDeliverySelection5MSS .buttonHoverOverlayMSS").mouseenter(function(){
            $(".beerDeliverySelection5MSS .orderLinkMSS").css("display", "block");
            $(".beerDeliverySelection5MSS .orderHoverOverlayMSS").css("display", "none");
            var el = $('.beerDeliverySelection5MSS');
            el.toggleClass('boxSelectionShadowMSS');
    });
    $(".beerDeliverySelection6MSS .buttonHoverOverlayMSS").mouseenter(function(){
            $(".beerDeliverySelection6MSS .orderLinkMSS").css("display", "block");
            $(".beerDeliverySelection6MSS .orderHoverOverlayMSS").css("display", "none");
            var el = $('.beerDeliverySelection6MSS');
            el.toggleClass('boxSelectionShadowMSS');
    });
    $(".beerDeliverySelection1MSS .buttonHoverOverlayMSS").mouseleave(function(){
            var el = $('.beerDeliverySelection1MSS');
            el.toggleClass('boxSelectionShadowMSS');
    });
    $(".beerDeliverySelection2MSS .buttonHoverOverlayMSS").mouseleave(function(){
            var el = $('.beerDeliverySelection2MSS');
            el.toggleClass('boxSelectionShadowMSS');
    });
    $(".beerDeliverySelection3MSS .buttonHoverOverlayMSS").mouseleave(function(){
            var el = $('.beerDeliverySelection3MSS');
            el.toggleClass('boxSelectionShadowMSS');
    });
    $(".beerDeliverySelection4MSS .buttonHoverOverlayMSS").mouseleave(function(){
            var el = $('.beerDeliverySelection4MSS');
            el.toggleClass('boxSelectionShadowMSS');
    });
    $(".beerDeliverySelection5MSS .buttonHoverOverlayMSS").mouseleave(function(){
            var el = $('.beerDeliverySelection5MSS');
            el.toggleClass('boxSelectionShadowMSS');
    });
    $(".beerDeliverySelection6MSS .buttonHoverOverlayMSS").mouseleave(function(){
            var el = $('.beerDeliverySelection6MSS');
            el.toggleClass('boxSelectionShadowMSS');
    });

    $(".buttonHoverOverlayMSS").mouseleave(function(){
        $(".orderHoverOverlayMSS").css("display", "block");
    });

    $('.orderLinkMSS').click(function(){
            // var sh = screen.availHeight;
            var sh = window.innerHeight;
            var el = $('.orderPopMSS');
            var el2 = $('orderPopBackMSS');
            el.toggleClass('visible');
            el2.toggleClass('visible');
            var orderPopMSSHeight = el.height();
            // console.log(orderPopMSSHeight)
            el.css("top", ((sh-orderPopMSSHeight)/2));
    });
    $('#closeButtonMSS').click(function(){
            var el = $('.orderPopMSS');
            var el2 = $('orderPopBackMSS');
            el.toggleClass('visible');
            el2.toggleClass('visible');
    });

});

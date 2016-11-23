import '../style/third.less'

export default function(){
    $('.stage-2').show().addClass('fade-in');
    return new Promise((resolve)=>{
        $('.stage-2 .item-4').click(function(){
            $('.stage-2').removeClass('gray');
            setTimeout(function(){
                $('.stage-2 .item-1,.stage-2 .item-2,.stage-2 .item-3').addClass('shack');
                setTimeout(function(){
                    $('.stage-2 .xiaoguo').show().addClass('fade-in');
                    $('.stage-2 .zi').show().addClass('fall-down');
                    setTimeout(function(){
                        $('.stage-2').addClass('fade-out');
                        resolve();
                    },2000);
                },1000);
            },1000);
        });
    });
}
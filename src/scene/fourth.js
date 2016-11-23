import '../style/fourth.less'

export default function() {
    $('.stage-3').show().addClass('fade-in');
    return new Promise((resolve)=>{
        $('.stage-3 .dog').click(function(){
            $('.stage-3').removeClass('gray');
            setTimeout(function(){
                $('.stage-3 .dog');
                $('.stage-3 .deng').show().addClass('shan');
                $('.stage-3 .wenzi').append('<div class="zi"></div>');
                setTimeout(()=>{
                    $('.stage-3 .wenzi').append('<div class="zi_0"></div>');
                },500);
                setTimeout(()=>{
                    $('.stage-3 .wenzi').append('<div class="zi_1"></div>');
                },1500);
                setTimeout(()=>{
                    $('.stage-3 .wenzi').append('<div class="zi_2"></div>');
                },2000);
                setTimeout(()=>{
                    $('.stage-3 .wenzi').append('<div class="zi_3"></div>');
                },2500);
                setTimeout(()=>{
                    $('.stage-3 .wenzi').append('<div class="zi_4"></div>');
                },3000);
                setTimeout(()=>{
                    $('.stage-3 .wenzi').append('<div class="zi_5"></div>');
                },3500);
                setTimeout(()=>{
                    $('.stage-3 .wenzi').append('<div class="zi_6"></div>');
                },4000);
                setTimeout(()=>{
                    $('.stage-3 .wenzi').append('<div class="zi_7"></div>');
                },4500);
                setTimeout(()=>{
                    $('.stage-3 .wenzi').append('<div class="zi_8"></div>');
                },5000);
                setTimeout(function(){
                    //$('.stage-3').addClass('fade-out');
                    //resolve();
                },2000);
            },500);
        });
    });
}
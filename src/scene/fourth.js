import '../style/fourth.less'

export default function() {
    $('.stage-3').show().addClass('fade-in');
    return new Promise((reslove)=>{
        $('.stage-3 .dog').click(function(){
            $('.stage-3').removeClass('gray');
            setTimeout(function(){
                $('.stage-3 .dog').addClass('action');
                $('.stage-3 .deng').show().addClass('fade-in');
            },500);
        });
    });
}
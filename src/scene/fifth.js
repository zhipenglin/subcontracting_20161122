import '../style/fifth.less'

export default function() {
    $('.stage-4').show().addClass('fade-in');
    return new Promise((reslove)=>{
        $('.stage-4').click(function(){
            $('.stage-4').removeClass('gray');
            $('.stage-4 .chuang').addClass('action');
            $('.stage-4 .wenzi').show().addClass('fade-in');
            setTimeout(()=>{
                $('.stage-4').addClass('fade-out');
                reslove();
            },2000);

        });
    });
}
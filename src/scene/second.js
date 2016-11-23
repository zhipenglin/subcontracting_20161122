/**
 * Created by ifchangetoclzp on 2016/11/22.
 */
import '../style/second.less'
console.log('场景2载入成功');

export default function () {
    $('.stage-1').show().addClass('fade-in');
    document.getElementById('bgsound').play();
    return new Promise((resolve)=>{
        $('.clicker').click(()=>{
            $('.stage-1').removeClass('gray');
            setTimeout(function(){
                $('.stage-1 .title').show().addClass('fade-in');
                $('.stage-1 .hua').addClass('action');
                $('.stage-1 .diwen').show().addClass('fade-in');
                setTimeout(()=>{
                    $('.stage-1 .diwen').show().addClass('fade-out');
                },1000);
                setTimeout(function(){
                    $('.stage-1').addClass('fade-out');
                    resolve();
                },4000);
            },1000);

        });
    });
}
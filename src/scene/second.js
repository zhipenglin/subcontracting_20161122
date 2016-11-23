/**
 * Created by ifchangetoclzp on 2016/11/22.
 */
import '../style/second.less'
console.log('场景2载入成功');

export default function () {
    $('.stage-1').show().addClass('fade-in');
    return new Promise((resolve)=>{
        $('.clicker').click(()=>{
            $('.stage-1').removeClass('gray');
            setTimeout(function(){
                $('.stage-1 .title').show().addClass('scale-out');
                setTimeout(function(){
                    $('.stage-1').addClass('fade-out');
                    resolve();
                },2000);
            },1000);

        });
    });
}
/**
 * Created by ifchangetoclzp on 2016/11/23.
 */
import '../style/end.less'

export default function(){
    $('.stage-5').show().addClass('fade-in');
    setTimeout(()=>{
        $('.stage-5 .zi').fadeIn(2000);
    },1000);
    return new Promise((reslove)=>{
        reslove();
    });
}
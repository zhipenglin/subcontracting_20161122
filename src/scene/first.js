/**
 * Created by ifchangetoclzp on 2016/11/22.
 */
import '../style/first.less'

console.log('场景1载入成功');

export default function(){
    return new Promise((resolve)=>{
        $('.stage-0 .clicker-0').click(()=>{
            $('.stage-0 .clicker-1,.stage-0 .msg-1').show().addClass('fade-in');
            $('.stage-0 .clicker-0,.stage-0 .msg-0').addClass('fade-out');
        });
        $('.stage-0 .clicker-1').click(()=>{
            $('.stage-0').addClass('fade-out');
            resolve();
        });
    });
}
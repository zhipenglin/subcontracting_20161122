/**
 * Created by ifchangetoclzp on 2016/11/22.
 */
import '../style/first.scss'

console.log('场景1载入成功');

export default function(stage){
    stage.className='scene-0';
    stage.innerHTML='<div class="msg-0"></div>';
    var clicker=document.createElement('div');
    clicker.className='clicker-0';
    stage.appendChild(clicker);
    return new Promise((resolve)=>{

    });
}
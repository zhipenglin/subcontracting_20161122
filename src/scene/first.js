/**
 * Created by ifchangetoclzp on 2016/11/22.
 */
import '../style/first.scss'

console.log('场景1载入成功');

export default function(stage){
    stage.className='scene-0';
    stage.innerHTML='<div class="msg-0"></div>';
    var clicker0=document.createElement('div');
    clicker0.className='clicker-0';
    stage.appendChild(clicker0);
    return new Promise((resolve)=>{
        clicker0.addEventListener('click',function(){
            resolve();
        });
    });
}
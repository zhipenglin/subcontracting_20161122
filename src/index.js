/**
 * Created by ifchangetoclzp on 2016/11/22.
 */
import './style/main.scss'

function loadScene(index){
    console.log('正在载入场景...');
    switch (index){
        case 0:
            return new Promise((resolve)=>{
                require.ensure([], function (require) {
                    resolve(require('./scene/first').default)
                });
            });
            break;
        case 1:
            return new Promise((resolve)=>{
                require.ensure([], function (require) {
                    resolve(require('./scene/second').default)
                });
            });
            break;
    }
}

const stage=document.getElementById('stage');

async function start(){
    var scene0=await loadScene(0);
    await scene0(stage);
}

start();
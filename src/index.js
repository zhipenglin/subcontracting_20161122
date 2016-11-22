/**
 * Created by ifchangetoclzp on 2016/11/22.
 */
import './style/main.less'
import $ from 'jquery'

window.$=$;

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
        case 2:
            return new Promise((resolve)=>{
                require.ensure([], function (require) {
                    resolve(require('./scene/third').default)
                });
            });
            break;
        case 3:
            return new Promise((resolve)=>{
                require.ensure([], function (require) {
                    resolve(require('./scene/fourth').default)
                });
            });
            break;
    }
}

async function start(){
    var scene0=await loadScene(0);
    await scene0();
    var scene1=await loadScene(1);
    await scene1();
    var scene2=await loadScene(2);
    await scene2();
    var scene3=await loadScene(3);
    await scene3();
}

start();
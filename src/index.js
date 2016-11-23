/**
 * Created by ifchangetoclzp on 2016/11/22.
 */
import './style/main.less'
import $ from 'jquery'
import scene0 from './scene/first'
import scene1 from './scene/second'
import scene2 from './scene/third'
import scene3 from './scene/fourth'
import scene4 from './scene/fifth'
import scene5 from './scene/end'

window.$=$;

/*function loadScene(index){
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
}*/

async function start(){
    await scene0();
    await scene1();
    await scene2();
    await scene3();
    await scene4();
    await scene5();
}

start();
/**
 * Created by Administrator on 2019/10/1.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import Lockr from 'lockr'
import {WhiteList,SessionStorageWay} from './config'
import {subscribePlugin} from './subscribePlugin'
import common from './common/index'

Vue.use(Vuex);

const plugin = subscribePlugin()
let store = new Vuex.Store({
    modules: {
        common,
    },
    plugins: [plugin]
});
for (let m in store.state) {
    for (let key in store.state[m]) {
        let data;
        if (WhiteList.indexOf(key) != -1) {
            continue;
        }
        else if (SessionStorageWay.indexOf(key) != -1) {
            try {
                data = JSON.parse(window.sessionStorage.getItem(key)).data;
            } catch (e) {
                //console.log(key + ' is null!')
            }
        }
        else {
            data = Lockr.get(key)
        }
        if (data) {
            store.state[m][key] = data
        }
    }
}
export default store

import Lockr from 'lockr'
import {WhiteList,SessionStorageWay} from './config'

const localEvent = function (item) {
    this.get = function () {
        return localStorage.getItem(item) ? JSON.parse(localStorage.getItem(item)) : '';
    },
    this.set = function (key,value) {
        if (WhiteList.indexOf(key) == -1 && SessionStorageWay.indexOf(key) != -1) {
            window.sessionStorage.setItem(key, JSON.stringify({data: value}));
        }
        else if (WhiteList.indexOf(key) == -1) {
            Lockr.set(key, value)
        }
    },
    this.clear = function (key) {
        if (WhiteList.indexOf(key) == -1 && SessionStorageWay.indexOf(key) != -1) {
            window.sessionStorage.removeItem(key);
        }
        else if (WhiteList.indexOf(key) == -1) {
            Lockr.remove(key)
        }
    }
}

export const func = new localEvent('func');

/**
 * Created by Administrator on 2019/10/1.
 */

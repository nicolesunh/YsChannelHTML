/**
 * Created by Administrator on 2019/10/1.
 */
export const subscribePlugin = function () {
    return store => {
        store.subscribe((mutation, state) => {
            //console.log('mutation', mutation, 'state', state)
        })
    }
}

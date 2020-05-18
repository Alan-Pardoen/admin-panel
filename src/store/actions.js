import { router } from '../router'
export default {

    Connect({ commit },tuple)
    {
        if( tuple[0] == 'admin' && tuple[1] =='admin'){
            commit('SetConnect',true)
            router.push('/blacklist')
        }

    }
}

export default{
    namespaced: true,
    state:{
        transitionName:{}
    },

    mutations:{
        setTransitionName(state,payload){
            state.transitionName=payload
        }
    },
    actions:{
        setTransitionName({commit},payload){
            commit('setTransitionName',payload);
        }
    }

}
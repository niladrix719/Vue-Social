import {createStore} from 'vuex'

export default createStore({
  state:{
    users: []
  },
  mutations:{
    setUsers(state,payload){
      state.users = payload
    }
  },
  actions:{
    getUsers(context){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        context.commit('setUsers',users)
      })
    }
  }
})
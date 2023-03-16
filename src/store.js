import {createStore} from 'vuex'

export default createStore({
  state:{
    users: []
  },
  mutations:{

    // setting users with data

    setUsers(state,payload){
      state.users = payload;
    }
  },
  actions:{

    // fetching user details

    getUsers(context){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        let reversedUsers = users.slice().reverse();
        let doubledUsers = users.concat(reversedUsers);
        context.commit('setUsers',doubledUsers)
      })
    }

  }
})
import {createStore} from 'vuex'

export default createStore({
  state:{
    pageSize : 10,
    currentPage : 1,
    users: []
  },

  mutations:{

    // setting users with data
    setUsers(state,payload){
      state.users = payload;
    },
    
    // increasing page no.
    increasePageNum(state){
      state.currentPage++;
    },

    // decreasing page no.
    decreasePageNum(state){
      state.currentPage--;
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
  },

  getters: {
    displayUsers(state){
      let startIndex = (state.currentPage - 1) * state.pageSize;
      let endIndex = startIndex + state.pageSize;
      return state.users.slice(startIndex,endIndex);
    },
    noOfPages(state){
      return Math.ceil(state.users.length / state.pageSize);
    }
  }
})
import {createStore} from 'vuex'

export default createStore({
  state:{
    pageSize : 10,
    currentPage : 1,
    users: [],
    posts: [],
    sort: false,
    visible: false,
    title: '',
    body: '',
    displayPosts: []
  },

  mutations:{

    // setting users with data
    setUsers(state,payload){
      state.users = payload;
    },

    // setting posts with data
    setPosts(state,payload){
      state.posts = payload.posts;
      state.displayPosts = state.posts.filter(post => post.userId == payload.id)
    },
    
    // increasing page no.
    increasePageNum(state){
      state.currentPage++;
      state.sort = false;
    },

    // decreasing page no.
    decreasePageNum(state){
      state.currentPage--;
      state.sort = false;
    },

    // toggling sort state
    sortUser(state){
      state.sort = !state.sort;
    },

    // setting values for clicked post
    showModal(state,payload){
      state.visible = true;
      state.title = payload.title;
      state.body = payload.body;
    },

    // Modal visibility is disabled
    NoVisible(state){
      state.visible = false;
    },
    
    // setting current page no. to 1
    setPageNum(state){
      state.currentPage = 1;
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
    },

    //fetching post details

    getPosts(context,payload){
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => {
        context.commit('setPosts',{posts: posts , id : payload.id});
      })
    }
  },

  getters: {

    // displaying 10 users per page

    displayUsers(state){
      let startIndex = (state.currentPage - 1) * state.pageSize;
      let endIndex = startIndex + state.pageSize;
      if(state.sort){
        return state.users.slice(startIndex,endIndex).sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      }
      else{
        return state.users.slice(startIndex,endIndex)
      }
    },

    // calculating no of pages

    noOfPages(state){
      return Math.ceil(state.users.length / state.pageSize);
    }
  }
})
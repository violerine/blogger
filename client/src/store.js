import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allArticles:[],
    title:'',
    content:'',
    picurl:''
  },
  mutations: {
    getArticles(state, payload){
      state.allArticles = payload
    },
    postNewArticle(state,payload){
      state.title=payload.title
      state.content=payload.content
      state.picurl = payload.pic_url
      // state.files=file
    }
  },
  actions: {
    getAllArticle({commit}){
     axios.get('http://localhost:8000/articles/get')
     .then(({data})=>{
       console.log("articleeeeeels",data)
       commit('getArticles', data)
     })
     .catch(err=>{
       console.log(err)
     })
    }, 
    postArticle({commit},payload){
      axios.post('http://localhost:8000/articles/add',{title:payload.title,content:payload.content,pic_url:payload.pic_url})
      .then(({data})=>{
        console.log("PICURL",payload.pic_url)
        console.log(data)
        console.log('MASUK SNI')
        commit('postNewArticle',payload)
      })
      .catch(err=>{
        console.log(err)
      })
    }
  }
})

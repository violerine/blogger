<template>
<div class = "articlecontent">
<div class = "ui container">
<div class="ui segment ">
<router-link to="/newpost"><button class="ui button">New Post</button></router-link>
<div class="ui card" style="width:700px;" v-for="article in allArticles">
  <div class="image">
    <img v-bind:src=article.pic_url >
  </div>
  <div class="content">
    <a class="header">{{article.title}}</a>
    <div class="meta">
      <span class="date">{{article.createdAt}}</span>
    </div>
    <div class="description">
      {{article.content}}
    </div>
  </div>
  <div class="extra content">
    <a>
      <i class="user icon"></i>
      22 Friends
    </a>
  </div>
</div>
</div>
</div>
</div>
</template>

<script>

import { mapState, mapActions } from 'vuex'

export default {
      created:function(){
        console.log("ni this get",this.getAllArticle())
        this.getAllArticle()
      },
      computed: {
    ...mapState([
        'allArticles'
    ])
  },
  methods:{
    ...mapActions([
      'getAllArticle'
      
    ])
  }
}

</script>

<style scoped>


</style>


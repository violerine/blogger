<template>
<div class="newpost">
<form class="container">
  <div class="form-group">
    <label for="exampleFormControlInput1">Title</label>
    <input v-model="title" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Title of your post">
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Content</label>
    <textarea v-model="content" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <div class="custom-file">
    <input ref="myFiles" @change="previewFiles" type="file" class="custom-file-input" id="validatedCustomFile" required>
    <label class="custom-file-label" for="validatedCustomFile">Choose file...</label>
    <div class="invalid-feedback">Example invalid custom file feedback</div>
    <button @click ="uploadPic" class="ui button" type="button">Upload dulu</button>
  </div><br><br>
  <button @click="inputContent" type="button" class="ui button">Submit Article</button>
</form>

</div>

</template>

<script>
import {  mapActions } from 'vuex';
import swal from 'sweetalert';

export default {
  data() {
    return {
      formdata : new FormData(),
      title: '',
      content:'',
      picurl:[]
    }
  },
  methods: {
    previewFiles(file){
      console.log("masuk sini ga sih")
      var filedata = file.target.files[0]
      this.formdata.append('image',filedata)
    },
    uploadPic(){
       const config = {
                headers: { 'content-type': 'multipart/form-data' }
            }
      axios.post("http://localhost:8000/articles/upload",this.formdata,config)
      .then(({data})=>{
        console.log("dataaaaaa",data)
        this.picurl=data.link
      })

    },
    inputContent() {
    swal("New Article Created")
    let newobj={
      title:this.title,
      content:this.content,
      pic_url:this.picurl
    }
    console.log(this.picurl)
    this.postArticle(newobj)
    this.$router.push("/")
    },
    
    ...mapActions([
        'postArticle'
    ])
  }
}
</script>

<style scoped>

.newpost{
    margin-top: 50px;
}

</style>

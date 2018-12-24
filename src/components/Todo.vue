<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <br>
    <div class="input-group mb-3 input-app">
      <input type="text" class="form-control" @keyup.enter="addTodo" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter your To-do" id="todo">
      <!-- <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"> -->
      <div class="input-group-append">
        <button class="btn btn-success" type="button" id="button-addon2" @click="addTodo">Add</button>
      </div>
    </div>

    <div class="input-group mb-3 input-app" v-for="post in posts" v-bind:key="post.id" v-bind:title="post.title">
      <div class="form-control">{{post.title}}</div>
      <div class="input-group-append">
        <button class="btn btn-danger" type="button" :id="post.id" @click="deleteTodo">X</button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Todo',
  props: {
    msg: String
  },
  data() {
    return {
      posts: [{id:1, title: "Learn Vue"}, {id:2, title:"Have a good time"}, {id:3,title:"Conquer the World"}],
    valor: "samuel"
    }
  },
  methods: {
    addTodo(){
      const todo = document.querySelector("#todo");
      const id = this.posts.length + 1;
      if(todo.value){
        this.posts.push({id, title: todo.value});
        todo.value = '';
      }else{
        alert("Can't add empty todo!")
      }
    },
    deleteTodo(e){
      let newPosts = this.posts.filter(x => x.id != e.target.id)
      this.posts = newPosts
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.input-app {
  max-width: 70vh;
  margin: auto;
}

.form-control:focus {
  border-color: #00ca85;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(0, 202, 133, 0.6);
}
</style>

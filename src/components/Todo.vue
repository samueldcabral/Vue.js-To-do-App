<template>
  <div class="todo">
    <h1>{{ msg }}</h1>
    <br>
    <div class="input-group mb-3 input-app">
      <input type="text" class="form-control" @keyup.enter="addTodo" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Enter your To-do" id="todo">
      <!-- <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"> -->
      <div class="input-group-append">
        <button class="btn btn-success" type="button" id="button-addon2" @click="addTodo">Add</button>
      </div>
    </div>
    <!-- Favs -->
  <transition-group name="list" tag="p">
    <span v-for="star in starred" v-bind:key="star.id" class="list-item input-group mb-3 input-app">
      <div class="form-control" @click="completedTodo" :id="star.id" :class="{completed: star.completed}" v-if="!star.edit" @dblclick="editTodo">{{star.title}} </div>
      <input type="text" class="form-control text-center" :id="star.id" :value="star.title" @blur="noEditTodo" v-else>
      <div class="input-group-append">
        <button class="btn btn-success" type="button" :id="star.id" @click="starTodo"><i class="fa fa-star" aria-hidden="true"></i></button>
        <button class="btn btn-danger" type="button" :id="star.id" @click="deleteTodo"><i class="fa fa-times" aria-hidden="true"></i></button>
      </div>
    </span>
  </transition-group>

  <!-- Normal -->
  <transition-group name="list" tag="p">
    <span v-for="post in posts" v-bind:key="post.id" class="list-item input-group mb-3 input-app">
      <div class="form-control" @click="completedTodo" :id="post.id" :class="{completed: post.completed}" v-if="!post.edit" @dblclick="editTodo">{{post.title}} </div>
      <input type="text" class="form-control text-center" :id="post.id" :value="post.title" @blur="noEditTodo" v-else>
      <div class="input-group-append">
        <button class="btn btn-danger" type="button" :id="post.id" @click="deleteTodo"><i class="fa fa-times" :id="post.id" aria-hidden="true"></i></button>
      </div>
    </span>
  </transition-group>
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
      posts: [{id:1, title: "Learn Vue", completed: false, edit: false}, {id:2, title:"Have a good time", completed: false, edit: false}, {id:3,title:"Conquer the World", completed: false, edit: false}],
      valor: "samuel",
    }
  },
  methods: {
    addTodo(){
      const todo = document.querySelector("#todo");
      const id = this.posts.length + 1;
      if(todo.value){
        this.posts.push({id, title: todo.value, completed: false});
        todo.value = '';
      }else{
        alert("Can't add empty todo!")
      }
    },
    deleteTodo(e){
      let newPosts = this.posts.filter(x => x.id != e.target.id)
      this.posts = newPosts
    },
    completedTodo(e){
      let completedTodo = this.posts.filter(x => x.id == e.target.id)
      completedTodo[0].completed = !completedTodo[0].completed
    },
    editTodo(e){
      let editTodo = this.posts.filter(x => x.id == e.target.id)
      editTodo[0].edit = true
    },
    noEditTodo(e){
      let editTodo = this.posts.filter(x => x.id == e.target.id)
      if(editTodo[0].title != e.target.value && e.target.value != ''){
        editTodo[0].title = e.target.value
      }
      editTodo[0].edit = false
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

.list-enter-active, .list-leave-active {
  transition: all 0.3s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(-30px);
}

.completed {
  text-decoration: line-through;
  background-color: #f8f8f8;
}

.todo {
  border-radius: 10px;
}

</style>

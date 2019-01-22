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
  <transition-group name="list" tag="p">
    <span v-for="post in posts" v-bind:key="post.id" class="list-item input-group mb-3 input-app">
      <div class="form-control" @click="completedTodo" :id="post.id" :class="{completed: post.completed}" v-if="!post.edit" @dblclick="editTodo">{{post.title}} </div>
      <input type="text" class="form-control text-center" :id="post.id" :value="post.title" @blur="noEditTodo" v-else>
      <div class="input-group-append">
        <button class="btn starButton" type="button" :id="post.id" @click="starTodo" :class="{'starred': post.starred}"><i class="fa fa-star" :id="post.id" aria-hidden="true"></i></button>
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
      posts: [{id:1, title: "Learn Vue", completed: false, edit: false, starred: false}, {id:2, title:"Have a good time", completed: false, edit: false, starred: false}, {id:3,title:"Conquer the World", completed: false, edit: false, starred: false}],
      valor: "samuel",
    }
  },
  methods: {
    starTodo(e){
      let posts = this.posts.map(x => {
        if(x.id == e.target.id){
          x.starred = !x.starred
        }
        return x
      })
      this.posts = posts
    },
    addTodo(){
      const todo = document.querySelector("#todo");
      let id = Math.random() * 100
      let result = this.posts.some(x => x.id == id)

      while(result){
        id = Math.random() * 100
        result = this.posts.some(x => x.id == id)
      }

      if(todo.value){
        this.posts.push({id, title: todo.value, completed: false, edit: false, starred: false});
        todo.value = '';
      }else{
        alert("Can't add empty todo!")
      }
    },
    deleteTodo(e){
      let thisTodo = this.posts.filter(x => x.id == e.target.id)
      if(!thisTodo[0].starred){
        let newPosts = this.posts.filter(x => x.id != e.target.id)
        this.posts = newPosts
      }
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
  transition: all 0.227s;
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

.starButton {
  color: #ccc;
  background: #fff;
  border-top: 1px #ccc solid;
  border-bottom: 1px #ccc solid;
}
.starred{
  color: #00ca85;
}

</style>

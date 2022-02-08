<template>
<div>
  <h1>{{title}}</h1>
   <v-card class="mx-auto" max-width="500" elevation="21">
        <InputToDo />
        <br><br>
        <ToDoList/>
   </v-card>
</div>
  
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import InputToDo from "./components/InputToDo.vue"
import ToDoList from './components/ToDoList.vue';
@Options({
  components: {
    InputToDo,
    ToDoList
  },
})
export default class App extends Vue {
  public title="Todo Application"
}
</script>
 
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.mx-auto{
  margin-top: 40px;
}
</style>

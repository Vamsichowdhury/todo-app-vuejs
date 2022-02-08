<template>
    <div>
            <v-list flat>
                <div class='todo' v-for="(item) in $store.state.todos" :key="i">
                    <v-list-item-content v-text="item.name"></v-list-item-content>
                    <v-btn class=""  @click="editToDo(item.name,item.id)" rounded="pill" color="primary"> Edit </v-btn>
                    <v-btn class="removeBtn" @click="deleteToDo(item.id)" rounded="pill" color="error"> Remove </v-btn>
                </div>
            </v-list>
    </div>
</template>

<script lang="ts">
import {Vue} from "vue-class-component"
import store from "../store"
import axios from "axios"

export default class ToDoList extends Vue{
    
        async deleteToDo(id:number):void{
            const confirmation=confirm("Are you sure? you want to delete?")
            if(confirmation){
                const res=await axios.delete(`http://localhost:3000/todos/${id}`)
                store.dispatch("deleteToDo",id)
            } 
        }
        async editToDo(name:string,id:number):void{
            
            const editedTodo=prompt(`current todo:${name}`)
            if(editedTodo){
                // store.state.todos[index]=editedTodo;
                console.log(name,id)
                const res=await axios.put(`http://localhost:3000/todos/${id}`,{name:editedTodo})
                console.log(res.data)
                store.dispatch("editToDo",res.data)
            }
        }
        async created():Promise<void>{
            const res=await axios.get("http://localhost:3000/todos")
            store.state.todos=res.data
            console.log(res.data)    
    }
 }
</script>

<style scoped>
.todo{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:12px 24px;
    border-bottom:1px solid #ccc;
}

</style>
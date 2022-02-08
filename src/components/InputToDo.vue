<template>
        <v-form ref="form" @submit.prevent="addToDo">
            <v-text-field type="text" v-model="newToDo"></v-text-field>
            <v-btn type='submit' rounded="pill" color="primary">Add Todo</v-btn>
        </v-form>
</template>

<script lang="ts">

import { Vue } from 'vue-class-component';
import store from "../store"
import axios from "axios"

export default class InputToDo extends Vue{
    public newToDo="";
    
    public async addToDo():void{
        console.log("in input todo",this.newToDo)
        const res =await axios.post("http://localhost:3000/todos",{name:this.newToDo})
        console.log("in input todo",res.data)
        store.dispatch("addToDo",res.data)
        this.newToDo=""
  }  

}
</script>

<style scoped>

</style>
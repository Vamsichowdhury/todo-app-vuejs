import { createStore } from 'vuex'


export interface State{
  todos:[
    {
      "id":number,
      "name":string
    }
  ];
}


export default createStore<State>({
  state: {
    todos:[],
  },
  mutations: {
    ADD_TODO(state,todo:string){
      state.todos.push(todo)
    },
    DELETE_TODO(state,id:number){
      state.todos=state.todos.filter(tds=>tds.id!==id)
    },
    EDIT_TODO(state,res):void{
      state.todos.map((tds,index)=>{
        if(tds.id===res.id){
          state.todos[index]=res
        }
      
      }))}
  },
  actions: {
    addToDo({commit},todo:string){
      commit('ADD_TODO',todo)
    },
    deleteToDo({commit},id:number):void{
      commit("DELETE_TODO",id)
    },
    editToDo({commit},res):void{
      commit("EDIT_TODO",res)
    }
  },
})

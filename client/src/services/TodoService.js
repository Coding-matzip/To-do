import axios from "axios";
const apiUrl = "http://localhost:3001/api/todo";

export function getTodos(){
    return axios.get(apiUrl);
}

export function addTodos(todo){
    return axios.post(apiUrl,todo);
}

export function updataeTodos(id,todo){
    console.log("id",id,"todo",todo);
    return axios.put(apiUrl+"/"+id , todo);
}

export function deleteTodos(id){
    return axios.delete(apiUrl+"/"+id);
}

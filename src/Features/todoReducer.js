import { createSlice,nanoid} from "@reduxjs/toolkit";

const initialState = {
    todos:[{
        id: 1,
        text : "Dinner at 8PM"
    }]
}

export const todoList = createSlice({
    name:'todo',
    initialState,
    reducers: {
        addTodo: (state,action) => {
            const todo = {
                id:nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state,action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
})

export const {addTodo,removeTodo} = todoList.actions
export default todoList.reducer
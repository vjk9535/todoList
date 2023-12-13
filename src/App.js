import React from 'react';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { addTodo, removeTodo } from './Features/todoReducer';
import { Card,IconButton,Button, TextField, Snackbar, Alert } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
function App() {
  const [input,setInput] = React.useState('');
  const [open,setOpen] = React.useState(false);
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()
  const added = (e) => {
    if(input === "") {
      setOpen(true);
    }
    else {
      dispatch(addTodo(e));
      setInput('')
    }
   
  }

  const removed = (e) => {
       dispatch(removeTodo(e))
  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  }

  return (
    <div style={{display:'flex', justifyContent:'center',flexDirection:'column',margin:10}}>
      <div style={{display:'flex',justifyContent:'center'}}>
      <p style={{fontWeight:'bold', fontSize:30}}>TODO LIST</p>
      </div>
     
      <div style={{display:'flex',justifyContent:'center'}}>
      <TextField type='text' value={input} onChange={(e) => setInput(e.target.value)} />
      <Button type='submit' onClick={() => added(input)} variant='contained' style={{marginLeft:10}}>ADD</Button>
      </div>
      {todos.map((todo) =>(
        <Card key={todo.id} raised='true' sx={{display:'flex',justifyContent:'space-between',padding:1, margin:2,alignItems:'center'}}>
          <div>
          {todo.text}
          </div>
          <IconButton onClick={()=>removed(todo.id)}>
          <DeleteIcon/>
          </IconButton>
          </Card>
      ))}

      {open ? (
        <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        >
          <Alert severity='error' onClose={handleClose}>Field cannot be Empty</Alert>
          </Snackbar>
      ):(
       null
      )}
    </div>
  );
}

export default App;

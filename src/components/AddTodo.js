import  React, {useState} from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { useTasks } from '../TaskProvider'

export default function AddTodo() {

    const [todo, setTodo] = useState("")
    const [errorMsg, setErrorMsg] = useState("")

    const { addTask } = useTasks()

    const handleChange = (event) => {
        setTodo(event.target.value)
        setErrorMsg("")
    }
    const handleClick = () => {
        if(todo.length <= 0){
            setErrorMsg("content can't be empty")
            return 0
        }
        addTask(todo) 
        setTodo("")
    }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' }, display: "flex",  padding: "10px 0px"
      }}
      noValidate
      autoComplete="off"
    >
      
       <Input id="standard-basic" label="Standard" variant="standard" 
        helperText={errorMsg}
        value={todo}
        style={{color: "white", background: "#282828", width: "70%", padding: "10px"}}
  
      onChange={handleChange} required />
      <Button variant="contained" onClick={handleClick}>Add</Button>
    </Box>
  );
}



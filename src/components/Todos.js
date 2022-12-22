import React from 'react';
import Container from '@mui/material/Container';
import Todo from './TodoItem';
import { useTasks } from '../TaskProvider'

const Todos = () => {
    const { tasks } = useTasks()

    return (
        <Container maxWidth="sm" sx={{ bgcolor: '#282828', height: '50%', 
        borderRadius: "20px", overflow: "scroll",
        boxShadow: "16px 16px 20px rgba(0, 0, 0, 0.15), -8px -8px 20px rgba(255, 255, 255, 0.05)" }}>
            {tasks.map(({id, task, complete}) => (
                <Todo key={id} id={id} task={task} complete={complete}/>
            ))}
        </Container>
    );
}



export default Todos;
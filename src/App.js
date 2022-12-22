import React from "react"
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import Container from '@mui/material/Container';
import AddTodo from "./components/AddTodo";
import Heading from "./components/heading.js";
import Todos from "./components/Todos"
import NewsLetter from "./components/newsLetter";
import { useTasks } from './TaskProvider'



function App() {
  const { toggleNews } = useTasks()
  const client = new QueryClient();
  return (
    <Container maxWidth="sm" sx={{ bgcolor: '#121212', height: '95vh', 
      borderRadius: "20px", width: "30%", padding: "10px 0px"  }}>
        <Heading />
        <AddTodo  />
        <Todos /> 
        <QueryClientProvider client={client}>
          { toggleNews && <NewsLetter />}
        </QueryClientProvider>
    </Container>

  );
}

export default App;

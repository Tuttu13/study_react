import {Box,Button,List,TextField} from "@mui/material";
import {useState} from "react";
import Todo from "./Todo";

type TodoItem = {
  text: string;
};

const TodoList = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [newTodoText, setNewTodoText] = useState("");

  const addTodo = () => {
    if (newTodoText.trim() !== "") {
      setTodos([...todos, { text: newTodoText }]);
      setNewTodoText("");
    }
  };

  const deleteTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const updateTodo = (index: number, newText: string) => {
    const newTodos = [...todos];
    newTodos[index].text = newText;
    setTodos(newTodos);
  };

  return (
    <>
      <Box
        display={"flex"}
        sx={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <Box>
          <TextField
            sx={{ width: 450 }}
            label="新しいTodoを追加"
            value={newTodoText}
            size="small"
            onChange={(e) => setNewTodoText(e.target.value)}
          />
        </Box>
        <Box>
          <Button variant="contained" color="primary" onClick={addTodo}>
            追加
          </Button>
        </Box>
      </Box>
      <List>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            text={todo.text}
            onDelete={() => deleteTodo(index)}
            onUpdate={(newText) => updateTodo(index, newText)}
          />
        ))}
      </List>
    </>
  );
};

export default TodoList;
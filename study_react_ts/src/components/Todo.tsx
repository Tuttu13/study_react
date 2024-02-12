import {Delete,Edit} from "@mui/icons-material";
import {
    IconButton,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    TextField
} from "@mui/material";
import {useState} from "react";

type TodoProps = {
  text: string;
  onDelete: () => void;
  onUpdate: (newText: string) => void;
};

const Todo = ({ text, onDelete, onUpdate }: TodoProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(text);

  const handleUpdate = () => {
    onUpdate(newText);
    setIsEditing(false);
  };

  return (
    <ListItem>
      {isEditing ? (
        <TextField
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onBlur={handleUpdate}
          autoFocus
        />
      ) : (
        <>
          <ListItemText primary={text} />
          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              aria-label="Edit"
              onClick={() => setIsEditing(true)}
              color="primary"
            >
              <Edit />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="Delete"
              onClick={onDelete}
              color="error"
            >
              <Delete />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
};

export default Todo;

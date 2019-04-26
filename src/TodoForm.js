import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import useInputState from "./hooks/useInputState";
import { TodosContext } from "./context/todos.context";
function TodoForm() {
  const [value, handleChange, reset] = useInputState("");
  const { dispatch } = useContext(TodosContext);
  console.log("TODO FORM RENDER!!!");
  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch({ type: "ADD", task: value });
          reset();
        }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          margin='normal'
          label='Add New Todo'
          fullWidth
        />
      </form>
    </Paper>
  );
}
export default TodoForm;

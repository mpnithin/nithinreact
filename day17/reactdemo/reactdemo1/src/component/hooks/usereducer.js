import { useReducer } from "react";

const initialTodos = [
  {
    id: 1,
    title: "Learning React",
    complete: false,
  },
  {
    id: 2,
    title: "Doing Hands on React",
    complete: false,
  },
  {
  id: 3,
    title: "Learning useReducer",
    complete: false,
  },
];

  const reducer = (state, action) => {
    switch (action.type) {
      case "COMPLETE":
        return state.map((todo) => {
          if (todo.id === action.id) {
            return { ...todo, complete: !todo.complete };
          } else {
            return todo;
          }
        });
      default:
        return state;   } 
      };


      function Todos() {
        const [todos, dispatch] = useReducer(reducer, initialTodos);
        const handleComplete = (todo) => {
          dispatch({ type: "COMPLETE", id: todo.id });
        };
        return (
          <>
            {todos.map((todo) => (
              <div key={todo.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={todo.complete}
                    onChange={() => handleComplete(todo)}
                  />
                  {todo.title}
                </label>
              </div>
            ))}   
            </>  
         );
  }
export default Todos;

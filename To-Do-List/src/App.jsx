import { Todo } from "./Components/Todo";
import "./App.css";

function App() {
  return (
    <>
      <div className="maindiv">
        <h1>Weekly to-do list</h1>
        <Todo date="Sunday" />
        <Todo date="Monday" />
        <Todo date="Tuesday" />
        <Todo date="Wednesday" />
        <Todo date="Thursday" />
        <Todo date="Friday" />
        <Todo date="Saturday" />
      </div>
    </>
  );
}

export default App;

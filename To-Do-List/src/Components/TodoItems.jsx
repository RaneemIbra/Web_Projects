import "./CSS/TodoItems.css";
import tick from "./Assets/tick.png";
import cross from "./Assets/cross.png";
import not_tick from "./Assets/not_tick.png";

export const TodoItems = ({ number, display, text, setTodos }) => {
  const deleteTodo = (number) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    data = data.filter((todo) => todo.number !== number);
    setTodos(data);
  };

  const toggle = (number) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    for (let i = 0; i < data.length; i++) {
      if (data[i].number === number) {
        if (data[i].display === "") {
          data[i].display = "line-through";
        } else {
          data[i].display = "";
        }
        break;
      }
    }
    setTodos(data);
  };

  return (
    <div className="todoitems">
      <div
        className={`todoitems-container ${display}`}
        onClick={() => {
          toggle(number);
        }}
      >
        {display === "" ? (
          <img src={not_tick} alt=""></img>
        ) : (
          <img src={tick} alt=""></img>
        )}
        <div className="todoitems-text">{text}</div>
      </div>
      <img
        onClick={() => {
          deleteTodo(number);
        }}
        className="todoitems-cross-icon"
        src={cross}
        alt=""
      ></img>
    </div>
  );
};

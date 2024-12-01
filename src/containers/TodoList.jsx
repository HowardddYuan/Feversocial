import styles from "../styles/modules/TodoList.module.css";
import TodoItem from "../components/TodoItem";
import TodoInput from "../components/TodoInput";
import useTodos from "../hooks/useTodos";
import Spinner from "../components/common/Spinner";
import { useTranslation } from "react-i18next";

export default function TodoList() {
  const { t } = useTranslation();
  const { todos, isLoading, addTodo, deleteTodo, toggleTodo } = useTodos();
  const completedTodos = todos.filter((todo) => todo.completed).length;


  return (
    <div className={styles["todo-list"]}>
      {isLoading && <Spinner />}
      <span>
        進度 ：
         {completedTodos} / {todos.length}
      </span>
      <div className={styles["todo-items"]}>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={deleteTodo}
            onToggle={toggleTodo}
            isLoading={isLoading}
          />
        ))}
      </div>
      <div className={styles["input-container"]}>
        <TodoInput onAdd={addTodo} isLoading={isLoading} />
      </div>
    </div>
  );
}

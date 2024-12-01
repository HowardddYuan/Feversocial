import IconComponent from './common/IconComponent'
import styles from '../styles/modules/TodoItem.module.css'

export default function TodoItem({ todo, onDelete, onToggle, isLoading }) {
  return (
    <div className={`
      ${styles["todo-item"]} 
      ${todo.completed ? `${styles.completed} ${styles["todo-item-success"]}` : ''} 
      ${isLoading ? 'loading' : ''}
    `}>
      <div className={styles["todo-item-left"]}>
        <input 
          type="checkbox" 
          checked={todo.completed} 
          onChange={() => onToggle(todo.id)}
          disabled={isLoading}
          className={styles.checkbox}
        />
        <span className={`${styles["todo-text"]} ${todo.completed ? styles.completed : ''}`}>
          {todo.text}
        </span>
      </div>

      <button 
        className={`${styles["todo-item-right"]} ${isLoading ? 'loading-button' : ''}`}
        onClick={() => onDelete(todo.id)}
        disabled={isLoading}
      >
        <IconComponent name="trash" />
      </button>
    </div>
  );
}
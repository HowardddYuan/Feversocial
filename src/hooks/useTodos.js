import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function useTodos() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const { t } = useTranslation();

  const addTodo = async (text) => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      const newTodo = {
        id: Date.now(),
        text,
        completed: false,
      };
      setTodos(prev => [...prev, newTodo]);
    } catch (error) {
      console.error(t("todoList.error.add"), error);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteTodo = async (id) => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error(t("todoList.error.delete"), error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleTodo = async (id) => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    } catch (error) {
      console.error(t("todoList.error.update"), error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    todos,
    setTodos,
    isLoading,
    setIsLoading,
    addTodo,
    deleteTodo,
    toggleTodo,
  };
}

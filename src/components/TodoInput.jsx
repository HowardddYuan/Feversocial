import IconComponent from './common/IconComponent'
import styles from '../styles/modules/TodoInput.module.css'
import { useState } from 'react'
import { useTranslation } from "react-i18next";

export default function TodoInput({ onAdd, isLoading }) {
  const { t } = useTranslation();
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (text.trim()) {
      onAdd(text)
      setText('')
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <div className={styles["todo-input"]}>
      <input type="text" placeholder={t("todoList.input.placeholder")} value={text} onChange={(e) => setText(e.target.value)} onKeyDown={handleKeyDown} />
      <button onClick={handleSubmit} disabled={isLoading}>
        <IconComponent name="add" />
      </button>
    </div>
  )
}

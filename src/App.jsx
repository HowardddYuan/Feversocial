import { I18nextProvider } from 'react-i18next';
import i18n from './config/i18n';
import Header from "./components/Header";
import styles from "./styles/modules/App.module.css";
import TodoList from "./containers/TodoList";
function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Header />
      <main className={styles.container}>
        <div className={styles.content}>
          <div className={styles["list-container"]}>
            <TodoList />
          </div>
        </div>
      </main>
    </I18nextProvider>
  );
}

export default App;

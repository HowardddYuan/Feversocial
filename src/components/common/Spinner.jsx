import styles from '../../styles/modules/Spinner.module.css'

export default function Spinner() {
  return (
    <div className={styles.overlay}>
      <div className={styles.spinner} />
    </div>
  )
}
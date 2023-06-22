import styles from "./Loading.module.css";

export default function Loading() {
    return (
        <div className={styles.loader}>
            <span>Ładowanie</span>
            <span>komponentu</span>
        </div>
    )
}
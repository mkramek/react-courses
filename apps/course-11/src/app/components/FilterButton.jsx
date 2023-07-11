import React from "react"
import styles from "./FilterButton.module.css";

export const FilterButton = ({ selected, children }) => {
    return (
        <div className={`${selected ? styles.active : styles.inactive}`}>{children}</div>
    );
}
import { useRef, useState } from "react";
import styles from "./ContactPage.module.css";
import { Navigate, useLocation } from "react-router-dom";

export default function ContactPage() {
    const inputRef = useRef(null);
    const [home, setHome] = useState(false);
    const location = useLocation();

    const handleHome = () => {
        setHome(true);
    }

    if (home) {
        return <Navigate to="/" replace={true} state={{ from: location.pathname }} />
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();
        console.log(`Name: ${inputRef.current.name || "none"}`);
        console.log(`Value: ${inputRef.current.value}`);
    }

    return (
        <div className={styles.main}>
            <h1>Contact page! {location.state && location.state.from && `(From: "${location.state.from}", via button)`}</h1>
            <button onClick={handleHome}>&larr; Go back to home</button>
            <form onSubmit={handleSubmit}>
                <input id="tekst" ref={inputRef} type="text" />
                <button type="submit">Wyślij</button>
            </form>
        </div>
    );
}
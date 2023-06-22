import { useLocation, useNavigate } from "react-router-dom";
import styles from "./AboutPage.module.css";

export default function AboutPage() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleHome = () => {
        navigate('/', { state: { from: location.pathname }, replace: true });
    }

    return (
        <div className={styles.main}>
            <h1>About page! {location.state && location.state.from && `(From: "${location.state.from}", via button)`}</h1>
            <button onClick={handleHome}>&larr; Go back to home</button>
            <a href={`${location.pathname}#section1`}>Go to section 1 &rarr;</a>
            <a href={`${location.pathname}#section2`}>Go to section 2 &rarr;</a>
            <a href={`${location.pathname}#section3`}>Go to section 3 &rarr;</a>
            <div id="section1" className={`${styles.section} ${styles.bgGreen}`}></div>
            <div id="section2" className={`${styles.section} ${styles.bgGrey}`}></div>
            <div id="section3" className={`${styles.section} ${styles.bgCoral}`}></div>
        </div>
    );
}
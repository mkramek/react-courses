import { useLocation, useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css";

export default function HomePage() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleAbout = () => {
        navigate('/about', { state: { from: location.pathname }, replace: true });
    }

    const handleContact = () => {
        navigate('/contact', { state: { from: location.pathname }, replace: true });
    }
    return (
        <div className={styles.main}>
            <h1>Home page! {location.state && location.state.from && `(From: "${location.state.from}", via button)`}</h1>
            <button onClick={handleAbout}>Go to "About" &rarr;</button>
            <button onClick={handleContact}>Go to "Contact" &rarr;</button>
        </div>
    );
}

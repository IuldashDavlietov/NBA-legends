import styles from './Header.module.css';
import logo from '../../assets/nba-logo.png'

export default function Header({ children }) {
    return (
        <header className={styles.header}>
            <img
                src={logo}
                alt="NBA Logo"
                className={styles.logo} />

            <h1 className={styles.title}>
                NBA Legends
            </h1>

            {children}
        </header>
    );
}
import styles from
    './BackCard.module.css';


export default function BackCard({ statistics }) {
    return (
        <div className={styles.cardBack}>
            <ul className={styles.statsList}>
                {statistics.map((stat, index) => (
                    <li
                        key={index}
                        className={styles.statItem}> 🏀 {stat}
                    </li>
                ))}
            </ul>
        </div>
    );
}
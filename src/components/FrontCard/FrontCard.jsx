import styles from './FrontCard.module.css';


export default function FrontCard({ name, img }) {
    return (
        <div className={styles.cardFront}>
            <img
                src={img}
                alt={name}
                className={styles.playerImg} />

            <div className={styles.nameBadge}>
                <span className={styles.star}> ⭐ </span>
                <span className={styles.name}>{name}</span>
            </div>
        </div>
    );
}
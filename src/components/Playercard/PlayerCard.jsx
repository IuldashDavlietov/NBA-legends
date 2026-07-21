import styles from './PlayerCard.module.css';
import { useState } from 'react';
import FrontCard from '../FrontCard/FrontCard';
import BackCard from '../BackCard/BackCard';

export default function PlayerCard({ name, img, statistics }) {

    const [isFlipped, setIsFlipped] = useState(false);

    const toggleFlip = () => {
        setIsFlipped((prev) => !prev);
    };

    return (
        <div
            className={styles.cardContainer}
            onClick={toggleFlip} >
            <div
                className={`${styles.cardInner} ${isFlipped ? styles.isFlipped : ''}`}>
                <div className={styles.cardFront}>
                    <FrontCard name={name} img={img} />
                </div>

                <div className={styles.cardBack}>
                    <BackCard statistics={statistics} />
                </div>
            </div>
        </div>
    );
}
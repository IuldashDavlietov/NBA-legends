import styles from './CardContainer.module.css';
import PlayerCard from '../PlayerCard/PlayerCard';

export default function CardContainer({ players }) {
    return (
        <div className={styles.cardBox}>
            {players.map((player) => (
                <PlayerCard
                    key={player.name}
                    {...player} />))}
        </div>
    );
}
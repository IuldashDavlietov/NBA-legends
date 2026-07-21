import styles from
    './HeaderForm.module.css';


export default function HeaderForm({ searchTerm, onSearchChange, sortBy, onSortChange }) {
    return (
        <form >
            <input
                type="text"
                className={styles.searchInput}
                placeholder="Search Player..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)} />

            <select
                className={styles.sortSelect}
                value={sortBy}
                onChange={(e) => onSortChange(e.target.value)} >
                <option value="points"> Points </option>
                <option value="rebounds">Rebounds</option>
                <option value="assists">Assists</option>
                <option value="All stars">All stars</option>
            </select>
        </form>
    );
}
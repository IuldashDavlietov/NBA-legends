import CardContainer
  from './components/CardContainer/CardContainer';
import './App.css';
import { data }
  from './helper/data';
import Header
  from './components/Header/Header';
import { useState }
  from 'react';
import HeaderForm
  from './components/HeaderForm/HeaderForm';

function App() {

  // Search Player --->

  const [search, setSearch] = useState('');

  const filteredPlayers = data.filter((player) => (player.name.toLowerCase().includes(search.toLowerCase())));

  // Sort By --->

  const [sortBy, setSortBy] = useState('points');

  function getNumericStat(player, statKey) {
    const foundStr = player.statistics.find((str) => str.toLowerCase().includes(statKey.toLowerCase()));
    const matchStr = foundStr ?.match(/[\d.]+/)?.[0];
    return matchStr ? +matchStr : 0;
  }

  const sortedPlayers = [...filteredPlayers].sort((a, b) => (
    getNumericStat(b, sortBy) -
    getNumericStat(a, sortBy)
  ));

  return (
    <>
      <Header>
        <HeaderForm
          searchTerm={search}
          onSearchChange={setSearch}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />
      </Header>

      <CardContainer
        players={sortedPlayers}
      />
    </>
  );
}

export default App;
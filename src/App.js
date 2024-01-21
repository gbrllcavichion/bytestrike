import { useState } from 'react';
import Role from './components/Role';
import Banner from './components/Banner';
import Forms from './components/Forms';

function App() {

  const roles = [
    {
        name: 'In Game Leader',
        firstColor: '#57C278',
        secondColor: '#D9F7E9',
    },
    {
        name: 'Entry Fragger',
        firstColor: '#82CFFA',
        secondColor: '#E8F8FF',
    },
    {
        name: 'Flank Watcher',
        firstColor: '#A6D157',
        secondColor: '#F0F8E2',
    },
    {
        name: 'Support Roles',
        firstColor: '#E06B69',
        secondColor: '#FDE7E8',
    },
    {
        name: 'Anchor',
        firstColor: '#D86EBF',
        secondColor: '#FAE5F5',
    },
    {
        name: 'Roamers',
        firstColor: '#FEBA05',
        secondColor: '#FFF5D9',
    }
  
]

  const [players, setPlayers] = useState([])

  const whenNewPlayerAdded = (player) => {
    setPlayers([...players, player])
  }

  return (
    <div className="App">
      <Banner/>
      <Forms roles={roles.map(role => role.name)} whenPlayerSubmitted={player => whenNewPlayerAdded(player)}/>

      {roles.map(role => <Role 
        key={role.name} 
        nickname={role.name} 
        firstColor={role.firstColor} 
        secondColor={role.secondColor} 
        players={players.filter(player => player.role === role.name)}
      />)}   

    </div>
  );
}

export default App;

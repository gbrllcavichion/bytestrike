import { useState } from 'react';
import Banner from './components/Banner';
import Forms from './components/Forms';

function App() {

  const roles = [
    {
        nome: 'In Game Leader',
        corPrimaria: '#57C278',
        corSecundaria: '#D9F7E9',
    },
    {
        nome: 'Entry Fragger',
        corPrimaria: '#82CFFA',
        corSecundaria: '#E8F8FF',
    },
    {
        nome: 'Flank Watcher',
        corPrimaria: '#A6D157',
        corSecundaria: '#F0F8E2',
    },
    {
        nome: 'Support Roles',
        corPrimaria: '#E06B69',
        corSecundaria: '#FDE7E8',
    },
    {
        nome: 'Anchor',
        corPrimaria: '#D86EBF',
        corSecundaria: '#FAE5F5',
    },
    {
        nome: 'Roamers',
        corPrimaria: '#FEBA05',
        corSecundaria: '#FFF5D9',
    }
  
]

  const [players, setPlayers] = useState([])

  const whenNewPlayerAdded = (player) => {
    console.log(player)
    players.push(player)
    setPlayers([...players, player])
  }

  return (
    <div className="App">
      <Banner/>
      <Forms roles={roles.map(role => role.name)} whenPlayerSubmitted={player => whenNewPlayerAdded(player)}/>

    </div>
  );
}

export default App;

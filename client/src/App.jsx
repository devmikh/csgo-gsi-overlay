import io from 'socket.io-client';
const socket = io.connect('http://localhost:3000');

import { useEffect, useState } from 'react';

import Stats from './components/Stats';

function App() {

  const [data, setData] = useState({
    player: {
      name: '',
      state: {
        health: 100,
      },
      match_stats: {
        kills: 0,
        assists: 0,
        deaths: 0
      },
    }
  });

  useEffect(() => {
    socket.on('data', (data) => {
      console.log(data);
      setData(data);
    });
  }, [socket]);

  return (
    <div>
      <Stats playerStats={ data.player.match_stats } />
      <p>{ data.player.name }</p>
    </div>
  )
}

export default App;

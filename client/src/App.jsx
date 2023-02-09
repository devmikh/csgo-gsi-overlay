import io from 'socket.io-client';
const socket = io.connect("http://localhost:3000");

import { useEffect, useState } from 'react';

function App() {

  const [gameData, setGameData] = useState({
    player: {
      match_stats: {
        kills: 0,
        deaths: 0
      },
      weapons: {
        weapon_1: {
          ammo_clip: 0,
          ammo_reserve: 0
        },
        weapon_2: {
          ammo_clip: 0,
          ammo_reserve: 0
        }
      }
    }
  });

  useEffect(() => {
    socket.on("game_data", (data) => {
      console.log(data);
      setGameData(data);
    });
  }, [socket]);

  return (
    <div>
      <h1>Kills: {gameData.player.match_stats.kills || 0}</h1>
      <h1>Deaths: {gameData.player.match_stats.deaths || 0}</h1>
      <h1>Bullets: {gameData.player.weapons.weapon_2.ammo_clip || 0} / {gameData.player.weapons.weapon_2.ammo_reserve || 0}</h1>
    </div>
  )
}

export default App

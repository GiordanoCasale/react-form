import { useState } from 'react'

function App() {
  const videoGames = [
    "The Legend of Zelda",
    "Super Mario Bros",
    "Final Fantasy VII",
    "Minecraft",
    "Grand Theft Auto V",
    "The Witcher 3",
    "Pokemon",
    "Red Dead Redemption 2",
    "Dark Souls",
    "Half-Life"
  ];
  //dichiaro una variabile per aggiungere un nuovo gioco all'array

  const [newGame, setNewGame] = useState("")

  //dichiaro una variabile per impedire il ricarimento della pagina
  const handleSubmit = event => {
    event.preventDefault();
    console.log('Il gioco aggiunto è:' + newGame)
  }

  return (
    //vado a mettere il titolo e a ciclare l'array col metodo map
    <div className='container'>
      <h1>Lista Videogiochi</h1>
      <ul>
        {videoGames.map((game, index) => (
          <li key={index}>{game}</li>
        ))}
      </ul>

      <form className='form' onSubmit={handleSubmit}>
        <input className='input' type="text" value={newGame} onChange={e => { setNewGame(e.target.value) }} />
        <button className='btn'>Aggiungi Gioco</button>
      </form>
    </div>
  )

}

export default App

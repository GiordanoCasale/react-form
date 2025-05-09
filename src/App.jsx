import { useState } from 'react'

function App() {
  const Games = [
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
  const [videoGames, setVideoGames] = useState(Games)
  const [newGame, setNewGame] = useState("")

  //dichiaro una variabile per impedire il ricarimento della pagina
  const addGame = e => {
    e.preventDefault();
    //variabile per far aggiornare correttamente la ui
    const updatedVideoGames = [...videoGames, newGame];
    setVideoGames(updatedVideoGames);
    setNewGame("");//questo lo usiamo per ripulire il form
  }
  //variabile per l'eliminazione di un elemento nell'array e la creazione del clone senza il suddetto elemento
  const removeGame = i => {
    const updatedGames = videoGames.filter((game, index) => {
      return index !== i
    });
    setVideoGames(updatedGames);
  }

  return (
    //vado a mettere il titolo e a ciclare l'array col metodo map
    <div className='container'>
      <h1>Lista Videogiochi</h1>
      <ul>
        {videoGames.map((game, index) => (
          <li key={index}>
            <span>{game}</span>
            <button className='remove-button' onClick={() => removeGame(index)}>
              <i class="fa-solid fa-trash"></i>
            </button>
          </li>
        ))}
      </ul>

      <form className='form' onSubmit={addGame}>
        <input className='input' type="text" value={newGame} onChange={e => { setNewGame(e.target.value) }} />
        <button className='btn'>Aggiungi Gioco</button>
      </form>
    </div>
  )

}

export default App

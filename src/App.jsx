import { useState } from 'react'

function App() {
  const Games = [
    "The Legend of Zelda",
    "Super Mario Bros",
    "Final Fantasy VII",
    "Minecraft",
    "Grand Theft Auto V",
    "The Witcher 3",
    "Pokémon",
    "Red Dead Redemption 2",
    "Dark Souls",
    "Half-Life"
  ];


  //dichiaro una variabile per aggiungere un nuovo gioco all'array
  const [videoGames, setVideoGames] = useState(Games)
  const [newGame, setNewGame] = useState("")
  const [message, setMessage] = useState("")// stato per l'apparizione del messaggio
  const [messageType, setMessageType] = useState(""); //stato per la differenziazione del messaggio

  //dichiaro una variabile per impedire il ricarimento della pagina
  const addGame = e => {
    e.preventDefault();
    const updatedVideoGames = [...videoGames, newGame];
    setVideoGames(updatedVideoGames);
    setMessage(`Il gioco "${newGame}" è stato aggiunto alla lista!`);
    setMessageType("success"); //serve per differenziare il tipo di messaggio, in questo caso differenziare i colori
    setNewGame(""); //per tenere pulito il form
    setTimeout(() => {
      setMessage("");
      setMessageType(""); // resetta anche il tipo
    }, 3000);
  }
  //variabile per l'eliminazione di un elemento nell'array e la creazione del clone senza il suddetto elemento
  const removeGame = i => {
    const gameToRemove = videoGames[i];
    const updatedGames = videoGames.filter((game, index) => {
      return index !== i
    });
    setVideoGames(updatedGames);
    setMessage(`Il gioco "${gameToRemove}" è stato rimosso dalla lista!`);
    setMessageType("error"); // serve per differenziare il tipo di messaggio, in questo caso differenziare i colori
    setTimeout(() => {
      setMessage("");
      setMessageType(""); // resetta anche il tipo
    }, 3000);
  }

  return (
    <div className='container'>
      <h1>Lista Videogiochi</h1>
      <ul>
        {videoGames.map((game, index) => ( //andiamo a ciclare l'array con map e crearne una copia
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
      {message && <div className={`message ${messageType}`}>{message}</div> // rendering per la differenziazione dei messaggi
      }
    </div>
  )
}

export default App

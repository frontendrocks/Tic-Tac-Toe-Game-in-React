import { useEffect, useState } from 'react'
import './App.css'

function App() {
 
  const [matrix, setMatrix] = useState(Array(9).fill(null));

  const [isXTurn, setIsXTern] = useState(true);

  const [won, setWon] = useState(null);

  const resultWinner = () => {
    const winerCombinations = [
      [0, 4, 8],
      [2, 4, 6],
      [0, 1, 2],
      [0, 3, 6],
      [6, 7, 8],
      [2, 5, 8],
      [3, 4, 5],
      [1,4,7], 

    ]
    for (let i = 0; i < winerCombinations.length; i++) {
      const [a, b, c] = winerCombinations[i];
      if (matrix[a] && matrix[a] === matrix[b] && matrix[a] === matrix[c]) {
        setWon(matrix[a])
      }
    }
  }

  useEffect(() => {
    resultWinner();
  }, [matrix])

  const handlePlayerClick = (e) => {
    const pos = e.target.id
    const newMatrix = [...matrix];
    newMatrix[pos] = isXTurn ? 'X' : 'O';
    setMatrix(newMatrix);
    setIsXTern((preTurn) => !preTurn);
    
  }

  const resetHandle = (e) => {
    setIsXTern(true);
    setMatrix(Array(9).fill(null));
    setWon(null)
  }

  return (
    <div className='container'>
      <div className='title'>
             <h3>Tic Toi Toe Game</h3>
      </div>
      <div className='mainboard' onClick={handlePlayerClick}>
        {matrix.map((res,index) => {
         return ( <div
            key={index}
            id={index}
            className='box'
          >{res}</div>)
        })}
      </div>
      
      <div className='game-res'>
        <button onClick={resetHandle}>Reset</button>
        <div>Next Player: {isXTurn ? 'X' : 'O'}</div>
       {won && <div>Player {won} won</div>} 
      </div>
    </div>
  )
}

export default App

import React,{useState, useEffect} from 'react'
import APIService from '../services/APIService'
import Line from './Line';

const Wordle = () => {
    
    const [solution, setSolution] = useState('');
    const [guesses, setGuesses] = useState(new Array(6).fill(null))
    const [current, setCurrent] = useState('')
    const [isFinished, setIsFinished] = useState(false)

    useEffect(() => {
        const api = new APIService();
        api.get('').then(data=>setSolution(data[Math.floor(Math.random()*data.length)]))
    }, [])
    
    useEffect(() => {
        const handleType = (e) => {
            if (isFinished) {
                return;
            }

            if (e.key ==='Backspace') {
                setCurrent(prev => [...prev].slice(0, -1))
                return;
            }

            if (e.key === 'Enter') {

                if (current.length<4) {

                    return;
                }

                if (current.length > 5) {
                    return;
                }

                if (current === solution) {
                    alert("you won!")
                    setIsFinished()
                }

                guesses[guesses.findIndex(val => val == null)] = current;
                setCurrent('')
                return;

            }

            if (e.key.match(/[A-Za-z]/)) {
                setCurrent(prev=>prev+e.key)
                return; 
            }
        }

        window.addEventListener('keydown',handleType)
    
      return () => {
        window.removeEventListener('keydown',handleType)
      }
    }, [current, solution, isFinished, guesses])
    
  return (
      <div className='board'>
          <h1 style={{fontFamily:'game',fontSize:'2.5em'}}>Wordle</h1>
          {
              guesses.map((guess, i) => {
                  
                  const isCurrentGuess = i===guesses.findIndex(val=>val===null);
                  return (
                    <Line key={i}
                        guess={isCurrentGuess ? current : guess ?? ''}
                        isFinall={!isCurrentGuess && guess != null}
                        solution={solution}
                    />
                  )
              })
          }
      </div>
  )
}

export default Wordle
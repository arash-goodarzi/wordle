import React from 'react'

const Line = ({ guess,solution,isFinall }) => {
    const tiles = [];

    for (let index = 0; index < 5; index++) {
        const char = guess[index];

        let className = 'tile'
        

        if (isFinall) {
            if (char === solution[index]) {
                className += ' correct'
            } else if (solution.includes(char)) {
                
                className += ' close'
            } else {
                className += ' incorrect'
            }
        }


        tiles.push(<div className={className} key={index}>{ char}</div>)
        
    }
    return (
        <div className='line'>
            {tiles}
        </div>
  )
}

export default Line
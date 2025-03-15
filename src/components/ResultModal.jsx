import {createPortal} from 'react-dom'
export default function ResultModal({ targetTime , timeRemaining ,onReset, ref}){
    
    const lost = timeRemaining <= 0
    const remTime = (timeRemaining / 1000).toFixed(2)
    const score = Math.round((1- remTime/targetTime) * 100)
    return createPortal(    
        <dialog className="result-modal" ref={ref}>
            <h2>{lost ? 'You lost bitch' : `Your Score ${score}`}</h2>
            <p>The Target Time was <strong>{targetTime}</strong></p>
            <p>You stopped timer with <strong>{remTime} seconds left </strong></p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog> , 
        document.getElementById('modal')
    )
}
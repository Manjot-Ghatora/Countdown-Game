import { useRef, useState } from "react";
import ResultModal from "./ResultModal";
export default function TimerChallenges({ title , targetTime }) {

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000)
    const timerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000

    const timeRef = useRef()
    const dialogRef = useRef()

    if(timeRemaining <= 0){
        clearInterval(timeRef.current)
        dialogRef.current.showModal()
    }
    function handleReset(){
        setTimeRemaining(targetTime * 1000)
    }
    function handleStart() {
        timeRef.current = setInterval( ()=> {
            setTimeRemaining( prevTime => prevTime - 10)
        },10)
    }
    function handleStop(){
       clearInterval(timeRef.current);
       dialogRef.current.showModal();
    }

    return (
       
        <>
            <ResultModal targetTime={targetTime} timeRemaining={timeRemaining} onReset={handleReset} ref={dialogRef} />
            <section className="challenge">
                <h2 > {title} </h2>
                <p className="challenge-time"> {targetTime} second{targetTime > 1 ? 's' : ''} </p>
                <p>
                    <button onClick={timerActive ? handleStop : handleStart}> {!timerActive ? 'Start' : 'Stop' } Challenge</button>
                </p>
                <p>
                    {timerActive ? 'Timer is running..' : 'Timer inactive'}
                </p>
             </section>
        </>
    )
}
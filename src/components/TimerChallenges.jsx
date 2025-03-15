import { useRef, useState } from "react";
import ResultModal from "./ResultModal";
export default function TimerChallenges({ title , targetTime }) {

    const [timerExpired, setTimerExpired] = useState(false);
    const [timerStarted, setTimerStarted] = useState(false);

    const timeRef = useRef()
    const dialogRef = useRef()
    function handleStart() {
        timeRef.current = setTimeout( ()=> {
            dialogRef.current.showModal()
            setTimerExpired(true);
        }, targetTime * 1000)
        setTimerStarted(true)
    }
    function handleStop(){
       clearTimeout(timeRef.current);
       setTimerStarted(false)
    }
    return (
       
        <>
            <ResultModal result={'lost'} targetTime={targetTime} ref={dialogRef} />
            <section className="challenge">
                <h2 > {title} </h2>
                <p className="challenge-time"> {targetTime} second{targetTime > 1 ? 's' : ''} </p>
                <p>
                    <button onClick={timerStarted ? handleStop : handleStart}> {!timerStarted ? 'Start' : 'Stop' } Challenge</button>
                </p>
                <p>
                    {timerStarted ? 'Timer is running..' : 'Timer inactive'}
                </p>
             </section>
        </>
    )
}
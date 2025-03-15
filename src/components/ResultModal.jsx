export default function ResultModal({result , targetTime , ref}){
    return (
        <dialog className="result-modal" ref={ref}>
            <h2>You {result}</h2>
            <p>The Target Time was <strong>{targetTime}</strong></p>
            <p>You stopped timer with <strong>X seconds left </strong></p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    )
}
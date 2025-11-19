export default function ScoreBoard ({bestScore, currentScore}) {
    return (
        <div className="scoreboard">
            <h3>Best Score: {bestScore}</h3>
            <h2>Current Score: {currentScore}</h2>
        </div>
    )
}
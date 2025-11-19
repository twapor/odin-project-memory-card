import DisplayCards from "../utils/DisplayCards";
import ScoreBoard from "./ScoreBoard";
import GameControls from "./GameControls";


export default function GameArea ({currentScore, bestScore, imageData, onClickReset, onClickSearch}) {
    return (
        <div className="app">
        <div className="controls">
        <ScoreBoard currentScore={currentScore} bestScore={bestScore}/>
        <GameControls onClickReset={onClickReset} onClickSearch={onClickReset}/>
        </div>
        <DisplayCards imageData={imageData}/>
        </div>
    );
}
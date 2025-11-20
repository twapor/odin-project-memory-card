import DisplayCards from "../utils/DisplayCards";
import ScoreBoard from "./ScoreBoard";
import GameControls from "./GameControls";


export default function GameArea ({currentScore, bestScore, imageData, onClickReset, onClickSearch, onMemoryCardClick, order}) {
    return (
        <div className="app">
        <div className="controls">
        <ScoreBoard currentScore={currentScore} bestScore={bestScore}/>
        <GameControls onClickReset={onClickReset} onClickSearch={onClickSearch}/>
        </div>
        <DisplayCards imageData={imageData} onMemoryCardClick={onMemoryCardClick} order={order}/>
        </div>
    );
}
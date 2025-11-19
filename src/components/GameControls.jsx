export default function GameControls ({onClickSearch, onClickReset}) {
   return ( <div className="game-controls">
        <input type="text"  className="search-bar" placeholder="Search for a theme"/>
        <button className="search" onClick={onClickSearch}>Search</button>
        <button className="reset" onClick={onClickReset}>Restart</button>
    </div>)
}
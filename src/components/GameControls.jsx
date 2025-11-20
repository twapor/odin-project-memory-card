import { useState } from "react"

export default function GameControls ({onClickSearch, onClickReset}) {
   const [searchValue, setSearchValue] = useState("")
   
   return ( <div className="game-controls">
        <input type="text"  className="search-bar" placeholder="Search for a theme" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
        <button className="search" onClick={() => onClickSearch(searchValue)}>Search</button>
        <button className="reset" onClick={onClickReset}>Restart</button>
    </div>)
}
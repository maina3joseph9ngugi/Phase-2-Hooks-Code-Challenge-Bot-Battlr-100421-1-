import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import { Routes, Route, useNavigate } from "react-router-dom";
import BotSpecs from './BotSpecs'
import SortBar from "./SortBar";

function BotsPage() {
  //start here with your code for step one
  const [allBots, setallBots] = useState([]);
  const [botCopy,setbotCopy]=useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then(r => r.json())
      .then(result =>{ 
        setbotCopy(result)
        setallBots([...result.map(bot => ({ ...bot, isSelected: false }))])});
  }, []);

  function handleDelete(id) {
    setallBots(prevBots => prevBots.filter(object => object.id !== id))
    console.log(id)
  }

  function handleRemove(id) {
    setallBots(prevBots => prevBots.map(bot => bot.id === id ? { ...bot, isSelected: !bot.isSelected } : bot));
  }

  function handleSort(criteria) {
    setallBots(prevBots => [...prevBots].sort((a, b) => (a[criteria] > b[criteria]) ? 1 : ((b[criteria] > a[criteria]) ? -1 : 0)))
  }
  function handleFilter(criteria) {
    setallBots(() => botCopy.filter(bot => bot.bot_class === criteria));
  }
  return (
    <div>
      <YourBotArmy bots={allBots} setallBots={setallBots} handleDelete={handleDelete} />
      <SortBar handleSort={handleSort} handleFilter={handleFilter} />
      <Routes>
        <Route path='/' element={
          <BotCollection
            bots={allBots}
            setallBots={setallBots}
            handleDelete={handleDelete}
            navigate={navigate}
            handleRemove={handleRemove} />
        } />
        <Route path="/:id" element={<BotSpecs
          bots={allBots}
          navigate={navigate}
          handleRemove={handleRemove} />} />
      </Routes>
    </div>
  )
}

export default BotsPage;
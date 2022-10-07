import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ bots, setallBots, handleDelete }) {
  //your bot army code here...
  function handlePutBack(id) {
    setallBots(prevBots => prevBots.map(bot => bot.id === id ? { ...bot, isSelected: !bot.isSelected } : bot));
  }

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          Your Bot Army
          {/* Conditionally render; Render if a bots isSelected value is true */}
          {bots.map(bot => bot.isSelected && <BotCard
            bot={bot}
            key={bot.id}
            handlePutBack={handlePutBack}
            action={"removeFromArmy"}
            handleDelete={handleDelete} />)}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, handleDelete, navigate, handleRemove }) {
  // Your code here

  // setallBots(prevBots=> prevBots.map(object => object.id!==bot.id))

  // Route to different url /:id of the bot selected

  // bots that do not have a class similar to bots in the bot army.
  // for every bot has a isSeleceted of true get the bot_class; push it to an array selectedClasses= ["Support"]
  // filter every bot that has a bot_class that does not match with every srting in our array;
  let selectedClasses = new Set();
  bots.map(bot => bot.isSelected && selectedClasses.add(bot.bot_class));
  console.log(selectedClasses);
  console.log();

  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        Collection of all bots
        {bots.filter(bot => [...selectedClasses]
          .every(clss => clss !== bot.bot_class))
          .map(bot => !bot.isSelected && <BotCard
            bot={bot} key={bot.id}
            handleRemove={handleRemove}
            handleDelete={handleDelete}
            navigate={navigate}
            action={"navigate"}
          />)}
      </div>
    </div>
  );
}

export default BotCollection;
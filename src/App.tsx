import { useEffect, useState } from "react";
import * as C from "./App.styles";
import logo from "./assets/memologo.svg";
import returnIcon from "./assets/returnicon.svg";
import pauseIcon from "./assets/pauseicon.svg";
import playIcon from "./assets/playicon.svg";

import { CardType } from "./types/CardType";

import { Button } from "./components/Button";
import { InfoItem } from "./components/InfoItem";
import { items } from "./data/items";
import { Card } from "./components/Card";
import { timerFormat } from "./utils/timerFormat";

const App = () => {
   const [start, setStart] = useState<boolean>(false);
   const [stopWatch, setTimer] = useState<number>(0);
   const [attempts, setAttempts] = useState<number>(0);
   const [shownCard, setShownCard] = useState<number>(0);
   const [cards, setCards] = useState<CardType[]>([]);
   const [disablePausePlayButton, setDisable] = useState<boolean>(false);

   useEffect(() => resetAndCreatGrid(), []);

   useEffect(() => {
      const timer = setInterval(() => {
         if (start) setTimer(stopWatch + 1);
      }, 950);
      return () => clearInterval(timer);
   }, [stopWatch, start]);

   // Verify if the game is over
   useEffect(() => {
      if (attempts > 0 && cards.every((card) => card.permanentShown === true)) {
         setStart(false);
         setDisable(true);
      }
   }, [attempts, cards]);

   // Verify if opened cards are equal
   useEffect(() => {
      if (shownCard === 2) {
         // Array with 2 cards that are open
         let openedCards = cards.filter((card) => card.shown === true);
         if (openedCards.length === 2) {
            // If both are equal make them permanent on screen
            if (openedCards[0].item === openedCards[1].item) {
               let cloneCards = [...cards];
               for (let item in cloneCards) {
                  if (cloneCards[item].shown) {
                     cloneCards[item].permanentShown = true;
                     cloneCards[item].shown = false;
                  }
               }
               setCards(cloneCards);
               setShownCard(0);
            } else {
               setTimeout(() => {
                  let cloneCards = [...cards];
                  // If they're not equal then close them
                  for (let item in cloneCards) {
                     cloneCards[item].shown = false;
                  }
                  setCards(cloneCards);
                  setShownCard(0);
               }, 1000);
            }

            setAttempts(attempts + 1);
         }
      }
   }, [shownCard, cards]);

   const resetAndCreatGrid = () => {
      // Step 1 - Reset game
      setTimer(0);
      setAttempts(0);
      setShownCard(0);
      setDisable(false);

      // Step 2 - Create grid
      // Step 2.1 - Create empty grid
      let newCards: CardType[] = [];
      for (let i = 0; i < items.length * 2; i++) {
         newCards.push({
            item: null,
            shown: false,
            permanentShown: false,
         });
      }
      // Step 2.2 - Fill grid with random positions
      for (let w = 0; w < 2; w++) {
         for (let i = 0; i < items.length; i++) {
            let pos = -1;
            while (pos < 0 || newCards[pos].item !== null) {
               pos = Math.floor(Math.random() * items.length * 2);
            }
            newCards[pos].item = i;
         }
      }

      // Step 2.3 - Throw new grid into state
      setCards(newCards);

      // Step 3 - Start game
      setStart(true);
   };

   const toggleTimer = () => {
      start ? setStart(false) : setStart(true);
   };

   const handleClickCard = (index: number) => {
      if (start && index !== null && shownCard < 2) {
         let cloneCards = [...cards];
         if (
            cloneCards[index].permanentShown === false &&
            cloneCards[index].shown === false
         ) {
            cloneCards[index].shown = true;
            setShownCard(shownCard + 1);
         }
      }
   };

   return (
      <C.Container>
         <header>
            <h1>
               <a href="">
                  <img src={logo} width="120" alt="Logo Memo" />
               </a>
            </h1>
         </header>
         <main>
            <C.InfoArea>
               <div className="infoContainer">
                  <InfoItem title="Tempo" info={timerFormat(stopWatch)} />
                  <InfoItem title="Tentativas" info={attempts.toString()} />
               </div>
               <div className="buttonContainer">
                  <Button
                     text="Reiniciar"
                     icon={returnIcon}
                     clickButton={resetAndCreatGrid}
                     showButton={true}
                  />
                  <Button
                     text={start ? "Pausar" : "Play"}
                     icon={start ? pauseIcon : playIcon}
                     clickButton={toggleTimer}
                     showButton={disablePausePlayButton ? false : true}
                  />
               </div>
            </C.InfoArea>
            <C.CardArea>
               {cards.map((card, index) => (
                  <Card
                     key={index}
                     data={card}
                     clickCard={() => handleClickCard(index)}
                  />
               ))}
            </C.CardArea>
         </main>
      </C.Container>
   );
};

export default App;

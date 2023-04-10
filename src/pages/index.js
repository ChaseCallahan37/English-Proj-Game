import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import InfoBox from "@/components/InfoBox";
import WaresContainer from "@/components/WaresContainer";
import useBartering from "../hooks/useBartering";

const inter = Inter({ subsets: ["latin"] });

const winCondition = 1500;

export default function Home() {
  const [day, setDay] = useState(0);
  const {
    merchantInventory,
    playerInventory,
    purchaseItem,
    sellItem,
    resetDay,
    playerMoney,
    merchantMoney,
  } = useBartering();

  //Gets a random number of items to have for the next day, based off of max number
  //Then adds that number of randomly chosen items to the new inventory array

  useEffect(() => {
    resetDay();
  }, [day]);

  useEffect(() => {
    resetDay();
  }, []);

  return (
    <main className="">
      <div className="dashboard">
        <div className="side-col">
          <div className="col-header">
            <h2 className="col-header-title">Player Info</h2>
            <InfoBox day={day} money={playerMoney} />
            <button onClick={() => setDay(day + 1)} className="btn">
              Next Day
            </button>
          </div>
          <WaresContainer onWareSelect={sellItem} wares={playerInventory}>
            <h3>Your Wares:</h3>
          </WaresContainer>
        </div>
        <div className="main-col">
          <div className="col-header">
            <h2>Visiting Merchant</h2>
          </div>
          <p>Merchant Money: ${merchantMoney}</p>
          <WaresContainer wares={merchantInventory} onWareSelect={purchaseItem}>
            <h3>Available Wares:</h3>
          </WaresContainer>
        </div>
        <div className="side-col end-col">
          <div className="col-header">
            <h2 className="col-header-title">Go Home</h2>
            <p>
              In order to beat the game and go home, you must make{" "}
              <strong>${winCondition}</strong> to be recognized by the King of
              Egypt.
            </p>
          </div>
          <div className="end-col-body">
            <button
              onClick={() => {
                if (playerMoney >= 1500) alert("Congratulations, you win!!");
                else alert("You do not have enough to win yet");
              }}
              className="end-game-button"
            >
              Earn Recognition
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

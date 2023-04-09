import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import InfoBox from "@/components/InfoBox";
import WaresContainer from "@/components/WaresContainer";
import Item from "@/class/Item";

const inter = Inter({ subsets: ["latin"] });

const maxPurchasables = 7;

const possibleItems = [
  new Item({ title: "Spices of the East", min: 80, max: 120 }),
  new Item({ title: "Silk Scarves", min: 80, max: 120 }),
  new Item({ title: "Exotic Animal Hides", min: 80, max: 120 }),
  new Item({ title: "Precious Gemstones", min: 80, max: 120 }),
  new Item({ title: "Antique Pottery", min: 80, max: 120 }),
  new Item({ title: "Rare Artifacts", min: 80, max: 120 }),
  new Item({ title: "Handmade Rugs", min: 80, max: 120 }),
  new Item({ title: "Spices of the East", min: 80, max: 120 }),
  new Item({ title: "Spices of the East", min: 80, max: 120 }),
  new Item({ title: "Spices of the East", min: 80, max: 120 }),
  new Item({ title: "Spices of the East", min: 80, max: 120 }),
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  "Fine Wines",
  "Enchanted Jewelry",
  "Handcrafted Musical Instruments",
  "Exotic Teas",
  "Rare Books",
  "Handmade Leather Goods",
  "Exquisite Oil Paintings",
  "Ancient Maps",
  "Ceremonial Masks",
  "Mysterious Art Objects",
  "Rare Spices",
  "Exotic Perfumes",
];

const wares = [
  {
    title: "Camel Bag",
    value: 0,
  },
  {
    title: "Canteen",
    value: 0,
  },
  {
    title: "Sword",
    value: 0,
  },
];

const availableWares = [
  {
    title: "Camel Bag",
    value: 0,
  },
  {
    title: "Canteen",
    value: 0,
  },
  {
    title: "Sword",
    value: 0,
  },
];

export default function Home() {
  const [money, setMoney] = useState(0);
  const [day, setDay] = useState(0);
  const [availableWares, setAvailableWares] = useState([
    {
      title: "Camel Bag",
      value: 0,
    },
    {
      title: "Canteen",
      value: 0,
    },
    {
      title: "Sword",
      value: 0,
    },
  ]);
  const [playerWares, setPlayerWares] = useState([
    {
      title: "Camel Bag",
    },
    {
      title: "Canteen",
    },
    {
      title: "Sword",
    },
  ]);

  const handleNewDay = () => {
    const randNum = Math.ceil(Math.random() * maxPurchasables);
    const numNewItems = randNum > 7 ? randNum / 2 : randNum;
    const newInventory = [];
    for (let i = 0; i < numNewItems; i++) {
      newInventory.push(() => {
        const newItem = new Item();
      });
    }
  };

  useEffect(() => {
    handleNewDay();
  }, [day]);

  return (
    <main className="">
      <div className="dashboard">
        <div className="side-col">
          <div className="col-header">
            <InfoBox day={day} money={money} />
            <button onClick={() => setDay(day + 1)} className="btn">
              Next Day
            </button>
          </div>
          <WaresContainer wares={playerWares}>
            <h3>Your Wares:</h3>
          </WaresContainer>
        </div>
        <div className="main-col">
          <div className="col-header">
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </div>
          <WaresContainer wares={availableWares}>
            <h3>Available Wares:</h3>
          </WaresContainer>
        </div>
        <div className="side-col">
          <div className="col-header">
            <h2>Map</h2>
          </div>
        </div>
      </div>
    </main>
  );
}

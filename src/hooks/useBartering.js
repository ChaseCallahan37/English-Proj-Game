import { useState } from "react";

import Item from "@/class/Item";

const maxPurchasables = 7;

const possibleItems = [
  new Item({ title: "Spices of the East", min: 80, max: 120 }),
  new Item({ title: "Silk Scarves", min: 80, max: 120 }),
  new Item({ title: "Exotic Animal Hides", min: 80, max: 120 }),
  new Item({ title: "Precious Gemstones", min: 80, max: 120 }),
  new Item({ title: "Antique Pottery", min: 80, max: 120 }),
  new Item({ title: "Rare Artifacts", min: 80, max: 120 }),
  new Item({ title: "Handmade Rugs", min: 80, max: 120 }),
  new Item({ title: "Fine Wines", min: 80, max: 120 }),
  new Item({ title: "Enchanted Jewelry", min: 80, max: 120 }),
  new Item({ title: "Handcrafted Musical Instruments", min: 80, max: 120 }),
  new Item({ title: "Exotic Teas", min: 80, max: 120 }),
];

const useBartering = () => {
  const [playerInventory, setPlayerInventory] = useState([]);
  const [playerMoney, setPlayerMoney] = useState(300);

  const [merchantInventory, setMerchantInventory] = useState([]);
  const [merchantMoney, setMerchantMoney] = useState(0);

  const purchaseItem = (item) => {
    //If the player has enough money, then add to player inventory and remove from merchant
    //Then update money for both
    if (playerMoney > item.price) {
      setPlayerInventory((prev) => [item, ...prev]);
      setMerchantInventory((prev) => prev.filter((p) => p.id !== item.id));
      setMerchantMoney((prev) => prev + item.price);
      setPlayerMoney((prev) => prev - item.price);
    } else {
      alert("You do not have enough money to purchase that");
    }
  };

  const sellItem = (item) => {
    //If the merchant has enough money, then add to merchant inventory and remove from player
    //Then update money for both
    if (merchantMoney > item.price) {
      setMerchantInventory((prev) => [item, ...prev]);
      setPlayerInventory((prev) => prev.filter((p) => p.id !== item.id));
      setPlayerMoney((prev) => prev + item.price);
      setMerchantMoney((prev) => prev - item.price);
    } else {
      alert("The merchant does not have enough money to purchase that");
    }
  };

  //Sets merchant inventory to 7 random items from the available items
  const resetInventory = () => {
    const randNum = Math.ceil(Math.random() * maxPurchasables);
    const numNewItems = randNum > 7 ? randNum / 2 : randNum;
    const newInventory = [];
    for (let i = 0; i < numNewItems; i++) {
      //Creates a random copy of the available items
      const randItem =
        possibleItems[Math.floor(Math.random() * possibleItems.length)];
      newInventory.push(new Item({ ...randItem }));
    }
    setMerchantInventory(
      newInventory.sort((a, b) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
      })
    );
  };

  const resetMerchantMoney = () => {
    setMerchantMoney(100 + Math.floor(Math.random() * 250));
  };

  const resetDay = () => {
    setPlayerInventory((prev) =>
      prev.map((p) => {
        p.calcPrice();
        return p;
      })
    );
    resetInventory();
    resetMerchantMoney();
  };

  return {
    playerInventory,
    merchantInventory,
    purchaseItem,
    sellItem,
    resetDay,
    merchantMoney,
    playerMoney,
  };
};

export default useBartering;

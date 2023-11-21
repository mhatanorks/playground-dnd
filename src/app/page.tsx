"use client";
import { useState } from "react";
import Board from "./components/Board";
import styles from "./page.module.css";

export default function Home() {
  const mockLists = [
    {
      id: "list-1",
      title: "ToDo",
      cards: [
        { id: "card-1", content: "タスク1" },
        { id: "card-2", content: "タスク2" },
      ],
    },
    {
      id: "list-2",
      title: "Doing",
      cards: [{ id: "card-3", content: "タスク3" }],
    },
    {
      id: "list-3",
      title: "Done",
      cards: [
        { id: "card-4", content: "タスク4" },
        { id: "card-5", content: "タスク5" },
      ],
    },
  ];

  const [lists, setLists] = useState(mockLists); // 初期状態はモックデータ
console.log(lists)
  const moveCard = (cardId: any, newListId: any) => {
    // 現在のリストの状態をコピー
    const newLists = [...lists];

    // 移動するカードとその元のリストを見つける
    let targetCard;
    let oldListId: any;
    for (const list of newLists) {
      const foundCard = list.cards.find((card) => card.id === cardId);
      if (foundCard) {
        targetCard = foundCard;
        oldListId = list.id;
        break;
      }
    }

    // カードが見つからない場合は処理を終了
    if (!targetCard) return;

    // 元のリストからカードを削除
    const oldListIndex = newLists.findIndex((list) => list.id === oldListId);
    if (oldListIndex !== -1) {
      const updatedOldList = { ...newLists[oldListIndex] };
      updatedOldList.cards = updatedOldList.cards.filter((card) => card.id !== cardId);
      newLists[oldListIndex] = updatedOldList;
    }

    // 新しいリストにカードを追加
    const newListIndex = newLists.findIndex((list) => list.id === newListId);
    if (newListIndex !== -1) {
      const updatedNewList = { ...newLists[newListIndex] };
      updatedNewList.cards = [...updatedNewList.cards, targetCard];
      newLists[newListIndex] = updatedNewList;
    }

    // 更新されたリストの配列で状態を更新
    setLists(newLists);
  };

  return (
    <main className={styles.main}>
      <Board lists={lists} moveCard={moveCard} />
    </main>
  );
}

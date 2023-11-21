"use client";

import React from "react";
import Card from "./Card";
import styles from "@/styles/List.module.css"; // CSSモジュールのインポート
import { ListProps } from "@/types/types";

const List = ({ id, title, cards, moveCard }: ListProps) => {
  // リスト上でドラッグイベント発生時にドロップを可能にする
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.style.background = "#f4f4f4"; // ドロップ可能なリストの背景色を変更
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const cardId = e.dataTransfer.getData("text/plain");
    moveCard(cardId, id); // moveCard 関数を呼び出し、カードを移動
    e.currentTarget.style.background = ""; // ドラッグがリストから離れたら背景色を元に戻す
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.currentTarget.style.background = ""; // ドラッグがリストから離れたら背景色を元に戻す
  };

  return (
    <div
      className={styles.list}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <h3 className={styles.title}>{title}</h3>
      {cards.map((card) => (
        <Card key={card.id} cardId={card.id} content={card.content} />
      ))}
      <div className={styles.addButton}>ADD TASK +</div>
    </div>
  );
};

export default List;

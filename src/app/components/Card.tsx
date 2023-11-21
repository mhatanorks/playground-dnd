"use client";

import React from "react";
import styles from "@/styles/Card.module.css"; // CSSモジュールのインポート

const Card = ({ cardId, content }: { cardId: string; content: string }) => {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("text/plain", cardId);
    e.currentTarget.style.opacity = "0.5"; // ドラッグ中のカードの透明度を下げる
  };

  // ドラッグ終了時に元のスタイルに戻す
  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    e.currentTarget.style.opacity = "";
  };

  return (
    <div
      className={styles.card}
      draggable="true"
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      {content}
    </div>
  );
};

export default Card;

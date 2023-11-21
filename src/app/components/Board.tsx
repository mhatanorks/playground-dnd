import React from "react";
import List from "./List";
import styles from "@/styles/Board.module.css"; // CSSモジュールのインポート
import { MockLists } from "@/types/types";

const Board = ({
  lists,
  moveCard,
}: {
  lists: MockLists;
  moveCard: Function;
}) => {
  return (
    <div >
      <h1 className={styles.title}>DnD Task App</h1>
      <div className={styles.board}>
        {lists.map((list) => (
          <List
            key={list.id}
            id={list.id}
            title={list.title}
            cards={list.cards}
            moveCard={moveCard}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;

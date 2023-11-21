export type Card = {
  id: string;
  content: string;
};

export type List = {
  id: string;
  title: string;
  cards: Card[];
};

export type ListProps = {
  id: string;
  title: string;
  cards: Card[];
  moveCard: Function;
};

export type MockLists = List[];

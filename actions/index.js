import { getDecks } from "../utils/api";

export const SHOW_DECKS = "SHOW_DECKS";
export const SHOW_DECK = "SHOW_DECK";
export const ADD_DECK = "ADD_DECK";
export const ADD_CARD = "ADD_CARD";
export const DELETE_DECK = "DELETE_DECK";
export const INITIAL_DATA = "INITIAL_DATA";

export function showDecks(decks) {
  return {
    type: SHOW_DECKS,
    decks,
  };
}

export function showDeck(deck) {
  return {
    type: SHOW_DECK,
    deck,
  };
}

export function addCard(deck, newCard) {
  return {
    type: ADD_CARD,
    deck,
    newCard,
  };
}

export function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck,
  };
}

export function deleteDeck(deck) {
  return {
    type: DELETE_DECK,
    deck,
  };
}

export const handleInitialData = () => async (dispatch) => {
  const decks = await getDecks();
  return dispatch(showDecks(decks));
};

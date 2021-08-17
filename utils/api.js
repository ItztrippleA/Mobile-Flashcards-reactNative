import AsyncStorage from "@react-native-async-storage/async-storage";

//Test Data
export const decks = {
  Udacity: {
    title: "Udacity",
    questions: [
      {
        question: "Why Udacity?",
        answer: "Because they are the best",
      },
      {
        question: "What are we studying?",
        answer: "React",
      },
    ],
  },
};

const CARD_STORAGE_KEY = "MobileFlashcards:decks";

export const getDecks = async () => {
  try {
    let value = await AsyncStorage.getItem(CARD_STORAGE_KEY);
    if (value !== null) {
      // value previously stored
      value = await JSON.parse(value);
      return value;
    } else {
      return decks;
    }
  } catch (e) {
    // error reading value
    return decks;
  }
};

// take in a single title argument and return the deck associated with that title from all decks:
export const getDeck = async (deck) => {
  let value = await AsyncStorage.getItem(CARD_STORAGE_KEY);
  return JSON.parse(value)[deck];
};

// to create and save a new deck:
export const saveDeck = async (title) => {
  const savedDeck = JSON.stringify({
    [title]: { title: title, questions: [] },
  });
  await AsyncStorage.mergeItem(CARD_STORAGE_KEY, savedDeck);
  return JSON.parse(savedDeck);
};

export const addCardToDeck = async (title, newCard) => {
  const value = await AsyncStorage.getItem(CARD_STORAGE_KEY);
  const data = JSON.parse(value);
  const deck = data[title];
  deck.questions.push(newCard);
  const newDeck = { [title]: deck };
  return await AsyncStorage.mergeItem(
    CARD_STORAGE_KEY,
    JSON.stringify(newDeck)
  );
};

export const removeDeck = async (deck) => {
  const results = await AsyncStorage.getItem(CARD_STORAGE_KEY);
  if (results) {
    const data = JSON.parse(results);
    delete data[deck];

    await AsyncStorage.setItem(CARD_STORAGE_KEY, JSON.stringify(data));
    return data;
  }
  return {};
};

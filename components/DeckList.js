import React, { Component } from "react";
import { ScrollView } from "react-native";
import { connect } from "react-redux";
import { getDecks } from "../utils/api";
import { showDecks } from "../redux/actions";
import DeckListCard from "./DeckListCard";
import styled from "styled-components/native";

// Styled Component
const DeckListContainer = styled.View`
  flex: 1;
  padding: 16px;
`;

class DeckList extends Component {
  // get decks from api and dispatch the data to the store:
  componentDidMount() {
    const { dispatch } = this.props;
    getDecks().then((decks) => dispatch(showDecks(decks)));
  }

  render() {
    const { allDecks, navigation } = this.props;
    return (
      <DeckListContainer>
        <ScrollView>
          {allDecks.map((deck) => {
            return (
              <DeckListCard
                key={deck.title}
                deck={deck}
                navigation={navigation}
              />
            );
          })}
        </ScrollView>
      </DeckListContainer>
    );
  }
}

function mapStateToProps(state) {
  const allDecks = Object.values(state);
  return {
    allDecks,
  };
}

export default connect(mapStateToProps)(DeckList);

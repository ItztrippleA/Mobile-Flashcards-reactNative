import React, { Component } from "react";
import { View } from "react-native";
import { Button, Title, Text } from "react-native-paper";
import { connect } from "react-redux";
import { removeDeck } from "../utils/api";
import { deleteDeck } from "../actions";
import { CommonActions } from "@react-navigation/native";
import styled from "styled-components/native";
import { red } from "../utils/colors";

// Styled Components
const IndividualDeckContainer = styled(View)`
  flex: 1;
  padding: 16px;
`;

const StyledTitle = styled(Title)`
  padding-top: 32px;
  text-align: center;
  font-size: 34px;
  font-weight: 400;
`;

const StyledText = styled(Text)`
  text-align: center;
  font-size: 20px;
`;

const StyledButton = styled(Button)`
  margin-top: 16px;
`;

class SingleDeck extends Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.deck !== undefined) {
      return true;
    }
    return false;
  }

  toHome = () => {
    const { navigation } = this.props;
    navigation.dispatch({
      ...CommonActions.goBack(),
      source: "Deck",
    });
  };

  handleDelete = (event) => {
    event.preventDefault();
    const { deck, dispatch } = this.props;
    // update redux store:
    dispatch(deleteDeck(deck));
    // go back to Home screen:
    this.toHome();
    // update DB:
    removeDeck(deck);
  };

  render() {
    const { deck, navigation } = this.props;
    return (
      <IndividualDeckContainer>
        {/* individual question page goes here */}
      </IndividualDeckContainer>
    );
  }
}

// get the specific deck you clicked on from the store with the deckId passed via route:
function mapStateToProps(state, { route }) {
  const { deckID } = route.params;
  return {
    deck: state[deckID],
  };
}

export default connect(mapStateToProps)(SingleDeck);

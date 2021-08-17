import React, { useState } from "react";
import { Button, Title, TextInput } from "react-native-paper";
import { useDispatch } from "react-redux";
import { addDeck } from "../actions/index";
import { saveDeck } from "../utils/api";
import styled from "styled-components/native";
import { CommonActions } from "@react-navigation/native";
import { View } from "react-native";

// <  Styling Start >
const AddDeckContainer = styled(View)`
  flex: 1;
  padding: 16px;
`;

const StyledTitle = styled(Title)`
  padding-top: 32px;
  padding-bottom: 16px;
  text-align: center;
  font-size: 45px;
  font-weight: 500;
  line-height: 40px;
`;

const StyledButton = styled(Button)`
  margin-top: 16px;
`;

const NewDeck = (props) => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  //to home route

  const handleSubmit = (event) => {
    event.preventDefault();
    // update redux store:

    // set the state of the NewDeck component back to "":

    // go back to home-screen:

    // save to DB:
  };

  return (
    <AddDeckContainer>
      <StyledTitle variant="caption">Deck Title</StyledTitle>
      <TextInput
        label="Deck Title"
        mode="outlined"
        value={text}
        onChangeText={(event) => setText(event)}
      />
      <StyledButton
        disabled={text === ""}
        mode="contained"
        onPress={handleSubmit}
      >
        Submit
      </StyledButton>
    </AddDeckContainer>
  );
};

export default NewDeck;

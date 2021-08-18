import React, { Component } from "react";
import { Button, Card, Title, Text } from "react-native-paper";
import { View } from "react-native";
import {
  setLocalNotification,
  clearLocalNotification,
} from "../utils/notifications";
import styled from "styled-components/native";
import { red } from "../utils/colors";
import { green } from "../utils/colors";

//Styled components
const QuizContainer = styled.View`
  flex: 1;
  padding: 16px;
`;

const QuizCard = styled(Card)`
  margin-top: 16px;

  border-radius: 10px;
`;

const Content = styled(Card.Content)`
  padding: 16px;
`;

const StyledButton = styled(Button)`
  margin-top: 16px;
`;

class Quiz extends Component {
  state = {
    score: 0,
    currentCard: 0,
    isAnswer: false,
  };

  handleSubmitAnswer = (answer) => {
    if (answer === "correct") {
      this.setState((prevState) => ({
        ...prevState,
        currentCard: this.state.currentCard + 1,
        score: this.state.score + 1,
        isAnswer: false,
      }));
    } else {
      this.setState((prevState) => ({
        ...prevState,
        currentCard: this.state.currentCard + 1,
        isAnswer: false,
      }));
    }
    clearLocalNotification().then(setLocalNotification);
  };

  // method for restarting the Quiz:
  start = () => {
    this.setState((prevState) => ({
      ...prevState,
      currentCard: 0,
      score: 0,
      isAnswer: false,
    }));
  };

  // switch between question
  handleCardSwitch = (event) => {
    this.setState({ isAnswer: event });
  };

  render() {
    // get the deck from route params:
    const { deck } = this.props.route.params;

    // get the lenght of all decks:
    const allDecks = deck.questions.length;

    const { currentCard, score, isAnswer } = this.state;

    return (
      <QuizContainer>
        {currentCard === allDecks ? (
          <QuizCard>
            <Content>
              <Title>Your Score</Title>
              <Text>{`${
                (score / allDecks) * 100
              }% of your answers were correct.`}</Text>
              <Content>
                <Button onPress={this.start}>Restart Quiz</Button>
              </Content>
            </Content>
          </QuizCard>
        ) : (
          <QuizCard>
            <Content>
              {isAnswer === false ? (
                <View>
                  <Title variant="caption">
                    {deck.questions[currentCard].question}
                  </Title>
                  <Button onPress={() => this.handleCardSwitch(true)}>
                    Answer
                  </Button>
                </View>
              ) : (
                <View>
                  <Title variant="caption">
                    {deck.questions[currentCard].answer}
                  </Title>
                  <Button onPress={() => this.handleCardSwitch(false)}>
                    Question
                  </Button>
                </View>
              )}
              <Button onPress={this.start}>Restart Quiz</Button>
              <StyledButton
                mode="contained"
                color={green}
                onPress={() => this.handleSubmitAnswer("correct")}
              >
                Correct
              </StyledButton>
              <StyledButton
                mode="contained"
                color={red}
                onPress={() => this.handleSubmitAnswer("incorrect")}
              >
                Incorrect
              </StyledButton>
            </Content>
          </QuizCard>
        )}
      </QuizContainer>
    );
  }
}

export default Quiz;

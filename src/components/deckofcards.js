import React, { Component } from "react";
import Error from "./Error";

class deckofcards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardData: [],
      error: false,
    };
  }

  componentDidMount() {
    this.getCard();
  }

  getCard() {
    const url = "http://deckofcardsapi.com/api/deck/drcv03zpwr9x/draw/?count=1";

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ cardData: data });
      })
      .catch((error) => {
        this.setState({
          error: true,
        });
      });

    if (this.state.cardData.remaining <= 10) {
      this.shuffleDeck();
    }
  }

  shuffleDeck() {
    const shuffleUrl =
      "http://deckofcardsapi.com/api/deck/drcv03zpwr9x/shuffle";
    fetch(shuffleUrl);
  }

  render() {
    if (!this.state.error && this.state.cardData.success) {
      return (
        <div>
          <h2>
            <img src={this.state.cardData.cards[0].image} alt="" />
          </h2>
          <button
            className="btn"
            onClick={() => {
              this.getCard();
            }}
          >
            New Card
          </button>
        </div>
      );
    } else {
      return <Error />;
    }
  }
}

export default deckofcards;

import React, { Component } from "react";
import Error from "./Error";

class dictionary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
      error: false,
      status: null,
    };
  }

  componentDidMount() {
    this.getWord();
  }

  getWord() {
    const url = "https://api.dictionaryapi.dev/api/v2/entries/en/hello";

    fetch(url)
      .then((response) => {
          console.log(response);
          this.setState({status: response.status})
        return response.json();
      })
      .then((data) => {
        this.setState({ words: data });
      })
      .catch((error) => {
        this.setState({
          error: true,
        });
      });
      console.log(this.state.words);
  }

  render() {
    if (!this.state.error && this.state.status !== null) {
      return (
        <div>
          <h2>
             {this.state.words[0].word}
          </h2>
          <button
            className="btn"
            onClick={() => {
              this.getWord();
            }}
          >
            New Word
          </button>
        </div>
      );
    } else {
      return <Error />;
    }
  }
}

export default dictionary;

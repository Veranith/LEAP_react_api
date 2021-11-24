import React, { Component } from "react";
import Error from "./Error";

class uselessFacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      facts: [],
      error: false,
    };
  }

  componentDidMount() {
    this.getFact();
  }

  getFact() {
    const url = "https://uselessfacts.jsph.pl/random.json?language=en";

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ facts: data });
      })
      .catch((error) => {
        this.setState({
          error: true,
        });
      });
  }

  render() {
    if (!this.state.error) {
      return (
        <div>
          <h1>
            <a href={this.state.facts.source_url}> {this.state.facts.text} </a>
          </h1>
          <button
            onClick={() => {
              this.getFact();
            }}
          >
            NewFact
          </button>
        </div>
      );
    } else {
      return <Error />;
    }
  }
}

export default uselessFacts;

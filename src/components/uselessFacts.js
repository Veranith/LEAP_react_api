import React, { Component } from "react";

class uselessFacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      facts: [],
    };
  }

  componentDidMount() {
    const url = "https://uselessfacts.jsph.pl/random.json?language=en";

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ facts: data });
      });
  }

  render() {
    return (
      <div>
        <h1>{this.state.facts.text}</h1>
      </div>
    );
  }
}

export default uselessFacts;

import React, { Component } from "react";
import Error from "./Error";

class chucknorris extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: [],
      error: false,
    };
  }

  componentDidMount() {
    this.getJoke();
  }

  getJoke() {
    const url = "https://api.chucknorris.io/jokes/random";

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ jokes: data });
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
          <h2>
            <a href={this.state.jokes.url}> {this.state.jokes.value} </a>
          </h2>
          <button
            className="btn"
            onClick={() => {
              this.getJoke();
            }}
          >
            New Joke
          </button>
        </div>
      );
    } else {
      return <Error />;
    }
  }
}

export default chucknorris;

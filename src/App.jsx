import React, { Component } from "react";
import "./App.css";
import Profile from "./components/Profile";

class App extends Component {
  constructor() {
    super();
    this.state = {
      person: {
        fullName: "Olatunbosun Victor Joshua",
        bio: "Software developer from Abuja.",
        imgSrc: "src/assets/Joshua.jpg",
        profession: "Software Developer",
      },
      shows: false,
      timeSinceMount: 0,
    };
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMount: prevState.timeSinceMount + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { person, shows, timeSinceMount } = this.state;

    return (
      <div className="App" style={{ padding: "20px" }}>
        <h1>Joshua's profile</h1>
        <button onClick={this.toggleShow}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>

        <Profile person={person} shows={shows} />

        <p style={{ marginTop: "20px" }}>
          Time since last component mounted: <strong>{timeSinceMount}</strong>{" "}
          seconds
        </p>
      </div>
    );
  }
}

export default App;

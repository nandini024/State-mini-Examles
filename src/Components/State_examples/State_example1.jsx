import React, { Component } from "react";

export default class State_example1 extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increament = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  Decreament = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div style={styles.container}>
        <h1 style={styles.heading}>Counter App </h1>
        <h2 style={styles.counterText}>Count: {this.state.count}</h2>

        <div style={styles.buttonContainer}>
          <button style={styles.button} onClick={this.increament}>
            Increase
          </button>
          <button
            style={styles.button}
            onClick={this.Decreament}
            disabled={this.state.count === 0}
          >
            Decrease
          </button>
          <button
            style={{ ...styles.button, backgroundColor: "#e74c3c" }}
            onClick={() => this.setState({ count: 0 })}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "60px",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "2.5rem",
    color: "#2c3e50",
    marginBottom: "20px",
  },
  counterText: {
    fontSize: "1.8rem",
    margin: "20px 0",
    color: "#34495e",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#3498db",
    color: "white",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

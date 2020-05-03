import React from "react";
import rollers from "../utils/diceRollers";

class App extends React.Component {
  state = {
    numD4: "",
    numD6: "",
    numD8: "",
    numD10: "",
    numD12: "",
    numD20: "",
    numD100: "",
    numDCustom: "",
    customNumSides: "",
    resultD4: 0,
    resultD6: 0,
    resultD8: 0,
    resultD10: 0,
    resultD12: 0,
    resultD20: 0,
    resultD100: 0,
    resultDCustom: 0,
    resultTotal: 0,
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  rollDice = () => {
    let total = 0,
      resultD4 = 0,
      resultD6 = 0,
      resultD8 = 0,
      resultD10 = 0,
      resultD12 = 0,
      resultD20 = 0,
      resultD100 = 0,
      resultDCustom = 0;

    const {
      numD4,
      numD6,
      numD8,
      numD10,
      numD12,
      numD20,
      numD100,
      numDCustom,
      customNumSides,
    } = this.state;

    const maxRolls = Math.max(
      parseInt(numD4 ? numD4 : 0),
      parseInt(numD6 ? numD6 : 0),
      parseInt(numD8 ? numD8 : 0),
      parseInt(numD10 ? numD10 : 0),
      parseInt(numD12 ? numD12 : 0),
      parseInt(numD20 ? numD20 : 0),
      parseInt(numD100 ? numD100 : 0),
      parseInt(numDCustom ? numDCustom : 0)
    );

    for (let i = 0; i < maxRolls; i++) {
      if (i < numD4) {
        const dieResult = rollers.rollD4();
        total += dieResult;
        resultD4 += dieResult;
      }
      if (i < numD6) {
        const dieResult = rollers.rollD6();
        total += dieResult;
        resultD6 += dieResult;
      }
      if (i < numD8) {
        const dieResult = rollers.rollD8();
        total += dieResult;
        resultD8 += dieResult;
      }
      if (i < numD10) {
        const dieResult = rollers.rollD10();
        total += dieResult;
        resultD10 += dieResult;
      }
      if (i < numD12) {
        const dieResult = rollers.rollD12();
        total += dieResult;
        resultD12 += dieResult;
      }
      if (i < numD20) {
        const dieResult = rollers.rollD20();
        total += dieResult;
        resultD20 += dieResult;
      }
      if (i < numD100) {
        const dieResult = rollers.rollD100();
        total += dieResult;
        resultD100 += dieResult;
      }
      if (i < numDCustom) {
        const dieResult = rollers.rollNSidedDie(
          parseInt(customNumSides ? customNumSides : 1)
        );
        total += dieResult;
        resultDCustom += dieResult;
      }
    }

    this.setState({
      resultD4,
      resultD6,
      resultD8,
      resultD10,
      resultD12,
      resultD20,
      resultD100,
      resultDCustom,
      resultTotal: total,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Specify your roll</h1>
        <div>
          <label htmlFor="d4">D4:</label>
          <input
            type="number"
            id="d4"
            name="numD4"
            onChange={this.onChange}
            value={this.state.numD4}
          />
          <p>{this.state.resultD4}</p>
        </div>
        <div>
          <label htmlFor="d6">D6:</label>
          <input
            type="number"
            id="d6"
            name="numD6"
            onChange={this.onChange}
            value={this.state.numD6}
          />
          <p>{this.state.resultD6}</p>
        </div>
        <div>
          <label htmlFor="d8">D8:</label>
          <input
            type="number"
            id="d8"
            name="numD8"
            onChange={this.onChange}
            value={this.state.numD8}
          />
          <p>{this.state.resultD8}</p>
        </div>
        <div>
          <label htmlFor="d10">D10:</label>
          <input
            type="number"
            id="d10"
            name="numD10"
            onChange={this.onChange}
            value={this.state.numD10}
          />
          <p>{this.state.resultD10}</p>
        </div>
        <div>
          <label htmlFor="d12">D12:</label>
          <input
            type="number"
            id="d12"
            name="numD12"
            onChange={this.onChange}
            value={this.state.numD12}
          />
          <p>{this.state.resultD12}</p>
        </div>
        <div>
          <label htmlFor="d20">D20:</label>
          <input
            type="number"
            id="d20"
            name="numD20"
            onChange={this.onChange}
            value={this.state.numD20}
          />
          <p>{this.state.resultD20}</p>
        </div>
        <div>
          <label htmlFor="d100">D100:</label>
          <input
            type="number"
            id="d100"
            name="numD100"
            onChange={this.onChange}
            value={this.state.numD100}
          />
          <p>{this.state.resultD100}</p>
        </div>
        <div>
          <label htmlFor="numCustom">Number of Custom Dice:</label>
          <input
            type="number"
            id="numDCustom"
            name="numDCustom"
            onChange={this.onChange}
            value={this.state.numDCustom}
          />
          <label htmlFor="customSides">Number of Sides on Custom Dice: </label>
          <input
            type="number"
            id="customNumSides"
            name="customNumSides"
            onChange={this.onChange}
            value={this.state.customNumSides}
          />
          <p>{this.state.resultDCustom}</p>
        </div>
        <button onClick={this.rollDice}>Roll Em!</button>
        <h1>{this.state.resultTotal}</h1>
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';

import Header from './components/header/header';
import birdData from './data/bird-data';
import BirdList from './components/bird-list/bird-list';
import Button from './components/button/button';

class App extends React.Component {
  categories = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'];
  state = {
    category: 0,
    rightBird: null,
    birdArray: birdData[0]
  }

  componentDidMount() {
    const randomBird = this.getRandomBird();
    this.setState({
      rightBird: randomBird,
      isStepEnded: false
    })
  }

  getRandomBird() {
    return Math.floor(Math.random() * 6);
  }

  onBirdSelected = (index) => {
    if (!this.state.isStepEnded) {
      const modifiedBirdList = this.state.birdArray.map((el, i) => {
        if (i === index && index === this.state.rightBird) {
          el.checked = 'right';
          this.setState({
            isStepEnded: true
          })
        } else if (i === index && index !== this.state.rightBird && !el.checked) {
          el.checked = 'wrong';
        }
        return el;
      });
      this.setState({
        birdArray: modifiedBirdList,
      })
    }
  }

  onBtnClick = () => {
    if (this.state.isStepEnded) {
      const nextStep = this.state.category + 1;
      this.setState((state) => ({
        category: nextStep,
        isStepEnded: false,
        birdArray: birdData[nextStep]
      }))
    }
  }

  render() {
    const { category } = this.state;
    return (
      <div>
        <Header activeHeader={this.categories[category]} names={this.categories} />
        <BirdList names={this.state.birdArray} onBirdSelected={this.onBirdSelected} />
        <Button text="Следующая категория" onBtnClick={this.onBtnClick} isStepEnded={this.state.isStepEnded} />
      </div>
    )
  }
}

export default App;

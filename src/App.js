import React from 'react';
import './App.css';

import Header from './components/header/header';
import birdData from './data/bird-data';
import BirdList from './components/bird-list/bird-list';

class App extends React.Component {
  categories = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'];
  state = {
    category: 0,
    rightBird: null,
    birdArray: null
  }

  componentDidMount() {
    const randomBird = this.getRandomBird();
    const birdArray = birdData[0];
    this.setState({
      rightBird: randomBird,
      birdArray,
    })
  }

  getRandomBird() {
    return Math.floor(Math.random() * 6);
  }

  onBirdSelected = (index) => {
    const modifiedBirdList = this.state.birdArray.map((el, i) => {
      if (i === index && index === this.state.rightBird) {
        el.checked = 'right'
      } else if (i === index && index !== this.state.rightBird) {
        el.checked = 'wrong'
      }
      return el;
    });
    this.setState({
      birdArray: modifiedBirdList
    })
  }

  render() {
    const { category } = this.state;
    console.log(this.state)
    return (
      <div>
        <Header activeHeader={this.categories[category]} names={this.categories} />
        <BirdList names={birdData[category]} onBirdSelected={this.onBirdSelected} />
      </div>
    )
  }
}

export default App;

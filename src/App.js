import React, { createRef } from 'react';
import './App.css';

import Header from './components/header/header';
import birdData from './data/bird-data';
import ItemList from './components/item-list/item-list';
import Button from './components/button/button';
import ItemInfo from './components/item-info/item-info';
import CurrentItemInfo from './components/current-item-info/current-item-info';
import Nav from './components/nav/nav';
import FinalScreen from './components/final-screen/final-screen';

import blankImage from './assets/index.jpg';
import successAudio from './assets/Smiling Face With Heart-Shaped Eyes.wav';
import failAudio from './assets/Disappointed Face.wav';

class App extends React.Component {
  categories = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'];
  itemData = birdData;
  audioRef = createRef();

  state = {
    category: 0,
    rightItem: this.getRandomItem(),
    itemArray: this.itemData[0],
    isStepEnded: false,
    stepScore: 5,
    gameScore: 0,
    selectedItem: null
  }

  getRandomItem() {
    return Math.floor(Math.random() * this.itemData.length);
  }

  onItemSelected = (index) => {
    const { itemArray, rightItem, isStepEnded, stepScore, selectedItem } = this.state;

    if (selectedItem !== itemArray[index]) {
      this.setState({
        selectedItem: itemArray[index]
      });
    }

    if (!isStepEnded && !itemArray[index].checked) {
      let isStepEnded = false;
      let curentStepScore = stepScore;
      const cloned = JSON.parse(JSON.stringify(itemArray));
      const modifieditemList = cloned.map((el, i) => {
        if (i === index && index === rightItem) {
          el.checked = 'right';
          new Audio(successAudio).play();
          isStepEnded = true;
          this.audioRef.current.audio.current.pause();
        } else if (i === index && index !== rightItem) {
          el.checked = 'wrong';
          new Audio(failAudio).play();
          curentStepScore--;
        }
        return el;
      });
      this.setState({
        itemArray: modifieditemList,
        isStepEnded: isStepEnded,
        stepScore: curentStepScore,
      })
    }
  }

  onBtnClick = () => {
    if (this.state.isStepEnded && this.state.category < 6) {
      const isFinal = this.state.category === 5 ? true : false;
      const nextStep = this.state.category + 1;
      this.setState((state) => ({
        category: nextStep,
        isStepEnded: isFinal,
        itemArray: this.itemData[nextStep],
        rightItem: this.getRandomItem(),
        gameScore: state.stepScore + state.gameScore,
        stepScore: 5,
        selectedItem: null
      }))
    } else if (this.state.category > 5) {
      this.setState((state) => ({
        category: 0,
        isStepEnded: false,
        itemArray: birdData[0],
        rightItem: this.getRandomItem(),
        gameScore: 0,
        stepScore: 5,
        selectedItem: null
      }))
    }
  }

  render() {
    let gameContent, btnText;
    if (this.state.category < 6) {
      const { category, gameScore, rightItem, selectedItem, isStepEnded, itemArray } = this.state;
      console.log('Правильный ответ: ', itemArray[rightItem].name);
      const currentItemInfo = isStepEnded ? itemArray[rightItem] : { name: "*****", image: blankImage, audio: itemArray[rightItem].audio };
      const itemInfo = selectedItem ? <ItemInfo {...selectedItem} /> : <div className="blankText"> Прослушайте аудио и выберите соответствующую ему птичку</div>;

      btnText = "Следующая категория";
      gameContent = (
        <React.Fragment>
          <Nav activeNav={this.categories[category]} names={this.categories} score={gameScore} />
          <CurrentItemInfo rightItem={currentItemInfo} audioRef={this.audioRef} />
          <div className="item-container">
            <ItemList names={itemArray} onItemSelected={this.onItemSelected} />
            <div className="item-info col-md-6">
              {itemInfo}
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      btnText = "Попробовать снова";
    }
    return (
      <div className="container">
        <Header score={this.state.gameScore} />
        {this.state.category < 6 ? gameContent : <FinalScreen score={this.state.gameScore} />}
        <Button text={btnText} onBtnClick={this.onBtnClick} isStepEnded={this.state.isStepEnded} />
      </div>
    )
  }
}

export default App;
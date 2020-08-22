import React from 'react';
import './App.css';

import Header from './components/header/header';
import birdData from './data/bird-data';
import ItemList from './components/item-list/item-list';
import Button from './components/button/button';
import ItemInfo from './components/item-info/item-info';

class App extends React.Component {
  categories = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'];
  itemData = birdData;
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
    const { itemArray, rightItem, isStepEnded, stepScore } = this.state;
    this.setState({
      selectedItem: itemArray[index]
    });
    if (!isStepEnded && !itemArray[index].checked) {
      let isStepEnded = false;
      let curentStepScore = stepScore;
      const modifieditemList = itemArray.map((el, i) => {
        if (i === index && index === rightItem) {
          el.checked = 'right';
          isStepEnded = true;
        } else if (i === index && index !== rightItem) {
          el.checked = 'wrong';
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
    if (this.state.isStepEnded) {
      const nextStep = this.state.category + 1;
      this.setState((state) => ({
        category: nextStep,
        isStepEnded: false,
        itemArray: this.itemData[nextStep],
        rightItem: this.getRandomItem(),
        gameScore: state.stepScore + state.gameScore,
        stepScore: 5,
        selectedItem: null
      }))
    }
  }

  render() {
    const { category, gameScore, rightItem, selectedItem } = this.state;
    console.log('Right item is: ', rightItem);
    const itemInfo = selectedItem ? <ItemInfo {...selectedItem} /> : <div> Выберите птичку</div>;
    return (
      <div>
        <Header activeHeader={this.categories[category]} names={this.categories} score={gameScore} />
        <ItemList names={this.state.itemArray} onItemSelected={this.onItemSelected} />
        <Button text="Следующая категория" onBtnClick={this.onBtnClick} isStepEnded={this.state.isStepEnded} />
        {itemInfo}
      </div>
    )
  }
}

export default App;

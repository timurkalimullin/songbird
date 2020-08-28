import React from 'react';

import './final-screen.scss';
import winImage from '../../assets/5555_small.png';

const FinalScreen = (props) => {
  const { score } = props;
  const message = `Поздравляю, вы набрали ${score} очков из 30, возможно, стоит попробовать еще раз и набрать максимум очков.`;
  const absoluteWinMessage = (
    <React.Fragment>
      <h2>Невероятно! <br /> Вы набрали максимум очков, ваше птичье чутье на высоте! <br /> Ловите призовую картинку и так держать!</h2>
      <div className="image-wrapper">
        <img src={winImage} alt="prize img"></img>
      </div>
    </React.Fragment>
  );
  return (
    <div className="final-screen">
      {score < 30 ? message : absoluteWinMessage}
    </div>
  )
};

export default FinalScreen;
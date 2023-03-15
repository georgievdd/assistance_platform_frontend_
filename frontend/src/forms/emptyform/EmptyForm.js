import React from 'react'

const style = {
  fontSize: "70px",
  textAlign: "center",
  color: "white",
}

const getText = id => {
  switch (id) {
    case 0: return "Вы пока не создали ни одной заявки";
    case 1: return "У вас пока нет заданий";
    case 2: return "У вас пока нет уведомлений";
    case 3: return "На задание еще никто не откликнулся";
  }
}

const EmptyForm = props => 
    <div style={{...props.style, ...style}}>{getText(props.id)}</div>

export default EmptyForm;
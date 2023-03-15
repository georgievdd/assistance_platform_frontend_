import gray_circle from '../../res/img/gray_circle.svg';


const CircleN = props =>
  <div>
    <img 
      style={{...props.style}}
      src={gray_circle}
    />
  </div>

export default CircleN;
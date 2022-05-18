import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div >
         
        <Slider {...settings}>
          <div>
            <img src="https://www.acate.com.br/wp-content/uploads/2020/01/python.png" width={"90%"} alt="curso python" />
          </div>
          <div>
          <img src="https://tm.ibxk.com.br/2021/10/23/23203456351007.jpg?ims=1120x420" width={"90%"} alt="curso react" />
          </div>
          <div>
          <img src="https://arquivo.devmedia.com.br/cursos/imagem/curso_o-que-e-react_2127.png" width={"90%"} alt="curso react" />
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
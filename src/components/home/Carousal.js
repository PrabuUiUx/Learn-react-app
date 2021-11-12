import React, { Component } from 'react';

import Carousel from 'react-elastic-carousel';
import img1 from '../../images/img1.jpg';
import img2 from '../../images/img2.png';
import img3 from '../../images/img3.jpeg';
import img4 from '../../images/img4.jpg';
import img5 from '../../images/img5.jpg';

export default class Carousal extends Component {
    state = {
        items: [
          {id: 1, img: <img src={img1} alt="img1"  className="cstyle"/>},
          {id: 2, img: <img src={img2} alt="img2"  className="cstyle"/>},
          {id: 3, img: <img src={img3} alt="img3"  className="cstyle"/>},
          {id: 4, img: <img src={img4} alt="img4"  className="cstyle"/>},
          {id: 5, img: <img src={img5} alt="img5"  className="cstyle"/>}
        ]
      }
    render() {
        const{items} =this.state;
        return (
            <>
                <Carousel>
                {items.map(item => <div key={item.id}>{item.img}</div>)}
                </Carousel>
            </>
        )
    }
}

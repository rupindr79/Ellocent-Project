import React from 'react';
import 'antd/dist/antd.css';
import './style.scss';

import Texts from '../texts/Texts';
import { Card } from 'antd';
import { Carousel } from 'antd';



const { Meta } = Card;
const App = (props) => (
  <>
    <div className="testimonials container">
      <Texts
        sub="WHAT OUR CLIENTS SAYS"
        main="Trusted By Our Esteemed Clients"
      />

      <div className="desktop">
        <Carousel autoplay={true} dots={false} slidesToShow={3} centerMode={true} draggable swipeToSlide>
          {props.testimonials.map((item, index) => (
            <div key={index} className="testbox">
              <Card
                bordered={false}
                cover={<img src={item.src} alt={item.alt} />}
              >
                <h5>{item.name}</h5>
                <p>{item.info}</p>
                <Meta description={item.review} />
              </Card>
            </div>
          ))}
        </Carousel>
      </div>

      {/* For Mobile  */}

      <div className="mobile">
        <Carousel autoplay={true} dots={false} slidesToShow={1}>
          {props.testimonials.map((item, index) => (
            <div key={index} className="testbox">
              <Card
                bordered={false}
                cover={<img src={item.src} alt={item.alt} />}
              >
                <h5>{item.name}</h5>
                <p>{item.info}</p>
                <Meta description={item.review} />
              </Card>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  </>
);

export default App;
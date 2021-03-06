import React from 'react';

// import React, { useState, useEffect } from "react";
// import axios from "axios";
import 'antd/dist/antd.css';
import './style.scss';
import { Row, Col } from 'antd';
import { CommentOutlined } from '@ant-design/icons';
import Texts from '../texts/Texts';
import DefaultButton from "../../../components/buttons/DefaultButton";
import PrimaryButton from "../../../components/buttons/PrimaryButton";

// import blog from "../../Data/blog.json";


const App = (props) => {

  return (
    <>
      <div className="featured-blog container">
        <Texts sub="Featured Blog" main="Stay In The Loop Of Tech World" />

        <div className="blog-bg">
          <Row gutter={24}>
            {props.blog.map((index, key) => (
              <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                <div key={key} className="blog-box">
                  <img src={index.src} alt={index.alt} />
                  <div className="blog-text">
                    <p>
                      <CommentOutlined style={{ color: "#2874ba" }} />{" "}
                      {index.comment}
                    </p>
                    <h4>{index.title}</h4>

                    <div className="blog-btn">
                      {" "}
                      <DefaultButton type="link" defaultBtn="Read More" />{" "}
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        <div style={{ margin: "15px auto", display: "table" }}>
          <PrimaryButton type="link" primaryBtn="View All" />
        </div>
      </div>
    </>
  );};

export default App;
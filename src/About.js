import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

import affLinks from './links';
import familyphoto from './images/familyphoto.jpg';

class About extends React.Component {
  state = {}
  
  render() {
    let filteredItems = affLinks;
    if (this.props.currentCategory !== 'all') {
      filteredItems = affLinks.filter((item) => item.tags.includes(this.props.currentCategory));
    } 
    console.log(filteredItems);
    return (
      <React.Fragment>
        <Row center="xs">
          <Col xs={8}>
            <img alt="family in yard" style={{ height: 'auto', width: '100%', margin: '20px 0' }} src={familyphoto}></img>
          </Col>
        </Row>
        <Row center="xs">
          <Col xs={8} style={{ textAlign: 'left' }}>
            <div style={{ marginBottom: '40px'}}>
              <h3 style={{ marginBottom: '8px' }}>Our Family</h3>
              <p style={{ marginTop: '8px' }}> Hi!! I'm Kayla, I'm the mom.  I love being a mom, Christmas season, planning, organizing, swimming, and exploring new hobbies like crafting and playing the ukelele!  I met my husband, Benjy, in college in 2009.  He likes video games, cooking, and he made/helped me make this website!  We got married in 2016 and in 2018, our daughter Noelle was born!  Noelle is the light of our lives and such a happy little girl.  She just turned 2 in November and is truly a comedian.  You should check out our <a href="https://www.tiktok.com/@nokaylashere?lang=en">tiktok account</a>. </p>
            </div>
          </Col>
        </Row>
        <Row center="xs">
          <Col xs={8} style={{ textAlign: 'left' }}>
            <div style={{ marginBottom: '40px' }}>
              <h3 style={{ marginBottom: '8px' }}>Motherhood</h3>
              <p style={{ marginTop: '8px' }}>I've wanted to be a mom since I was a child.  I couldn't wait to raise good people.  Noelle changed my life in a way I can't describe and I am beyond grateful she calls me mom.  I am far from a perfect mom but I try to get better every day and I am always looking for new things to learn.  Some of the things I value as a mom are safety, fun, love, kindness, posivitiy, dancing, being silly, and independence.  I am so excited to watch Noelle grow and I want to make sure that I always give her the tools she needs to flourish and let her be her own person.</p>
            </div>
            <div style={{ marginBottom: '40px' }}>
              <h3 style={{ marginBottom: '8px' }}>This Website</h3>
              <p style={{ marginTop: '8px' }}> I get pretty stressed out trying to find the perfect Christmas gifts for my family every year.  I over think things and wonder if what I'm looking at is even any good.  That coupled with the fact that I tend to do a lot of research before I purchase something, made me decide to make this website.  I thought, I spend so much time picking gifts, I should share my finds with others.  I just want to make your life a little bit easier.  Plus I love Christmas season and Christmas gifts are so fun, even though stressful!  </p>
              
            </div>
            <div style={{ marginBottom: '40px' }}>
              <h3 style={{ marginBottom: '8px' }}>Submit Your Favorite Gift Ideas</h3>
              <p style={{ marginTop: '8px' }}>If you'd like to submit a gift idea, send an email to nokaylasherebusiness@gmail.com with a link to the item, a description of why you like it, who it would be a good gift for, and your name to be featured with the item if we are able to post it!   </p>
              
            </div>
          </Col>
        </Row>
        <Row center="xs">
          <Col xs={8}>
            <div style={{ marginBottom: '40px' }}>
              <h3 style={{ marginBottom: '8px' }}>Contact Us</h3>
              <p style={{ marginTop: '8px' }}>For business inquiries or questions please email me at <a href="mailto:nokaylasherebusiness@gmail.com">nokaylasherebusiness@gmail.com</a> </p>
              <p style={{ paddingTop: '20px' }}> Thank you so much for visiting our page, we really apprecite every single page visit.  We hope you have a really great day!</p>
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );  
  }
}

export default About;
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
            <img alt="family in yard" style={{ height: 'auto', width: '100%' }} src={familyphoto}></img>
          </Col>
        </Row>
        <Row center="xs">
          <Col xs={8} style={{ textAlign: 'left' }}>
            <div style={{ marginBottom: '40px'}}>
              <h3 style={{ marginBottom: '8px' }}>Our Family</h3>
              <p style={{ marginTop: '8px' }}><span class="bold">Kayla</span> - Hi!! I'm Kayla, I'm the mom.  This is my site so pretty much anything you see written here will be by me.  I love being a mom, Christmas season, planning, organizing, swimming, and exploring new hobbies like crafting and playing the ukelele!</p>
              <p><span class="bold">Benjy</span> - My husband and Noelle's dad.  We met at Rutgers University in 2009 and have been married since 2016. He helped me/taught me how to make this site.  He's a phenomenal dad! He likes to cook, make video games, and try new beers with friends. </p >
              <p><span class="bold">Noelle</span> - My daughter and the star of most of my tiktoks! Noelle was born in November of 2018 and she has brightened our lives! She was practically born smiling and is practically always happy.  She's been friendly from birth and always makes people laugh.  Her current favorites are her dolls, puzzles, and animals. </p>        
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
              <p style={{ marginTop: '8px' }}>I am by no means a perfect mom or wife.  I tend to do a lot of research before I purchase something for my family.  I like to get opinions from others as well because sometimes you don't think of all the possible pros and cons an item could have.  I put this site together for three main reasons.  #1 so I could share products that work for my family with others so maybe you don't have to start at square one like I did. #2 so I could learn how to make a website (my husband is a web developer and taught me how to do this! Isn't that neat? He did all the hard parts but I'm still excited!)  and #3 I've always wanted to try affiliate marketing and so far I'm having a lot of fun!  </p>
              <p> Thank you so much for visiting our page, we really apprecite every single page visit.  We hope you have a really great day. :D </p>
            </div>
          </Col>
        </Row>
        <Row center="xs">
          <div style={{ marginBottom: '40px' }}>
            <h3 style={{ marginBottom: '8px' }}>Contact Us</h3>
            <p style={{ marginTop: '8px' }}>For business inquiries or questions please email me at <a href="mailto:nokaylasherebusiness@gmail.com">nokaylasherebusiness@gmail.com</a> </p>
          </div>
        </Row>
        <Row center="xs">
          <div class="legal">As an Amazon affiliate I may earn from qualifying purchases.</div>
        </Row>
      </React.Fragment>
    );  
  }
}

export default About;
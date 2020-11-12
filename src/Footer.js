import { React } from 'react';
import tikTok from './tik-tok.png'

function Footer() {
  return (
    <footer className="social-footer">
      <div className="center">
        <a style={{ marginRight: '30px'}} href="https://www.tiktok.com/@nokaylashere">
          <img alt="Social icon" style={{ height: 'auto', width: '44px'}} src={tikTok}></img>
        </a>
        {/* <a class="right-margin30" href="https://www.instagram.com/kaylah201/"><img alt="Social icon" style={{ height: 'auto', width: '44px'}} src="Instagram_AppIcon_Aug2017.png"></img></a> */}
        {/* <a href="https://www.youtube.com/channel/UCWPTmmPN7yn6WSlw-CGyaMQ"><img alt="Social icon" style={{ height: 'auto', width: '44px'}} src="youtube_social_squircle_white.png"></img></a> */}
      </div>
    </footer>
  );
}

export default Footer;
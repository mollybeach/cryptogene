<template>
    <footer id="footer">
            <div id="footer-utility">
                <div class="footer__chat imgborderround">
                    <ul class="footer__ul"><h3 class="footer__left">Chromagene</h3>
                        <li class="footer__li"><a class="footer__a" href="/#">Privacy Policy</a></li>
                        <li class="footer__li"><a class="footer__a" href="/#">Terms and Conditions</a></li>
                        <li class="footer__li"> <img class="footer__chat-img-icon footer__li" width="18" alt="footer"  height="14" src="https://res.cloudinary.com/cloudinary-account/image/upload/v1469462241/msg_jn0whe.svg" href="#" />Chat</li>
                        <li class="footer__li"> <img class="footer__chat-img-icon footer__li" width="15"   alt="footer" height="15" src="https://res.cloudinary.com/cloudinary-account/image/upload/v1469462243/phone_zfj4ey.svg" href="#" />1-206-561-8223</li>
                    </ul>
                </div>
                <div class="footer__partition"></div>
                <div class="footer__about">
                    <ul class="footer__ul">
                        <h3 class="footer__left">Molly Beach</h3>
                        <li class="footer__li"><a class="footer__a" href="/#">chromagene@gmail.com</a></li>
                        <li class="footer__li"><a class="footer__a" href="/#">© 2021, Chromagene</a></li>
                    </ul>
                </div>
                <div class="footer__partition"></div>
                <div class="footer__card">
                    <ul class="footer__ul">
                        <h3 class="footer__left">ABOUT US</h3>
                        <li class="footer__li"><a class="footer__a" href="/#">Privacy Policy</a></li>
                        <li class="footer__li"><a class="footer__a" href="/#">Terms and Conditions</a></li>
                    </ul>
                </div>
            </div>
            <a  href="/" class="footer__a" ><img class='footer__logo' src="https://res.cloudinary.com/chromagene/image/upload/v1628703086/dna/company_k746rb.svg" alt="" /></a>
            <div id="footer-newsletter-social">
                <div id="footer-newsletter">
                    <h3 class="footer__center">Discover more with Chromagene</h3>
                    <div class='footer__enter'>
                        <input type="text" placeholder="Enter email address" class="getemailform"/>
                        <input class="enteremailbutton" type="submit" value="Sign Up" />
                    </div>
                </div>
                <div id="footer-social">
                    <a class="footer__a" href="https://www.facebook.com/" target="_blank" rel="noreferrer"> <img width="34" height="34" src="https://res.cloudinary.com/chromagene/image/upload/v1628704820/dna/facebook_gtzwdj.svg" alt="facebook" /></a>
                    <a class="footer__a" href="https://twitter.com/chromagene" target="_blank" rel="noreferrer"> <img width="34" height="34" src="https://res.cloudinary.com/chromagene/image/upload/v1628704801/dna/twitter_jfyf8d.svg" alt="twitter" /></a> 
                    <a class="footer__a" href="https://github.com/mollybeach/chromagene" target="_blank" rel="noreferrer"> <img width="34" height="34" src="https://res.cloudinary.com/chromagene/image/upload/v1628713456/dna/github_cswvy4.png" alt="pintrest" /></a > 
                    <a class="footer__a" href="https://www.instagram.com/" target="_blank" rel="noreferrer"> <img width="34" height="34" src="https://res.cloudinary.com/chromagene/image/upload/v1628704828/dna/instagram_bollab.svg" alt="instagram"/> </a>
                    <a class="footer__a" href="http://youtube.com/" target="_blank" rel="noreferrer"> <img width="34" height="34" src="https://res.cloudinary.com/chromagene/image/upload/v1628704814/dna/youtube_obyfsl.svg" alt="youtube" /></a>
                </div>
            </div>       
            <div class="footer__border"></div>
            <div id="footer-copyright">
                <div class="footer__law">
                <ul class="footer__ul">
                    <li class="footer__li footer__copy"> © 2021 Chromagene.</li>
                    <li class="footer__li footer__copy"> Privacy Policy | Terms + Conditions | Sitemap</li>
                    <li class=" footer__li footer__copy"> Washington | Transparency in Supply Chains Act</li>
                </ul>
                </div>
            </div>
            
    </footer>
</template>
<script></script>
<style>
  /* CHROMOGENE STYLES*/

  /* 1. noir- primary text color for header footer 5c667e/
  /* 2. mouse-  secondary text color for headers and body */
  /* 3. blanche- background of site*/
  /* 4. raspberrypi - primary style for website color header and footer and buttons*/
  /* 5. greenapple - secondary style color main body border */
  /* 6. mauve - tertiary stlye color form background header for calendar background for events*/
  /* 7. bleuclair - quaternary style color background for input boxes*/
  /* 8. neonmelon -calendar border color */
/*=====================================RESETS============================================*/

*, *:before, *:after {
    -webkit-box-sizing: border-box; 
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  :root{
    --noir: #525252;
    --mouse: #9B9B9B;
    --blanche: #FFFFFF;
    --raspberrypi: #E30B5D; 
    --greenapple: #6CC04A; 
    --mauve: #748194; 
    --bleuclair:  #EBEEF5;
    --neonmelon: #2AF598; 
    --cottoncandy:#FF69B4;
    --bluecyan : #2BC0E8;
    --periwinkle:#E6E6FA;
    --bumblebee:#FEE140;
    --lipgloss : #FA709A;
    --spadeblue:#08AEEA;
    --barbiepink: #EE74E1;
    --scenepurple: #B721FF;
    --popblue: #21D4FD;
    --watermelon:  #3EECAC;
  
  
    font-family: 'Roboto Slab', serif;
  
  
  }
  
  html {
  font-family: 'Roboto Slab', serif;
  background-color: var(--blanche);
  text-size-adjust: 100%;
  font-size: 1rem;
  -webkit-font-smoothing: auto !important;
  letter-spacing: 0.01em;
  line-height: 1.625;
  overflow-wrap: break-word;
  }
  
  body {
  margin: 0;
  text-align: center;
  }
  
  figure {
  margin: 0 0 5px 0;
  }
  
  a{
  text-decoration: none;
  }
  li{
  list-style: none;
  }
  .background-dna {
    background-color: none;
    background-image:  url('https://res.cloudinary.com/chromagene/image/upload/v1628704667/dna/fancydna_auf5v5.svg');
    background-size:180%;
    }
  /*=====================================HEADER NAV============================================*/
  
  .header {
  width: 100%;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
  border-radius: 20px;
  border: 25px solid var(--raspberrypi);
  
  }
  .header__img{
  
    height:auto;
    display:flex;
      flex-grow: 1;
    }
  a.header__logo {
    padding-top: 10px;
    display:flex;
    flex-grow: 1;
  }
  
  .header__nav {
    margin: 0px;
  
  }
  .header__links{
  padding-top: 3%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 60%;
  flex-grow: 0.5;
  height: 40px;
  color: var(--greenapple);
  }
  .header__link{
  height: 40px;
  border-radius: 10px;
  font-weight: bold;
  padding: 5px;
  color: var(--greenapple);
  }
  .header__link:hover{
  transition: 0.3s;
  color:var(--lipgloss);
  
  }
  .header__welcome{
  font-family: Snell Roundhand, cursive;
  font-size: 2.2rem;
  padding-left: 1rem;
  }
  
  .nav__sidenav {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  }
  
  ul.nav__sidenav.nav--right {
  justify-content: space-evenly;
  padding-left: 0;
  min-height: 250px;
  }
  
  .nav__sidenav a {
  margin: 0;
  text-decoration: none;
  text-align: center;
  
  display: block;
  /*padding: 1em; */
  /*flex*/
  flex-grow: 1;
  }
  .nav__sidenav a:hover {
    color:var(--lipgloss);
  opacity: .5;
  }
  
  /*=====================================END HEADER NAV============================================*/
  
  /*=====================================START MAIN============================================*/
  
  
  
  @media (min-width: 840px) {
  a#nav-bag {
    padding-right: 0;
  }
  }
  
  .main {
  
  flex-direction: row;
  flex-wrap: wrap;
  border-radius: 20px;
  border: 25px solid var(--neonmelon);
  padding:3%;
  margin-top:2%;
  margin-bottom:2%;
  
  }
  .mainsection {
    flex-direction: row;
    flex-wrap: wrap;
    border-radius: 20px;
    border: 25px solid var(--neonmelon);
    margin-top: 2%;
    margin-bottom: 2%;
    padding: 3%;
  
  }
  
  .hero__image {
    padding: 1%;
    margin-right: 5%;
    width: 90%;
    height: auto;
    border-radius: 25px;
  
  }
  .sector__maintitle {
    padding-top: 4%;
    font-family: 'Titillium Web', sans-serif;
    color: #13182c;
    font-size: 28px;
    line-height: 36px;
    color: var(--raspberrypi);
    margin-bottom: 5%;
    font-size: 40px;
  }
  .sector__subtitle {
    font-family: 'Titillium Web', sans-serif;
    color: var(--raspberrypi);
    padding-top: 1%;
    margin-bottom: 2%;
    font-size: 24px;    
    display: flex;
  }
  
  .sector__arrow {
    width: 1%;
    padding-top: 2%;
  }
  .featured {
  flex: 1 1 70%;
  }
  
  .home-side-col {
  flex: 1 1 30%;
  }
  .featured-column {
  display: flex;
  }
  
  .sidebar-list {
  display: flex;
  flex-direction: column;
  
  }
  
  /*=====================================END MAIN============================================*/
  /*=====================================FOOTER============================================*/
  /***********************DESKTOP *********************/
  
  @media all and (max-width: 999999999px) and (min-width: 1336px) {
    .container {
    width: 90%;
    max-width: 960px;
    margin: auto;
    font-family: 'Roboto Slab', serif;
    }
    #footer {
      width: 100%;
      margin: 0 auto;
      border-radius: 20px;
      border: 25px solid var(--raspberrypi);
      
    }
  
    h3.footer__left {
      color: var(--raspberrypi);
      font-size: 16px;
      font-family: 'Roboto Slab', serif;
      font-weight: bold;
      margin: 0 0 12px 0;
      text-align: left;
    }
  
    h3.footer__center {
      color: var(--noir);
      font-size: 16px;
      font-family: 'Roboto Slab', serif;
      font-weight: bold;
      margin: 0 0 12px 0;
      text-align: center;
    }
  
    .footer__ul {
      margin: 0;
      list-style-type: none;
      padding-inline-start: 0px;
    }
  
    .footer__li {
      margin: 0;
      color: var(--noir);
      font-size: 13px;
      font-weight: 324;
      line-height: 22px;
      list-style-type: none;
      text-align: left;
    }
  
    /********************UTLITY****************/
    #footer-utility {
      width: 85%;
      height: 150px;
      margin: 36px 0 0 auto;
      display: flex;
      justify-content: flex-end;
      text-align: center;
      padding-top: 7%;
    }
    .footer__partition {
      width: 1px;
      height: 100px;
      background: var(--mouse);
      margin: 0 32px 0 0;
      float: left;
    }
    /****************CHAT**************/
    .footer__chat {
      width: 32%;
      height: 100px;
      float: left;
      margin: 0;
    }
    .footer__chat-img-icon {
      float: left;
      margin: 0 4px 0 0;
    }
    /*************ABOUT *************/
    .footer__about {
      width: 32%;
      height: 100px;
      float: left;
      margin: 0;
    }
    .footer__card {
      width: 32%;
      height: 100px;
      float: left;
      margin: 0;
    }
    /************NEWSLETTER*************/
    #footer-newsletter-social {
      margin: 0 auto;
      text-align: center;
    }
  
  #footer-newsletter {
    width: 300px;
    margin: 0 0 0 10%;
    text-align: center;
    float: left;
    background-color: var(--blanche);
    border-radius: 20px;
    border: 25px solid var(--blanche);
  }
  .footer__law{
    padding-top: 5%;
  }
    p.footer__deals {
      font-size: 13px;
      font-family: 'Roboto Slab', serif;
      font-weight: 500;
      line-height: 0;
      text-align: center;
    }
    .getemailform {
      width: 60%;
      padding: 16px 20px;
      margin: 8px 0;
      box-sizing: border-box;
      border: 1px var(--mouse);
      background-color: var(--blanche);
      border-radius: 4px;
      font-size: 13px;
      font-family: 'Roboto Slab', serif;
      font-weight: 500;
      border: 2px solid var(--cottoncandy);
    }
    input[type=text]:focus{
      outline: 5px solid var(--cottoncandy); 
      border-radius: 10px;   
    }
    
  
  .enteremailbutton{
      background-color: var(--greenapple);
      border: 2px;
      border-radius: 4px;
      color: var(--blanche);
      padding: 16px 34px;
      text-decoration: none;
      margin: 4px 2px;
      cursor: pointer;
      font-size: 13px;
      font-family: 'Roboto Slab', serif;
      font-weight: 900;
    } 
    #footer-social {
      width: 50%;
      margin: 80px 0 0 0;
      float: right;
      display: flex;
      float: right;
      justify-content: space-evenly;
    }
    /************ COPY******RIGHT *******/
    .footer__border {
      width: 100%;
      height: 2px;
      background: var(--mauve);
      margin: 250px 0 0 0;
    }
    #footer-copyright {
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      margin-top: 32px;
    }
    .footer__copy {
      color: var(--mouse);
      font-size: 12px;
      font-family: 'Roboto Slab', serif;
      font-weight: 500;
      line-height: 20px;
      text-align: center;
      margin-left: 20px;
      display: inline-block;
      overflow: hidden;
    }
    /**************LINK***********/
    a:link{
      color: var(--greenapple);
      font-weight: bold;
  }
  a:visited{
    color: var(--greenapple);
    font-weight: bold;
  }
  
    a:hover {
      text-decoration: none;
      color: var(--neonmelon);
      font-family: 'Roboto Slab', serif;
      color:var(--lipgloss);
      font-weight: 500;
    }
  
    a:active {
      text-decoration: none;
      font-family: 'Roboto Slab', serif;
      font-weight: 500;
    }
    img.footer__logo{
  
      margin-top: 100px;
    
    }
  }
  
  /**********************************************************TABLET***********************************/
  
  @media all and (max-width: 1339px) and (min-width: 600px) {
    .container {
      width: 95%;
      max-width: 960px;
      margin: auto;
      font-family: 'Roboto Slab', serif;
      
      }
  
    #footer {
      width: 100%;
      margin: 0 auto;
      border-radius: 20px;
      border: 25px solid var(--raspberrypi);
    }
  
    /******** HEADERS *******/
  
    h3.footer__left {
      color: var(--raspberrypi);
      font-size: 16px;
      font-family: 'Roboto Slab', serif;
      margin: 0 0 12px 0;
      text-align: left;
      font-weight: bold;
    }
  
    h3.footer__center {
      color: var(--noir);
      font-size: 16px;
      font-family: 'Roboto Slab', serif;
      margin: 0 0 12px 0;
      text-align: center;
      font-weight: bold;
    }
  
    /********LIST *******/
  
    .footer__ul {
      margin: 0;
      list-style-type: none;
      padding-inline-start: 0px;
    }
  
    .footer__li {
      margin: 0;
      color: var(--noir);
      font-size: 13px;
      font-weight: 324;
      line-height: 22px;
      list-style-type: none;
      text-align: left;
    }
  
    #footer-utility {
      width: 90%;
      height: 150px;
      margin: 36px auto 0 auto;
      display: flex;
      justify-content: flex-end;
      padding-top: 7%;
    }
  
    .footer__partition {
      width: 1px;
      height: 100px;
      background: var(--mouse);
      margin: 0 32px 0 32px;
      float: left;
    }
  
    .footer__chat {
      width: 25%;
      height: 100px;
      float: left;
      margin: 0;
    }
  
    .footer__chat-img-icon {
      float: left;
      margin: 0 4px 0 0;
    }
  
    .footer__about {
      width: 25%;
      height: 100px;
      float: left;
      margin: 0;
    }
  
    /********CARD*******/
  
    .footer__card {
      width: 25%;
      height: 100px;
      float: left;
      margin: 0;
    }
  
    /********NEWSLETTER*******/
  
    #footer-newsletter {
      /*width: 300px;*/
      margin: 0 0 0 10%;
      text-align: center;
      float: left;
      background-color: var(--blanche);
      border-radius: 20px;
      border: 25px solid var(--blanche);
      
    }
    .footer__law{
      padding-top: 5%;
    }
    p.footer__deals {
      font-size: 13px;
      font-family: 'Roboto Slab', serif;
      font-weight: 500;
      line-height: 0;
      text-align: center;
    }
  
    .getemailform {
      width: 40%;
      padding: 16px 20px;
      margin: 8px 0;
      box-sizing: border-box;
      border: 2px solid var(--raspberrypi);
      background-color: var(--blanche);
      border-radius: 4px;
      font-size: 13px;
      font-family: 'Roboto Slab', serif;
      font-weight: 500;
    }
    input[type=text]:focus{
      border: 5px solid var(--raspberrypi); 
      border-radius: 10px;   
    }
  
    .enteremailbutton{
        background-color: var(--greenapple);
        border: 2px;
        border-radius: 4px;
        color: var(--blanche);
        padding: 16px 34px;
        text-decoration: none;
        margin: 4px 2px;
        cursor: pointer;
        font-size: 13px;
        font-family: 'Roboto Slab', serif;
        font-weight: 900;
      } 
  
    /******** SOCIAL MEDIA*******/
  
    #footer-social {
      width: 50%;
      margin: 80px 0 0 0;
      float: right;
      display: contents;
    }
  
    /********COPY RIGHT *******/
  
    .footer-border {
      width: 100%;
      height: 2px;
      background: var(--mouse);
      margin: 0 0 0 0;
    }
  
    #footer-copyright {
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      margin-top: 160px;
    }
  
    .footer__copy {
      color: var(--mouse);
      font-size: 12px;
      font-family: 'Roboto Slab', serif;
      font-weight: 500;
      line-height: 20px;
      text-align: center;
      margin-left: 20px;
    }
  
    /******** Link  *******/
  
    a:link{
      color: var(--greenapple);
      font-weight: bold;
  }
  a:visited{
    color: var(--greenapple);
    font-weight: bold;
  }
  
    a:hover {
      text-decoration: none;
      color:var(--lipgloss);
      font-family: 'Roboto Slab', serif;
      font-weight: 500;
    }
  
    a:active {
      text-decoration: none;
      color: var(--raspberrypi);
      font-family: 'Roboto Slab', serif;
      font-weight: 500;
    }
    img.footer__logo{
      margin-top: 50px;
      margin-bottom: 4%;
    }
  }
  
  /***********************MOBILE *********************/
  
  @media all and (max-width: 599px) and (min-width: 0px) {
    .container {
      width: 100%;
      max-width: 599px;
      margin: none;
      font-family: 'Roboto Slab', serif;
      }
      .header__img{
    
          z-index: 2;
        height:auto;
        display:flex;
          flex-grow: 1;
          width: 300px;
          padding-left: 7%;
        }
        a.header__logo {
            padding-top: 10px;
            width: 100%;

        
        }
    #footer {
      width: 100%;
      margin: 0 auto;
      border-radius: 20px;
      border: 25px solid var(--raspberrypi);
    }
  
    /******** HEADERS********/
  


    h3.footer__left {
      color: var(--raspberrypi);
      font-size: 16px;
      font-family: 'Roboto Slab', serif;
      font-weight: bold;
      margin: 0 0 12px 0;
    }
  
    h3.footer__center {
      color: var(--noir);
      font-size: 16px;
      font-family: 'Roboto Slab', serif;
      font-weight: bold;
      margin: 0 0 12px 0;
      text-align: center;
    }
  
  
    .footer__ul {
      margin: 0;
      list-style-type: none;
      padding-inline-start: 0px;
    }
  
    .footer__li {
      margin: 0;
      color: var(--noir);
      font-size: 13px;
      font-weight: 324;
      line-height: 22px;
      list-style-type: none;
      text-align: center;
    }
  
    /***************UTILITY**************/
  
    #footer-utility {
      width: 90%;
      height: 150px;
      margin: 36px auto 0 auto;
      padding-top: 7%;
  
    }
  
    /*******CHAT*******/
  
    .footer__chat {
      width: 100%;
      height: 100px;
      float: left;
      margin: 0;
    }
  
    /********ICONSs*******/
  
    .footer__chat-img-icon {
      margin: 0 4px 0 0;
    }
  
    /********ABOUT*******/
  
    .footer__about {
      width: 100%;
      height: 100px;
      float: left;
      margin: 48px 0 0 0;
    }
  
    /********CARD*******/
  
    .footer__card {
      width: 100%;
      height: 100px;
      float: left;
      margin: 0;
    }
  
    /******** NEWSLETTER *******/
  
    #footer-newsletter {
      width: 200px;
      margin: auto;
      text-align: center;
      background-color: var(--blanche);
      border-radius: 20px;
      border: 25px solid var(--blanche);
    }
  
    p.footer__deals {
      font-size: 13px;
      font-family: 'Roboto Slab', serif;
      font-weight: 500;
      line-height: 0;
      text-align: center;
    }
  
    .getemailform {
      width: 90%;
      padding: 16px 20px;
      margin: 8px 0;
      box-sizing: border-box;
      border: 2px solid var(--cottoncandy);
      background-color: var(--blanche);
      border-radius: 4px;
      font-size: 13px;
      font-family: 'Roboto Slab', serif;
      font-weight: 500;
    }
    input[type=text]:focus{
      border: 5px solid var(--raspberrypi); 
      border-radius: 10px;   
    }
  
  
    .enteremailbutton{
        background-color: var(--greenapple);
        border: 2px;
        border-radius: 4px;
        color: var(--blanche);
        padding: 16px 34px;
        text-decoration: none;
        margin: 4px 2px;
        cursor: pointer;
        font-size: 13px;
        font-family: 'Roboto Slab', serif;
        font-weight: 900;
      } 
  
    /********SOCIAL *******/
  
    #footer-social {
      width: 100%;
      margin: 20px 0 0 0;
    }
  
    /******** COPYRIGHT *******/
  
    .footer-border {
      width: 100%;
      height: 2px;
      background: var(--mouse);
      margin: 32px 0 0 0;
    }
  
    #footer-copyright {
      width: 100%;
      margin: 0 auto;
      margin-top: 32px;
    }
  
    .footer__copy {
      color: var(--mouse);
      font-size: 8px;
      font-family: 'Roboto Slab', serif;
      line-height: 20px;
      text-align: center;
      margin: 0;
      white-space: nowrap;
      font-weight: 500;
    }
  
    /******** LINK*******/
  
  
  
  a:link{
      color: var(--greenapple);
      font-weight: bold;
  }
  a:visited{
    color: var(--greenapple);
    font-weight: bold;
  }
    a:hover {
      text-decoration: none;
      color: var(--mauve);
      font-family: 'Roboto Slab', serif;
      font-weight: 500;
    }
  
    a:active {
      text-decoration: none;
      color: var(--raspberrypi);
      font-family: 'Roboto Slab', serif;
      font-weight: 500;
    }
    img.footer__logo{
      margin-top: 100px;
    }
  }
  .footer__enter{
    justify-content: space-around;
    background-color: var(--blanche);
    height: 100px;
  }
  .footer__imgcontainer{
    display:flex;
    justify-content: center;
    }
    .footer__logo{
    height:auto;
    padding-top: 3%;
    font-size: 16px;
    justify-content: center;
    width: auto;
    }
  
  
  /*=====================================FOOTER END ============================================*/
  /* =====================================TYPOGRAPHY=========================== */
  
  
  
  h1, h2, h3, p{
  font-weight: 500;
  }
  
  h1 {
  line-height: 2.38rem;
  font-size: 2rem;
  }
  
  h1 > a {
  text-decoration: none;
  }
  
  .menu-footer-links__column a {
  text-decoration: none !important;
  }
  
  h2 {
  line-height: 1.75rem;
  font-size: 1.75rem;
  }
  
  /*MORE INFO*/
  h5 {
  font-size: 1rem;
  line-height: 1.3rem;
  }
  
  .sector-date {
  margin: 0 0 5px 0;
  font-size: .81rem;
  line-height: .9rem;
  font-weight: 400;
  }
  
  .sector-title {
  font-size: 1.3rem;
  }
  
  .sector-category {
  font-size: .75rem;
  }
  
  /*
  .sector-card{
    border: 10px solid var(--blanche);
    border-radius: 40px;
    background-color: var(--blanche);
  }.sector-featured {
  border-bottom: 5px solid var(--mauve);
  border: 10px solid var(--blanche);
  border-radius: 40px;
  background-color: var(--blanche);
  }
    .imgborderround{
      border: 10px solid var(--blanche);
      border-radius: 40px;
      background-color: var(--blanche);;
  }
  */
  .sector__top-image img {
  width: 100%;
  height: auto;
  }
  
  
  .sector__text {
  text-align: center
  }
  
  .excerpt {
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.3rem;
  }
  .gallery__border{
    border: 30px solid var(--periwinkle);
    border-radius: 40px;
    padding: 2%;
  
  }
  /*=====================================END TYPOGRAPHY=======================================*/
  /*=====================================STYLES============================================*/
  
  
  img:hover {
  opacity: .95;
  transition: opacity .6s ease-out;
  /*border: 1px solid transparent;*/
  }
  
  
  .featured-column .sector {
  margin: 1em;
  margin-top: 1.7em;
  
  }
  
  p.sector-link-more {
  margin: 40px 0 50px 0;
  text-decoration: none;
  }
  
  .sidebar-list {
  list-style-type: none;
  /*margin: 0px;
  padding: 0px;*/
  margin-top: 0;
  padding: 0 1em 1em;
  padding-right: 0;
  }
  
  @media (max-width: 461px) {
  .sidebar-list {
    padding: 0 0 1em;
  }
  }
  
  .sidebar-list__item {
  border-top: 5px solid var(--noir);
  
  }
  
  .sidebar-list__label {
  text-decoration: none;
  font-weight: 500;
  margin: 5px 0 18px 0;
  color: var(--raspberrypi);
  font-size: 24px;
  padding-top: 4%;
  }
  
  .sidebar-list__image {
  width: 100%;
  height: auto;
  
  }
  
  
  .home-more-button {
  width: 100%;
  text-align: center;
  padding: 2.1em 0 2.8em;
  }
  
  
  .button-main {
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  font-size: 1rem;
  background-color: var(--blanche);
  border: 1px solid var(--blanche);
  -webkit-transition-duration: 800ms;
  transition-duration: 800ms;
  }
  
  .button-main:hover {
  border-color: var(--mauve);
  transition-duration: 400ms;
  }
  
  .slider {
  margin: 40px 0 50px;
  width: 100%;
  }
  
  .slider__title {
  text-align: center;
  color: var(--raspberrypi);
  
  }
  
  .slider__button {
  border: none;
  background: var(--blanche);
  }
  
  .shop {
  display: flex;
  width: 100%;
  }
  
  .shop-list__item {
  padding: .3em;
  }
  
  .shop-list__item img {
  width: 100%;
  height: auto;
  }
  
  @media (max-width: 700px) {
  .hide-2 {
    display: none;
  }
  }
  
  @media (max-width: 500px) {
  .hide-1 {
    display: none;
  }
  }
  
  
  @media (max-width: 550px ) {
  .hide-3 {
    display: none;
  }
  }
  @media (min-width: 550px ) {
  .hide-4 {
    display: none;
  }
  }
  
  /*=====================================END STYLES============================================*/
  .apptbody{
    padding: 25px;
  }
  input.username{
    padding-top: 5px;
  }
  .instagram-embed{
    width: 90%;
    height: auto;
  }
  .username2{
    font-family: 'Roboto Slab', serif;
    font-weight: bold;
    width: 200px;
    margin: 0 35px 20px ;
    height: 35px;
    padding: 6px 15px;
    border-radius: 5px;
    outline: none;
    border: none;
    background: var(--bleuclair);
    color: var(--mauve);
    font-size: 14px;
  }
  
  
  
  @media all and (max-width: 590px) and (min-width: 0px) {
    form {
      margin: 1%;
    }
    .featured-column .sector {
      border-bottom:none;
    }
  }
  
  a:link{
    color: var(--greenapple);
    font-weight: bold;
  }
  a:visited{
  color: var(--greenapple);
  font-weight: bold;
  }
  
  
  /**************************FORM*************************
  form{
    width: 350px;
    height: 800px;
    background: var(--spadeblue);
    border-radius: 20px;
    padding: 50px;
    margin: auto auto auto auto;
    color:var(--blanche);
    margin-bottom:10%;
  }
  .input-block{
    width: 100%;
    display: flex;
    flex-direction: column;
    background: var(--blanche);
    border: var(--blanche) 30px solid;
    border-radius: 25px;
    margin-bottom: 4%;
  }
  
  label {
      font-size: 22px;
      color: var(--barbiepink);
      font-weight: bold;
      background: var(--blanche);
      border: var(--blanche) 10px solid;
      border-radius: 25px;
      margin-bottom: 9%;
    }
  .form-header{
    width: 100%;
    padding: 0.5em;
    font-weight: bold;
    font-size: 20px;
    color: var(--barbiepink);
    border: var(--blanche) 10px solid;
    border-radius: 25px;
    background: var(--blanche);
    margin-bottom: 9
  }
  .form-input{
    width: 100%;
    padding: 0.5em;
    font-size: 16px;
    border: 5px solid var(--cottoncandy);
    border-radius: 10px;
  }
  .form-input:focus{
    outline: none;
  
    box-shadow: 0 0 6px var(--cottoncandy);;
  }
  
  */
  
  .welcome-msg{
    color: var(--blanche);
    font-size: 48px;
    text-align: center;
    opacity: 0;
    margin: 200px 0 0 0;
  }
  
  /* Animations */
  
  .form-refuse{
    animation: refuse 0.3s linear 2;
  }
  
  @keyframes refuse{
    0%{
        transform: translateX(0%);
    }
    35%{
        transform: translateX(15%);
    }
    70%{
        transform: translateX(-15%);
    }
    100%{
        transform: translateX(0%);
    }
  }
  
  .form-accept{
    animation: accept 0.5s ease-in-out forwards;
  }
  @keyframes accept {
    from{
        transform: translateX(0);
    }
    to{
        transform: translateX(-100vw);
    }
  }
  
  .active-msg{
    animation: fade 0.5s ease-in-out 0.7s forwards;
  }
  
  @keyframes fade{
    from{
        opacity: 0;
    }
  
    to{
        opacity: 1;
    }
  }
  
  @media all and (max-width: 599px) and (min-width: 0px) {
    form{
        width: auto;
        margin: 1%;
    }
  }
  
  
  
  @media all and (max-width: 999999999px) and (min-width: 1336px) {
    .container {
        width: 90%;
        max-width: 960px;
        margin: auto;
        font-family: 'Roboto Slab', serif;
        }
    }
  
  @media all and (max-width: 1339px) and (min-width: 600px) {
    .container {
        width: 95%;
        max-width: 960px;
        margin: auto;
        font-family: 'Roboto Slab', serif;
        };
  };
  @media all and (max-width: 599px) and (min-width: 0px) {
    .container {
        width: 100%;
        max-width: 599px;
        margin: none;
        font-family: 'Roboto Slab', serif;
    };
  };
  /**************************END FORM**************************/
  
  
  /****************************************END TABLES****************************************/
  /****************************************UPLOAD****************************************/
  
  
  
  

  /****************************************END BUTTON****************************************/
  /****************************************BUTTON FORM****************************************/

  
  .mod-button {
    height: 30px;
  }/*# sourceMappingURL=Upload.css.map */
  /****************************************END BUTTON FORM****************************************/
  
  .upload__progressbar {
      margin-top: 30px;
      height: 1rem;
      width: 0%;
      background-color: rgb(68, 212, 231);
      color: white;
      padding:2px
    }
    /**************************END FORM**************************/
    /**************************23 TABLE*************************/
    #content.my23__table{
      padding: 2%;
    }
    table, th, td {
      border: 1px solid var(--cottoncandy);
    
    
    }
    table {
      width: 100%;
      table-layout:fixed;
    }
    </style>
<template>
	<div>
		<main id="app" class="section" v-if="$route.meta.title !== 'embed'">
			<!--<h1 v-if="!isEmbeded" class='{fade: hasBeenLoaded}'>Cryptogene</h1> --class="loading-logo"-->
			<div class="container">
				<nav-main></nav-main>
				<router-view :key="$route.fullPath"></router-view>
				<signIn v-if="displayLogin"></signIn>
				<signUp v-if="displaySignUp"></signUp>
				<share-modal v-if="displayShareModal"></share-modal>
				<main-container v-show="displayCanvas" class="main"></main-container>
				<footer-main></footer-main>
			</div>
			<uniformGUI></uniformGUI>
		</main>
		<div class="main embeded" v-if="$route.meta.title === 'embed'">
			<router-view :key="$route.fullPath"></router-view>
			<div ref="threeCanvas" class="canvas-container" ></div>
		</div>
	</div>
</template>

<script>
import Header from './components/Header.vue';
import MainContainer from './components/MainContainer.vue';
import SignIn from './components/SignIn.vue';
import SignUp from './components/SignUp.vue';
import UniformGUI from './components/UniformGUI.vue';
import ShareModal from './components/ShareModal.vue';
import Footer from './components/Footer.vue';

export default {
	components: {
		navMain: Header,
		mainContainer: MainContainer,
		signIn: SignIn,
		signUp: SignUp,
		uniformGUI: UniformGUI,
		shareModal: ShareModal,
		footerMain: Footer
	},
	data: function() {
		return {
			isMounted: false,
			hasBeenLoaded: false
		}
	},
	computed: {
		displayShareModal() {
			return this.$store.getters.displayShareModal;
		},
		displayCanvas() {
			return this.$store.getters.displayCanvas;
		},
		sculpturesLoaded() {
			return this.$store.state.sculpturesLoaded;
		},
		isEmbeded() {
			return this.$store.state.embedded;
		},
		displayLogin() {
			return this.$store.getters.displayLogin;
		},
		displaySignUp() {
			return this.$store.getters.displaySignUp;
		}
	},
	watch : {
        sculpturesLoaded(value) {
			if(value && !this.hasBeenLoaded) {
				this.hasBeenLoaded = true;
			}
		},
		displayCanvas(val) {
			// console.log('display canvas changed', val)
		}
	},
	methods: {
		setUser: function() {
			this.$store.dispatch('setUser');
			this.$store.dispatch('fetchUserFavorites');
			this.$store.dispatch('fetchUserComments');
		},
		didMount: function(callback) {
			callback();
		}
	},
	created() {
	// when the app is created run the set user method
	// this uses Vuex to check if a user is signed in
	// check out mutations in the store.js file
		this.setUser();
	},
	mounted() {
		this.$nextTick(function () {
			this.isMounted = true;
			if(this.isEmbeded || this.$route.meta.title === 'embed') {
				document.body.classList.add('embeded');
			}
			if (this.$route.meta.title === 'embed') {
				let canvas = this.$refs.threeCanvas;
				this.$store.commit('setCanvasSize', {width: window.innerWidth, height: window.innerHeight});
			}
		})
		
	},
};
</script>

<style lang="less" scoped>

.loading-logo {
	position: absolute;
	left: 0px;
	top: 50%;
	right: 0px;
	bottom: 0px;
	z-index: 10;
	height: 47px;
	margin-top: 0px;
	margin-bottom: 0px;
	line-height: 89px;
	-webkit-transform: translate(0px, -50%);
	-ms-transform: translate(0px, -50%);
	transform: translate(0px, -50%);
	-webkit-transition: opacity 300ms ease;
	transition: opacity 300ms ease;
	/* font-family: Poppins, sans-serif; */
	font-size: 88px;
	font-weight: 400;
	text-align: center;
	letter-spacing: 5.06px;
	text-transform: uppercase;
	-moz-animation-duration: 300ms;
	-webkit-animation-duration: 300ms;
	-ms-animation-duration: 300ms;
	animation-duration: 300ms;
	&.fade {
		opacity: 0.0;
		visibility:hidden;
		transition:visibility 0s ease-in-out 300ms,opacity 300ms ease-in-out;
	}
}


@media (max-width: 479px) {
	.loading-logo {
		font-size: 67px;
		line-height: 62px;
		letter-spacing: 10.06px;
	}
}
</style>

<style lang="less">

@import './client/webflow.css';
@import './client/normalize.css';

@font-size: 40px;

@font-face {
  font-family: 'Regolapro';
  src: url('./client/fonts/RegolaPro-Bold.woff2') format('opentype');
  font-weight: 700;
  font-style: normal;
}
@font-face {
  font-family: 'Regolapro';
  src: url('./client/fonts/RegolaPro-Book.woff2') format('opentype');
  font-weight: 400;
  font-style: normal;
}
// @font-face {
//   font-family: 'Regolapro';
//   src: url('./client/fonts/RegolaPro-Regular.otf') format('opentype');
//   font-weight: 100;
//   font-style: normal;
// }
@font-face {
  font-family: 'Regolapro';
  src: url('./client/fonts/RegolaPro-Book.woff2') format('opentype');
  font-weight: 100;
  font-style: normal;
}
@font-face {
  font-family: 'Regolapro';
  src: url('./client/fonts/RegolaPro-Book.woff2') format('opentype');
  font-weight: 300;
  font-style: normal;
}
// @font-face {
//   font-family: 'Regolapro';
//   src: url('./client/fonts/RegolaPro-Medium.otf') format('opentype');
//   font-weight: 500;
//   font-style: normal;
// }

@font-family: 'Regolapro', 'Poppins', sans-serif;

[v-cloak] {
    display: none;
}
.logo {
	position: relative;
	text-align: center;
	top:50%;
	// transform: translateY(-50%);
}

// canvas { width: 100%; height: 100% }
#editor {
	//position: absolute;
	top: 135px;
	right: 8px;
	width: 40%;
	height: 80%;
	visibility: visible;
}
#editor-controls {
	padding-bottom: 3px;
  border: 5px solid var(--barbiepink);
  border-radius: 25px;
}
.CodeMirror {
	width: 60%;
	height: 100%;
  border: solid 5px var(--barbiepink);
  border-radius: 25px;
}
.error-span {
	background-color: red;
	color: white;
}


body {
	&.embeded {
		background: none !important;
	}
    background: white;
    font-family: @font-family;
    // overflow: hidden;
    letter-spacing: 0.1px;
    margin: 0;
}

.ge_editor {
	letter-spacing: 0px;
}

button {
	letter-spacing: 0.5px;
}

h1 {
	letter-spacing: 0.5px;
}

a {
  text-decoration: none;
  transition: color 300ms ease-in-out;
  color:#006492;
}

a:hover {
  color: black;
}
// textarea {
//     background: white;
//     height: 40vh;
//     padding: 10px;
//     // height: 56px;
//     font-family: @font-family;
//     font-weight: 300;
//     font-size: @font-size;
//     -webkit-appearance: none;
//     border: none;
//     border-bottom: 5px solid #64C7CC;
// }
// select {
//     border: none;
//     border-color: lightgray;
//     background-color: white;
//     height: 60px;
//     font-family: @font-family;
//     font-size: @font-size;
// }
// span {
//     text-transform: uppercase;
//     display: inline-block;
// }

// button {
//     font-size: 30px;
//     font-family: @font-family;
//     border:none;
//     cursor: pointer;
//     padding: 10px;
//     border: 5px solid black;
// }

// .footer {
//     text-align: center;
//     position: absolute;
//     width: 100%;
//     bottom: 20px;
    
// }

.w-layout-grid {
  display: -ms-grid;
  display: grid;
  grid-auto-columns: 1fr;
  -ms-grid-columns: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  -ms-grid-rows: auto auto;
  grid-template-rows: auto auto;
  grid-row-gap: 16px;
  grid-column-gap: 16px;
}

input:focus,
select:focus,
textarea:focus,
button:focus {
    outline: none;
}

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
  
  
  
  
  
  /********************************BUTTON*********************************************/
  .btn {
    margin-right: 10px;
    margin-top: 30px;
    font-family: "Source Sans Pro",sans-serif;
    font-weight: 900;
    padding: 1.25rem 2rem;
    font-size: 1rem;
    border-radius: 3.5rem/100%;
    position: relative;
    min-width: 15rem;
    max-width: 90vw;
    overflow: hidden;
    border: 0;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: .05em;
    transition: all .33s;
    outline: none;
    margin-bottom: 10%;
    border-radius: 15px;
  
  }
  
  .btn + .btn {
    outline: none;
    margin-top: 1rem;
  }
  .btn span {
    outline: none;
    position: relative;
    z-index: 1;
  }
  /*
  .btn:before {
    outline: none;
    content: "";
    background-color: var(--popblue);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: scale(4) translateX(-100%);
    transition: all 495ms ease-out;
    outline: none;
  }
  
  .btn:hover:before, .btn:focus:before, .btn:active:before {
    outline: none;
    transform: scale(4) translate(37%);
  }
  */
  .btn--alpha {
    outline: none;
    background-color: var(--popblue);
    color: var(--scenepurple);
  }
  .btn--alpha:before {
    background-color: var(--scenepurple);
    background-image: linear-gradient(to right, var(--scenepurple) 30%, var(--popblue) 100%);
    position: absolute;
  }
  .btn--alpha:hover, .btn--alpha:focus, .btn--alpha:active {
    outline: none;
    color: var(--popblue);
  }
  
  .btn--beta {
    outline: none;
    background-color: var(--spadeblue);
    color: var(--neonmelon);
  }
  .btn--beta:before {
    background-color: var(--neonmelon);
    background-image: linear-gradient(to right, var(--neonmelon) 30%, var(--spadeblue) 100%);
    position: absolute;
  }
  .btn--beta:hover, .btn--beta:focus, .btn--beta:active {
    outline: none;
    color: var(--scenepurple);
  }
  
  .btn--gamma {
    outline: none;
    background-color: var(--bumblebee);
    color: var(--lipgloss);
  }
  .btn--gamma:before {
    background-color: var(--lipgloss);
    background-image: linear-gradient(to right, var(--lipgloss) 30%, var(--bumblebee)100%);
    position: absolute;
  }
  .btn--gamma:hover, .btn--gamma:focus, .btn--gamma:active {
    outline: none;
    color: var(--bumblebee);
  }
  
  .btn--delta {
    outline: none;
    background-color: var(--neonmelon);
    color: var(--cottoncandy);
  }
  .btn--delta:before {
    background-color: var(--scenepurple);
    background-image: linear-gradient(to right, var(--scenepurple) 30%, var(--neonmelon) 100%);
    position: absolute;
  }
  .btn--delta:hover, .btn--delta:focus, .btn--delta:active {
    outline: none;
    color: var(--neonmelon);
  }
  .btn--sigma{
    outline: none;
    background-color: var(--raspberrypi);
    color: var(--cottoncandy);
  }
  .btn--sigma:before {
    background-color: var(--scenepurple);
    background-image: linear-gradient(to right, var(--scenepurple) 30%, var(--neonmelon) 100%);
    position: absolute;
  }
  .btn--sigma:hover, .btn--delta:focus, .btn--delta:active {
    outline: none;
    color: var(--neonmelon);
  }
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



<template>
      <header class="header menu" >
            <nav class="header__nav">
                  <ul class="nav__sidenav nav--right ">
                      <li >
                              <router-link to="/" class="header__logo" alt="ChromaGene Logo">   <img  class='header__img' src="https://res.cloudinary.com/chromagene/image/upload/v1629671769/dna/cryptocompany_oyolng.svg" alt="" /> </router-link>
                        </li>
                        <li @mouseover="listOne = true" @mouseleave="listOne = false">
                              <router-link to="/gallery" class="header__link " style="color: var(--greenapple); font-size: 20px;">Collection <svg class="IconV2 Dropdown-link-caret IconV2--position-default IconV2--display-inlineBlock" width="12" height="12" viewBox="0 0 16 16"><path d="M3.619 3.729h8.762a.75.75 0 0 1 .637 1.146l-4.381 7.042a.75.75 0 0 1-1.274 0L2.982 4.875a.75.75 0 0 1 .637-1.146z" fill="#2A2825" fill-rule="evenodd"></path></svg></router-link>
                                      <transition name="fade">
                                              <ul v-if="listOne" @click="listOne = false" >
                                                  <li> <router-link to="/new" style="color: white; font-size: 12px;" >Create New</router-link></li>
                                                  <li> <router-link to="/" style="color: white; font-size: 12px;" >Gallery</router-link></li>
                                                  <li> <router-link to="/examples" style="color: white; font-size: 12px;" >Examples</router-link></li>
                                              </ul>
                                      </transition>
                        </li>

                          <li @mouseover="listThree = true" @mouseleave="listThree = false">
                        <router-link to="/contact" class="header__link " style="color: var(--greenapple); font-size: 20px;">Resources<svg class="IconV2 Dropdown-link-caret IconV2--position-default IconV2--display-inlineBlock" width="12" height="12" viewBox="0 0 16 16"><path d="M3.619 3.729h8.762a.75.75 0 0 1 .637 1.146l-4.381 7.042a.75.75 0 0 1-1.274 0L2.982 4.875a.75.75 0 0 1 .637-1.146z" fill="#2A2825" fill-rule="evenodd"></path></svg></router-link>
                                      <transition name="fade">
                                            <ul v-if="listThree" @click="listThree = false">
                                              <li><a style="color: white; font-size: 12px;" href="/main">Help Center</a></li>
                                                <li><a style="color: white; font-size: 12px;"  href="#">Gallery</a></li>
                                              <li><a style="color: white; font-size: 12px;"  href="#">Suggestions</a></li>
                                              <li><a style="color: white; font-size: 12px;"  href="/contact">Contact</a></li>
                                            </ul>
                                </transition>
                        </li>
                        <li @mouseover="listTwo = true" @mouseleave="listTwo = false" >
                              <router-link to="/my23"  class="header__link "  style="color: var(--greenapple); font-size: 20px;">Profile <svg class="IconV2 Dropdown-link-caret IconV2--position-default IconV2--display-inlineBlock" width="12" height="12" viewBox="0 0 16 16"><path d="M3.619 3.729h8.762a.75.75 0 0 1 .637 1.146l-4.381 7.042a.75.75 0 0 1-1.274 0L2.982 4.875a.75.75 0 0 1 .637-1.146z" fill="#2A2825" fill-rule="evenodd"></path></svg></router-link>
                                  <transition name="fade">
                                            <ul v-if="listTwo" @click="listTwo = false">
                                              <li><a style="color: white; font-size: 12px;" href="my23">My23</a></li>
                                              <li><a style="color: white; font-size: 12px;" href="#">My Collections</a></li>
                                              <li><a style="color: white; font-size: 12px;" href="#">My Favorites</a></li>
                                              <li><a style="color: white; font-size: 12px;" href="/signin">Sign In</a></li>
                                            </ul>
                                </transition>
                        </li>
                          <li>
                              <router-link to="/start"  class="header__link buttonH buttonH--size-xs buttonH--color" style="color: white; font-size: 20px; display:flex; align-items:center;"><button><span>Create</span></button></router-link>
                        </li>
                  </ul>
            </nav>
      </header>
</template>

<script>
import firebase from "firebase/app";
import CardModal from './CardModal.vue';
export default {
    data: function() {
		return {
      showProfileDropDown: false,
      listOne:   false,
      listTwo:   false,
      listThree: false,
      listFour:  false
		}
    },
    components: {
      cardModal: CardModal
    },
    computed: {
		displayLogin() {
			return this.$store.getters.displayLogin;
		},
        embedded() {
            return this.$store.getters.getEmbedded;
        },
        profileBadgeCount() {
            return this.$store.getters.getProfileBadgeCount;
        },
        user() {
            return this.$store.getters.getUser;
        },
        title() {
            if(this.$store.getters.routeTitle) {
                return this.$store.getters.routeTitle;
            } else {
                return this.$route.meta.title;
            }
        },
        isMobile() {
            return window.innerWidth < 500;
        }
    },
    methods: {
        setProfileDropDown: function (val) {
            this.showProfileDropDown = val;
        },
        signOut: function() {
            firebase.auth()
            .signOut()
            .then(() => {
                // this.$router.replace('sign-in');
            });
        }, 
        signIn: function() {
            this.$store.commit('displayLogin', true);
        }
    }
};
</script>

<style >

 /**************************HEADER BUTTON************************/
    .buttonH--size-xs {
    padding-left: 1rem;
    padding-right: 1rem;
    height: 3.4rem;
    font-size: 1.6rem;
}
.buttonH, .buttonH:active {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-box-shadow: 0 .2rem 0 0 var(--color-shadow);
    box-shadow: 0 .2rem 0 0 var(--color-shadow);
}
.buttonH {
    position: relative;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    background: var(--color-main);
    color: var(--color-text);
    border: 2px solid var(--color-shadow);
    border-radius: .5rem;
    cursor: pointer;
    -webkit-transition: all .2s cubic-bezier(.06,.67,.37,.99);
    transition: all .2s cubic-bezier(.06,.67,.37,.99);
    font-weight: 500;
    line-height: 1;
    text-decoration: none;
}
.buttonH--color {
   /* --color-main: #3EECAC;
    --color-shadow: #6CC04A;*/
    --color-main: #ef52d1;
    --color-shadow: #c23da8;
    --color-text: #fff;
}
.buttonH-children {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
button{
    background: none;
}
.menu {  


   color: #fff;
}

.menu a {

  color: #fff;
  text-decoration: none;
}

.menu li {
  
 
  color: #fff;

  background: transparent;
}


.menu li ul li {
  background: var(--greenapple);
  transition: background .2s;
   color: #fff;
}

.menu li ul li:hover {
 background: var(--cottoncandy);
  color: #fff;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
    
</style>

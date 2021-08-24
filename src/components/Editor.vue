<template>
<div :class="{embeded : isEmbeded}" class="editor">
    <div class="editor-container">
        <v-dialog/>
        <div class="controls">
            <input @keyup="()=>{}" 
                @keydown.stop="() => {}" 
                @click.stop="()=>{}" 
                v-bind:style="titleInput"
                classs="editor-input centerY"  v-model="sculptureTitle" placeholder="title">
            <div class="editor-input-subbuttons">  <span v-if="authorUsername !=='admin' && authorUsername" class="username centerY">by 
                <router-link  :to="userProfileRoute" tag="a">{{authorUsername}}</router-link>
            </span>
            <button @click.stop="close" class="close centerY editor-button"></button>
            <button @click.stop="save" class="save centerY editor-button">{{saveText}}</button></div>
            
            
            <label class="autoUpdate-label centerY" for="AutoUpdate">Auto Update</label>
            <input  class="checkbox centerY" :style="{marginLeft: '10px'}" type="checkbox" value="AutoUpdate" v-model="autoUpdate">
            <button @click.stop="play" v-if="!autoUpdate" class="play centerY editor-button"></button>

            <label class="autoUpdate-label centerY" v-if="isAdmin" for="Example">Is Example</label>
            <input class="checkbox centerY" v-if="isAdmin" type="checkbox"  value="Example" v-model="isExample">
            <label class="autoUpdate-label centerY" v-if="isAdmin" for="Featured">Featured</label>
            <input class="checkbox centerY" v-if="isAdmin" type="checkbox"  value="Featured" v-model="isFeatured">
            
            

            <button v-if="displayDelete" @click.stop="deleteSculpture" class="delete centerY editor-button">Delete</button>
            <!-- <input type="text" id="editor-shader-title" size="60"></input> -->
            <!-- <span>by</span> -->
            <!-- <input type="text" id="editor-author-name" size="30"></input> -->
        </div>
        
        <!-- <div @keyup="()=>{}" @keydown.stop="()=>{removeEditorModalUI()}" @click.stop="()=>{}" ref="codeMirror" class="code-editor"> </div> -->
        <!-- <codemirror ref="myCm"
            :value="code" 
            :options="cmOptions"
            @ready="onCmReady"
            @focus="onCmFocus"
            @input="onCmCodeChange">
        </codemirror> -->
            


        
                    <card class="" >
                        <div class="choose-group">
                            <!--  <div style="color: var(--barbiepink); display: flex; font-size: 24px; justify-content: space-around; padding-top: 7%;font-weight: bold;">Upload</div>-->
                            <label class="btn btn--delta" for="file1">Upload .txt</label>
                            <input type="file" class="form-control-file" id="file1" style="display: none; resize: none; margin-top: 10px;" ref="click1" @change="onFileChange">
                            <textarea class="form-control"  style="resize: none; border: 15px solid var(--bumblebee); border-radius: 15px; margin-top: 10px;" v-model="preview1" rows="5" cols="20" name="file"></textarea>



<!-- make a div that is a dropdown on mouseover  hover show the list of options select an option that will fill preview2-->
                          <!--  <div class="dropdown" style="display: none;">
                                <div class="dropdown-content" style="display: block;">
                                    <div class="dropdown-item" v-for="(item, index) in list" v-bind:class="{'selected': item === selected}" @click="onSelect(item)">{{item}}</div>
                                </div>
                            </div>
                            <div class="dropdown-content" style="display: none;">
                                <div class="dropdown-item" v-for="(item, index) in list" v-bind:class="{'selected': item === selected}" @click="onSelect(item)">{{item}}</div>
                            </div>-->



                             <label class="btn btn--alpha">Choose Design</label>
                            <input type="file" class="form-control-file" id="file2" style="display: none; resize: none;" @change="onFileChange2"> 
                            <textarea class="form-control"  style="resize: none; border: 15px solid var(--bumblebee); border-radius: 15px;" v-model="preview2" rows="5" cols="20" name="file2"></textarea>
                            <button class="btn btn--beta" @click="onSubmit">Submit</button>
                            <button  @click.stop="errorMessages = []" class="btn btn--beta">Clear Console</button>
                        </div>

                       
                    </card>
           









            <div class="console-container">
                
                <div class="error-messages" v-html="consoleErrorMessages"></div>
                <!-- <button  @click.stop="download" class="centerY editor-button">Download Source</button> -->
                

        </div>
                <codemirror ref="myCm"
            :value="code" 
            :options="cmOptions"
            @ready="onCmReady"
            @input="onCmCodeChange" @keydown.stop="()=>{}" @click.stop="()=>{}">
        </codemirror>
    </div>
</div>

</template>

<script>

import { codemirror } from 'vue-codemirror'
import {sculptToThreeJSShaderSource, sculptToTouchDesignerShaderSource} from 'shader-park-core';
import firebase from 'firebase';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/keymap/sublime.js';



export default {
    props: {
        cachedWidth: { type: String, default: '40%' }
    },
    data () {
        return {
            listOne: false,
            cm: null,
            code: '',
            cmOptions: {
                tabSize: 4,
                mode: 'text/javascript',
                theme: 'default',
                lineNumbers: true,
                matchBrackets: true,
                keyMap: 'sublime',
                autoCloseBrackets: true,
                line: true,
                viewportMargin: Infinity,
            },
            initialized: false,
            isExample: false,
            isFeatured: false,
            autoUpdate: true,
            closed: false,
            editorContainsErrors: false,
            saved: true,
            titleInput: {
                border: 'none',
                fontSize: '25px',
            },
            currWidth: '0px',
            editorHasDisplayedModal: false,
            dialog: false,
            errorMessages: [],
            file1: null,
            file2: null,
            file3: null,
            preview1: '',
            preview2: '',
            preview3 : '',
            func: '',
        }
    },
    components: {
        codemirror
    },
    mounted() {
        // document.addEventListener('keydown', this.keypress.bind(null, true));
    },
    computed : {
        sculptureError() {
            return this.$store.getters.getSculptureError;
        },
        codemirror() {
            return this.$refs.myCm.codemirror;
        },
        consoleErrorMessages() {
            return this.errorMessages.join('<br/>');
        },
        saveText() {
            if(this.selectedSculpture) {
                if(!this.selectedSculpture.uid || this.$store.getters.getUser && this.$store.getters.getUser.uid == this.selectedSculpture.uid) {
                    if(this.selectedSculpture.saved) {
                        return 'Saved';
                    } else {
                        return 'Save';
                    }
                } else {
                    return 'Save as Fork';
                }
            }
            return 'Save';
        },
        selectedSculpture() {
            return this.$store.state.selectedSculpture;
        },
        currUser () {
			return this.$store.getters.getUser;
        },
        isAdmin() { //TEMPORARY TODO: add actual admin check
            return this.$store.getters.isAdmin;
        },
        displayDelete() {
            return this.selectedSculpture && this.currUser && this.currUser.uid && this.selectedSculpture.uid === this.currUser.uid;
        },
        authorUsername() {
            return this.selectedSculpture? this.selectedSculpture.username: null;
        },
        authorId() {
            return this.selectedSculpture? this.selectedSculpture.uid: null;
        },
        userProfileRoute() {
            return this.selectedSculpture? `/user/${this.selectedSculpture.username}`: $router.currentRoute.path;
        },
        sculptureTitle: {
            get : function() {
                return this.selectedSculpture? this.selectedSculpture.title: '';
            },
            set : function(value) {
                if(this.$store.state.selectedSculpture) {
                    this.$store.state.selectedSculpture.title = value;
                    this.titleInput.width = value.length + 1 + 'ch';
                }   
            }
        },
        isEmbeded() {
            return this.$store.state.embedded;
        }
    },
    watch : {
        sculptureError(error) {
            if(error) {
                let message = error.toString();
                let lastErrorIndex = this.errorMessages.length - 1;
                if(!this.errorMessages.length) { // empty, so push new message
                    this.errorMessages.push(message);
                } else if(this.errorMessages[lastErrorIndex] !== message) {
                    this.errorMessages.push(message);
                }
                
                setTimeout(() => { //wait for DOM to refresh to calculate height
                    let errorConsole = document.querySelector('.console-container');
                    errorConsole.scrollTop = errorConsole.scrollHeight;    
                }, 1);
                
            }
        },
        cachedWidth(value) {
            if(this.currWidth != '0px') {
                this.currWidth = this.cachedWidth;
            }
        },
        autoUpdate(value) {
            if(value) {
                this.onCmCodeChange(this.code);
            }
            // if(this.cm) {
            //     this.cm.autoUpdate = value;
            // }
        },
        isExample(value) {
            this.selectedSculpture.isExample = value;
        },
        isFeatured(value) {
            this.selectedSculpture.featured = value;
        },
        selectedSculpture(obj) {
            if(obj) {
                if(obj.title) {
                    this.titleInput.width = obj.title.length + 'ch';
                }
                this.currWidth = this.cachedWidth;
                this.isExample = obj.isExample;
                this.isFeatured = obj.featured;
                if(!this.initialized) {
                    this.code = obj.shaderSource;
                    this.initialized = true;
                } else {
                    this.closed = false;
                    this.code = obj.shaderSource;
                }
                this.errorMessages = [];
                this.cycleResizeWindows();
            } else {
                this.currWidth = '0px';
                this.cycleResizeWindows();
            }
        }
    },
    methods: {
        onFileChange(e) {
            const file1 = e.target.files[0]
            const reader = new FileReader()
            reader.onload = () => {
                this.preview1 = reader.result
            }
            reader.readAsText(file1)
            this.file1 = file1
        },

        

        onFileChange2(e) {
            const file1 = this.file1;
            const file2 = e.target.files[0]
            const reader = new FileReader()
            reader.onload = () => {
                this.preview2 = reader.result
            }
            reader.readAsText(file2)
            this.file2 = file2; 
        },


        
        onSubmit() {
            //const file1 = this.file1;
            const info1 = this.preview1;
            const info2 = this.preview2;
            const info3 = 'let jsonObj = ' +info1+ '; ' + info2;

            const storageRef = firebase.database().ref('UserDnaFiles');
   	        storageRef.push({
                "shaderStr": info3
    	});

        console.log(info3)
        this.code = info3;
        this.preview3 = info3;
        },
        click1() {
        this.$refs.input1.click()   
        } ,
        click2() {
        this.$refs.input2.click()   
        } ,
        cycleResizeWindows() {
            let interval = setInterval(() => {
                this.codemirror.refresh();
                window.onCanvasResize();
            }, 1);
            setTimeout(() => {
                this.codemirror.refresh()
                window.onCanvasResize()
                clearInterval(interval);
            }, 1000);
        },
        onCmReady(cm) {
            window.cm = cm;
        },
        onCmFocus(cm) {
        },
        onCmCodeChange(newCode) {
            if(newCode !== this.selectedSculpture.shaderSource){
                this.selectedSculpture.saved = false;
                this.$store.commit('setUnsavedChanges', {[this.selectedSculpture.id] : false})
            }
            this.code = newCode;
            if(this.autoUpdate) {
                if(this.selectedSculpture){
                    this.selectedSculpture.shaderSource = this.code; 
                }
            }
        },
        save() {
            return new Promise((resolve, reject) => {
                if(this.currUser != null) {
                    let id = this.selectedSculpture.id;
                    this.$store.dispatch('saveSculpture', this.selectedSculpture).then(() => {
                        this.selectedSculpture.saved = true;
                        this.$store.currSculpture = this.selectedSculpture;
                        this.$store.commit('setUnsavedChanges', {[id] : true});
                        resolve();
                    }).catch(e => {
                        console.error(e);
                        alert(e);
                        reject(e);
                    })
                } else {
                    // this.$router.push('sign-in');
                    this.$store.commit('displayLogin', true);
                    reject();
                }
            });
        },
        play() {
            if(this.selectedSculpture){
                this.selectedSculpture.shaderSource = this.code; 
            }
        },
        download() {
            let output = sculptToThreeJSShaderSource(this.code);
            let out2 = sculptToTouchDesignerShaderSource(this.code);
            
            let spExport = output.geoGLSL + '\n' + output.colorGLSL;
            output['spExport'] = spExport;
            output['touchDesignerExport'] = out2.frag;
            console.log(output);
        },
        exportSculpture() {
            //Unused
        },
        close() {
            let close = () => {
                this.closed = true;
                this.$store.state.selectedSculpture = null;
                this.$store.state.selectedObject = null;
            };
            if(this.selectedSculpture.saved) {
                close();
            } else {
                this.dialog = true;


                this.$modal.show('dialog', {
                    title: 'Unsaved Changes',
                    text: 'Do you want to save before closing the editor?',
                    buttons: [{
                        title: 'Cancel',
                        handler: () => this.$modal.hide('dialog')
                    },
                    {
                        title: 'Close',       // Button title
                        handler: () => {
                            close();
                            this.$modal.hide('dialog')
                        }
                    },
                    {
                        title: 'Save & Close',       // Button title
                        default: true,    // Will be triggered by default if 'Enter' pressed.
                        handler: () => {
                            this.save().then(() => {
                                this.$modal.hide('dialog');
                                close();
                            });
                        }
                    }]
                })
                
            }
        },
        deleteSculpture() {
            this.$modal.show('dialog', {
                title: 'Delete Sculpture',
                text: 'Are you sure you want to delete this sculpture?',
                buttons: [{
                    title: 'Cancel',
                    handler: () => this.$modal.hide('dialog')
                },
                {
                    title: 'Delete',       // Button title
                    default: true,    // Will be triggered by default if 'Enter' pressed.
                    handler: () => {
                        this.$store.dispatch('deleteSculpture', this.selectedSculpture).then(() => {
                            this.$store.dispatch('removeSelectedSculptureFromScene');
                            this.$store.state.selectedSculpture = null;
                        })
                        this.$modal.hide('dialog');
                    }
                }]
            })
        },
        keypress(down, e) {
            if (e.key === 'Escape') {
            	this.close();
            }
            // if (e.key === 'Enter') {
            //     if(this.selectedSculpture) {
            //         this.play();
            //     }
            	
            // }
        },
        removeEditorModalUI() {
            if(this.cm && this.cm.helpers.activeModal && this.cm.helpers.activeModal.isVisible){
                if(this.editorHasDisplayedModal) {
                    cm.helpers.activeModal.removeModal();
                    this.editorHasDisplayedModal = false;
                } else {
                    this.editorHasDisplayedModal = true;
                }
            } else {
                this.editorHasDisplayedModal = false;
            }
        }
    }
}

</script>
<style scoped>

/* @import 'codemirror/lib/codemirror.css'; */
</style>

<style lang="less" scoped>

// @import '/codemirror/glslEditor.css';
// @import "codemirror/lib/codemirror.css";
// @import '../client/codemirror/codemirror.css';
@import '../client/codemirror/glslEditor.css';
// @import '~codemirror/lib/codemirror.css';
// @import '~@codemirror/lib/codemirror.css';
// @import '~@material/react-button/index.scss';

.editor-button {
    padding: 5px 15px 5px 15px;
    border-radius: 50px;
    /* border: 1px solid lightgrey; */
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
    margin-bottom: 5px;
    //display:flex;
    justify-content: flex-end;
    width: 25%;
    transition: color 300ms ease-in-out, box-shadow 300ms ease-in-out ;
        color: #777;
    -webkit-transition: color 300ms ease-in-out, box-shadow 300ms ease-in-out ;
    &:hover {
        color: #000;
        box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
    }        

}
.main{
    flex-direction: column;
}
.centerY{
   // position: relative;
    //top:50%;
    //transform: translateY(-50%);
    margin-left: 70%;
}

.username {
   // position: absolute !important;
    font-size: 17px;
}



.controls{
    overflow: hidden;
    width: 100%;
    padding-bottom: 3px;
    border: 5px solid var(--barbiepink);
    border-radius: 25px;
    display: flex;
    flex-direction: column;
}

.bottom-controls-container {
    width: 100%;
    border-top: 2px solid #f5f5f5;
    position: absolute;
    bottom: 0px;

    .console-controls {
        height: 4vh;
       // position: absolute;
        left: 0;
        right: 0;
        pointer-events: none;
        //border-bottom: 2px solid #f5f5f5;
        
        .clear-console {
            pointer-events: initial !important;
            right: 20px;
            line-height: 20px;
            margin: 0px;
            display:flex;
        }
    }

    .console-container {
        overflow: scroll;   
        height: 8vh;
        padding-left: 10px;

        .error-messages {
        padding: 0;
        }
        // padding-bottom: 10px;
        // padding-top: 10px;
    }
}

.save {
   // margin-left: 5px;
}

.control-button {
    opacity: 0.6;
    background-repeat: no-repeat;
    // box-shadow: none;
    transition: opacity 300ms ease-in-out;
    -webkit-transition: opacity 300ms ease-in-out;
    &:hover {
        // box-shadow: none;
        opacity: 1.0;
    }
}

.close {
    background-color: #777;
    color:white;
    transition: bacground-color 300ms ease-in-out, filter 300ms ease-in-out;
    -webkit-transition: background-color 300ms ease-in-out, filter 300ms ease-in-out;
    width: 28px;
    height: 28px;
    border-style: none;
    background-image: url('../client/images/close-white.svg');
    background-position: 50% 50%;
    background-size: 16px;
    background-repeat: no-repeat;
    background-attachment: scroll;
    filter: invert(0);
    &:hover {
        filter: invert(1);
        // fill: black;
        background-color: black;
    } 
}

.play {
    .control-button();
    height: 30px;
    width: 30px;
    background-position: 65% 50%;
    background-size: 16px;
    background-image: url('../client/images/play.svg');
}

.delete, .close, .save, .autoUpdate-label, .checkbox, .play {
    float: right;
   // margin-left: 10px;
}

.autoUpdate-label {
    font-weight: normal;
    //margin-left: 5px !important;
    color: #777;
    width: 25%;
    display:flex;
    justify-content: flex-end;
}
.dialog-c-text {
    padding: 0px 20px 10px 20px;
}
.dialog-c-title {
    text-align: center;
    font-size: 17px;
}

.vue-dialog-button {
    font-size: 14px !important;
}

label {
    display: inline;
}

.checkbox {
    margin-left: 5px;
    margin-right: 5px;
}

.CodeMirror-scroll {
    //height: auto;
    overflow: scroll !important;
    border: 5px solid var(--bluecyan);
    max-height: 81vh;
    width: 100%;
    &.embed {
        max-height: 92vh;
    }
}
.CodeMirror pre {
    border-radius: 0;
    border: 5px solid var(--bluecyan);
    border-width: 8;
    background: transparent;
    font-family: inherit;
    font-size: inherit;
    margin: 0;
    white-space: pre;
    word-wrap: normal;
    line-height: inherit;
    color: inherit;
    /* z-index: 2; */
    /* position: relative; */
    overflow: visible;
    width: 60%;
    -webkit-tap-highlight-color: transparent;
}
.CodeMirror {
    margin-top: 0px !important;
}

.ge_canvas {
    display: none;
}

.editor {
    &.embeded {
        top: 0px;
    }
    overflow: hidden;
    // position: absolute;
    // top: 85px;
    position: relative;
    // right: 0px;
}

.vue-codemirror {
    //max-height: calc(74vh - 2px);
    overflow: scroll;
    margin-bottom: 20px
}

.CodeMirror-hints{
    z-index: 100;
}



   .choose-group {
       display:flex;
       flex-wrap:wrap;
     justify-content: space-evenly;
       width: 80%;
   } 
   .editor-input-subbuttons{
       display:flex;
       flex-direction:column;
       justify-content:flex-end;
   }

   .choose-group {
        @media all and (min-width: 0px)and (max-width: 700px) {
               display:flex;
      // flex-wrap:wrap;
     justify-content: space-evenly;
       width: 100%;
        }
        @media all and (min-width: 2501)and ( max-width: 99999999999999px) {
        display:flex;
       flex-wrap:wrap;
        justify-content: space-evenly;
       width: 80%;
     }

}

</style>



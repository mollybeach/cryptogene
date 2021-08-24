
<template>
    <div class="contact-input">
        <div class="contact-input-container">
            <div class="main">
                <h1 class="form-header">Contact</h1>
          
            <div class="">
                <div class="input-block">
                    <label for="email">Subject:</label>
                    <input type="text" class="form-input" placeholder="Enter your email address" v-model="contact.email">
                </div>
                <div class="input-block">
                    <input type="text" class="form-input" placeholder="Enter your phone number" v-model="contact.phone">
                </div>
                <div class="input-block">
                    <label for="password">Message:</label>
                    <input type="text" class="form-input" placeholder="Enter your message" v-model="contact.message">
                </div>
                <div class="contact-input-input">
                    <button class="btn btn--delta" @click="sendContact">Send</button>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                contact: {
                    email: '',
                    phone: '',
                    message: ''
                }
            }
        },
        methods: {
            sendContact: function () {
                this.$http.post('/api/contact', this.contact).then(function (response) {
                    console.log(response);
                });
            }
        }
    }
</script>


<template>
    <main>
        <div class="container">
            <h1>About</h1>
            <strong>
                <a
                    href="https://github.com/mollybeach"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="https://avatars0.githubusercontent.com/u/mollybeach"
                        alt=""
                    />
                    <span>@</span>
                    <span>Molly Beach</span>
                </a>
            </strong>
            <br />
            <small>
                <a href="  " target="_blank" rel="noopener noreferrer">
                    <i class="fa fa-github"></i>
                    <span>github</span>
                </a>
            </small>

            <strong>
                <a href="" target="_blank" rel="noopener noreferrer">
                    <img
                        src="https://avatars0.githubusercontent.com/u/16097?s=460&v=4"
                        alt=""
                    />
                    <span>@</span>
                    <span>Yuta Moxley</span>{" "}
                </a>
            </strong>
        </div>
    </main>
</template>;


<script>
import GithubButton from  'vue-github-button'

export default {
    data: function() {
        return {
            roomName: "About",
        }
    },
    components : {
        GithubButton
    },
    mounted() {
        this.$store.commit('sculpturesLoaded', true);    
    },
    destroyed() {
        this.$store.commit('leaveRoom', this.roomName);
    },
};
</script>


<style lang="less" scoped>
@import '../client/mixins.less';
.container {
    font-size: 1rem;
}
</style>


<template>
    <div id="app">
        <NavBar/>
        <main class="mt-5">
            <router-view/>
        </main>
    </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'

export default {
    name: 'App',
    components: {
        NavBar
    }
}
</script>

<style lang="scss">
@import "assets/styles/_custom.scss";
@import "~bootstrap/scss/bootstrap";

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

</style>

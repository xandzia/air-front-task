<template>
    <nav>
        <img alt="Vue logo" src="../assets/logo.png">
        <ul v-for="item in navList" v-bind:key="item.name">
            <router-link
                tag="li"
                :to="item.link"
            >
                {{ item.name }}
            </router-link>
            |
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            navList: [
                {link: '/', name: 'Home'},
                {link: '/login', name: 'Login'},
                {link: '/table', name: 'Table'},
            ]
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>

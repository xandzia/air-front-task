<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light px-4 py-2">
        <a class="navbar-brand" href="/">
            <img alt="Vue logo" src="../assets/logo.png">
        </a>
        <ul>
            <router-link
                v-for="item in navList"
                v-bind:key="item.name"
                tag="li"
                class="nav-item"
                :to="item.link"
            >
                {{ item.name }}
            </router-link>
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

<style scoped lang="scss">
@import "../assets/styles/_custom.scss";

.navbar {
    box-shadow: 0 1px 3px 0 rgb(50 50 93 / 10%), 0 1px 2px 0 rgb(50 50 93 / 6%);

    .router-link-exact-active {
        color: $primary;
    }
}

.navbar-brand img {
    width: 64px;
}

ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
    font-weight: 500;
    cursor: pointer;
}
</style>

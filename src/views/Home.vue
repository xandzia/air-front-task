<template>
    <section class="home container">
        <Accordion :items="getPosts"/>
    </section>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import Accordion from '@/components/Accordion.vue'

export default {
    name: 'Home',
    components: {
        Accordion
    },
    created() {
        this.fetchData()
    },
    methods: {
        ...mapActions(['fetchPosts']),
        fetchData() {
            this.fetchPosts()
        }
    },
    computed: {
        ...mapGetters(['getPosts'])
    }
}
</script>

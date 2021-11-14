<template>
    <section class="container mb-4 table--wrapper">
        <vue-good-table
            :columns="columns"
            :rows="getComments"
            :search-options="searchOptions"
            :pagination-options="pagOptions"
        />
    </section>
</template>

<script>
import 'vue-good-table/dist/vue-good-table.css';
import {VueGoodTable} from 'vue-good-table';
import {mapActions, mapGetters} from "vuex";

export default {
    name: "Table",
    data() {
        return {
            searchOptions: {
                enabled: true,
                placeholder: 'Search this table',
            },
            paginationOptions: {
                enabled: true,
                mode: 'records',
                perPage: 5,
                position: 'bottom',
                perPageDropdown: [10, 15, 20],
                dropdownAllowAll: false,
                setCurrentPage: 1,
                nextLabel: 'next',
                prevLabel: 'prev',
                rowsPerPageLabel: 'Rows per page',
                allLabel: 'All',
            },
            columns: [
                {
                    label: 'Name',
                    field: 'name',
                    width: '20%'
                },
                {
                    label: 'Email',
                    field: 'email',
                    width: '20%'
                },
                {
                    label: 'Body',
                    field: 'body',
                    width: '60%'
                },
            ],
            rows: [
                {id: 1, name: "John", email: '20@@', body: 'gggg'},
                {id: 2, name: "Jane", email: '22@', body: '2hhh'}
            ],
        }
    },
    components: {
        VueGoodTable,
    },
    created() {
        this.fetchData()
    },
    methods: {
        ...mapActions(['fetchComments']),
        fetchData() {
            this.fetchComments()
        }
    },
    computed: {
        ...mapGetters(['getComments']),
        pagOptions() {
            return this.columns.length < 5 ? this.paginationOptions : {enabled: false}
        }
    }
}
</script>

<style lang="scss">
@import "../assets/styles/_custom.scss";

.table--wrapper {
    .vgt-input:focus,
    .vgt-select:focus {
        border-color: $primary;
    }
    .vgt-table thead {
        th:first-child {
            width: 20%;
        }
        th.sorting-asc button:after {
            border-bottom: 5px solid $primary;
        }

        th.sorting-desc button:before {
            border-top: 5px solid $primary;
        }
    }

    .vgt-wrap__footer .footer__navigation__page-btn {
        .chevron.right::after {
            border-left: 6px solid $primary;
        }

        .chevron.left::after {
            border-right: 6px solid $primary;
        }
    }
}
</style>
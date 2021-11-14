<template>
    <section class="container">
        <form class="login-form vgt-inner-wrap">
            <div class="mb-3">
                <label
                    for="inputEmail1"
                    class="form-label"
                >Email address</label>
                <input
                    v-model.trim="formData.email"
                    type="email"
                    class="form-control"
                    id="inputEmail1"
                    aria-describedby="emailHelp"
                >
            </div>
            <div class="mb-3">
                <label
                    for="inputPassword1"
                    class="form-label"
                >Password</label>
                <input
                    v-model="formData.password"
                    type="password"
                    class="form-control"
                    id="inputPassword1"
                >
            </div>
            <button
                type="submit"
                class="btn btn-primary"
                :disabled="disabledBtn"
                @click.prevent="submitForm"
            >Submit
            </button>
        </form>
    </section>
</template>

<script>
import {mapActions} from "vuex";

export default {
    name: "Login",
    data() {
        return {
            formData: {
                email: null,
                password: null
            }
        }
    },
    methods: {
        ...mapActions(['setFormData']),
        submitForm() {
            this.setFormData(this.formData);
            this.$router.push({path: 'table'})
        }
    },
    computed: {
        disabledBtn() {
            return !(this.formData.email && this.formData.password)
        }
    }
}
</script>

<style scoped lang="scss">
.login-form {
    border: 1px solid #dee2e6;
    padding: 1.5rem;
    margin: 0 auto;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    text-align: left;
    max-width: 400px;
    position: relative;
    z-index: 1;

    .btn-primary {
        color: white;
    }
}

.login-form::after {
    z-index: -1;
    content: ' ';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-image: url("../assets/logo.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    opacity: 0.2;
}
</style>
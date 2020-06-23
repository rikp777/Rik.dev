<template>
    <div id="root">
        <div class="fixed-background">
            <main>
                <div class="container">
                    <b-row class="h-100">
                        <b-colxx class="mx-auto my-auto" md="10" xs="6">
                            <b-card class="auth-card" no-body>
                                <div class="position-relative image-side ">
                                    <p class=" text-white h2">MAGIC IS IN THE DETAILS</p>
                                    <p class="white mb-0">Yes, it is indeed!</p>
                                </div>
                                <div class="form-side">
                                    <router-link tag="a" to="/">
                                        <span class="logo-single"/>
                                    </router-link>
                                    <h6 class="mb-4">dasfasd</h6>
                                    <p class="mb-0 text-muted text-small mb-0">
                                        adfasdf
                                    </p>
                                    <p class="display-1 font-weight-bold mb-5">404</p>
                                    <b-button
                                            @click="goBack"
                                            class="btn-shadow"
                                            size="lg"
                                            type="submit"
                                            variant="primary"
                                    >
                                        Home
                                    </b-button>
                                </div>
                            </b-card>
                        </b-colxx>
                    </b-row>
                </div>
            </main>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Error404',
        methods: {
            goBack() {
                this.$router.push("/");
            }
        },
        // mounted: function() {
        //   document.body.classList.add("background");
        // },
        // beforeDestroy() {
        //   document.body.classList.remove("background");
        // }
    };
</script>
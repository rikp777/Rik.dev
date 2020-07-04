<template>
    <div>home</div>
</template>
<script>
    import ApiService from "../../services/api.service";

    export default {
        name: "app",

        data() {
            return {}
        },

        created() {
            ApiService.get("/api/users").then(({data}) => {
                console.log(JSON.stringify(data.users))
            }).catch(() => {
                console.log("fout")
            })
        }
    }
</script>
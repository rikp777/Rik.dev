<template>
    <div :class="getMenuType">
        <top-nav>

        </top-nav>
        <side-bar>

        </side-bar>
        <main>
            <router-view></router-view>
        </main>
        <footer>

        </footer>
    </div>

</template>
<script>
    export default {
        components: {}
    }
</script>

Voeg de menus toe dit is het zelfde bij flowcontrol maar dan splitsen we niet alles op gwn met props
doorgeven hoe en wat een custom pagina met menu voor elke pagina die je wil kan dit geeft je aan in
je route daar staat de layout die hij moet pakken
je moet de mapgetters toevoegen

https://github.com/rikp777/Limax/blob/master/resources/js/views/admin/Index.vue
https://github.com/rikp777/Limax/blob/master/resources/js/store/modules/menu.module.js
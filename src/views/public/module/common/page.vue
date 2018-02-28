<template>
    <div>
        <!-- nav -->
        <fez-header></fez-header>
        <!-- jumbotron -->
        <slot></slot>
        <fez-footer></fez-footer>
    </div>
</template>
<script>
import fezHeader from 'views/public/module/common/header.vue'
import fezFooter from 'views/public/module/common/footer.vue'

export default {
    components: {
        fezHeader,
        fezFooter
    }
}
</script>

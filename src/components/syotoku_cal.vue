<template>
    <p v-if="syotoku === 'kyuyo'">{{ calKyuyo }}</p>
    <p v-else-if="syotoku === 'nenkin'">{{ calNenkin }}</p>
</template>


<script>
import Syotoku from '../mixins/syotoku.js'

export default {
    props: {
        syotoku: {
            type: String,
            required: true,
        },
        value: {},
    },
    mixins: [Syotoku],
}
</script>
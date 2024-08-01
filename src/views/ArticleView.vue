<template>
    <h1>{{id}}</h1>
</template>

<script>
import { onMounted } from 'vue'
export default {
    props: ['id'],
    setup(props) {
        
        onMounted(() => {
            console.log(props);
        })
    },
}
</script>
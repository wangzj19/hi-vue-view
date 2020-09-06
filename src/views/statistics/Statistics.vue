<template>
    <div>
        <h4>Statistics！</h4>
        <test-chart></test-chart>
    </div>
</template>

<script>
import TestChart from '../../charts/index.vue'
export default {
    name : 'Statistics',
    components:{
        TestChart,
    }
}
</script>
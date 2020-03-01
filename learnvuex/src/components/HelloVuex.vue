<template>
    <div>
      <h2>{{$store.state.counter}}</h2>
      <h2>{{$store.getters.more18Students}}</h2>
    </div>
</template>

<script>
    export default {
        name: "HelloVuex"
    }
</script>

<style scoped>

</style>

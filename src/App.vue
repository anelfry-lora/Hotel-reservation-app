<template>
	<Navbar/>
	<router-view></router-view>
</template>

<script setup lang="ts">
import Navbar from './partials/Navbar.vue'
</script>

<style scoped>
.app {
	margin: 0 auto;
	padding: 20px;
}
</style>

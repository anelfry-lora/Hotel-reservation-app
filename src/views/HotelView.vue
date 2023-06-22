<template>
	<div>
	<h2>List Hotel</h2>
		<div class="filters">
			<label for="customerType">Customer Type:</label>
			<select id="customerType" v-model="customerType">
				<option value="regular">Regular</option>
				<option value="reward">Reward</option>
			</select>
		</div>
		
		<div class="cards">
			<HotelCard
				:type="customerType"
				v-for="hotel in store.getHotels"
				:key="hotel.name"
				:hotel="hotel"
				:reservation="false" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useHotelStore } from "../store/hotel";
import HotelCard from "../components/HotelCard.vue";

const store = useHotelStore();
const customerType = ref("regular");

store.setCheapestHotel(null);

</script>
<style scoped>

</style>

<template>
	<h2>Reservation {{ route.params.name }}</h2>
	<div class="filters">
		<label for="customerType">Customer Type:</label>
		<select id="customerType" v-model="customerType">
			<option value="regular">Regular</option>
			<option value="reward">Reward</option>
		</select>

		<label for="date1" class="form-date-label">From:</label>
		<input class="form-date-input" type="date" id="date1" v-model="date1" />
		<label for="date2" class="form-date-label">To:</label>
		<input class="form-date-input" type="date" id="date2" v-model="date2" />
	</div>

	<div class="cards">
		<HotelCard :type="customerType" :hotel="findHotel[0]" :reservation="true"/>
	</div>
	<button @click="getReservation()">Reservar</button>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref } from "vue";
import { useHotelStore } from "../store/hotel";
import HotelCard from "../components/HotelCard.vue";

const store = useHotelStore();
const route = useRoute();

const customerType = ref("regular");
const date1 = ref("");
const date2 = ref("");

const findHotel = store.hotels.filter(
	(hotel) => hotel.name === route.params.name
);

const startDate = new Date(date1.value);
const endDate = new Date(date2.value);
let totalPrice = 0;

for (
	let date = new Date(startDate);
	date <= endDate;
	date.setDate(date.getDate() + 1)
) {
	const dayOfWeek = date.getDay();
	const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

	if (customerType.value === "regular") {
		totalPrice += isWeekend
			? findHotel[0].rates.regular.weekend
			: findHotel[0].rates.regular.weekday;
	} else {
		totalPrice += isWeekend
			? findHotel[0].rates.reward.weekend
			: findHotel[0].rates.reward.weekday;
	}
}

store.setCheapestHotel(findHotel[0]);

// const hotel = findHotel;

const getReservation = () => {
	console.log(store.hotels);
};


</script>

<style scoped></style>

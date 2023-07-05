<template>
	<div  class="container">
		<h2>Cheapest Hotel</h2>
		<div class="filters">
			<div>
				<label for="customerType">Customer Type:</label>
				<select id="customerType" v-model="customerType">
					<option value="regular">Regular</option>
					<option value="reward">Reward</option>
				</select>
			</div>

			<div>
				<label for="date1" class="form-date-label">From:</label>
				<input
					class="form-date-input"
					type="date"
					id="date1"
					v-model="date1" />
			</div>
			<div>
				<label for="date2" class="form-date-label">To:</label>
				<input
					class="form-date-input"
					type="date"
					id="date2"
					v-model="date2" />
			</div>

			<div>
				<button class="button" @click="findCheapestHotel()">
					Find Cheapest Hotel
				</button>
			</div>
		</div>

		<div class="cards" v-if="!store.cheapestHotel">
			<HotelCard
				:type="customerType"
				v-for="hotel in store.getHotels"
				:key="hotel.name"
				:hotel="hotel"
				:reservation="false" />
		</div>
		<div v-else>
			<HotelCard
				:type="customerType"
				:hotel="store.cheapestHotel"
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
const date1 = ref("");
const date2 = ref("");

const findCheapestHotel = () => {
	const cheapestHotel = store.findCheapestHotel(
		customerType.value,
		date1.value,
		date2.value
	);
	store.setCheapestHotel(cheapestHotel);
};
</script>
<style scoped>
.form-date-label {
	line-height: 24px;
	padding-bottom: 8px;
	margin-left: 3%;
	margin-right: 1%;
	
}

.form-date-input[type="date"] {
	appearance: none;
	line-height: 24px;
	border: 1px solid #ecf0f1;
	background: #4a4a4a;
	display: inline-block;
	visibility: visible;
	/* width: 140px; */
	/* padding: 4px; */
	position: relative;
	padding: 10px;
	width: 250px;
	/* border: none; */
	border-radius: 0.2em;
}

.form-date-input[type="date"]::-webkit-calendar-picker-indicator {
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	color: transparent;
	background: 0 0;
	margin: 0;
	opacity: 0;
	padding: 10px;
	pointer-events: auto;
}

.form-date-input[type="date"]::-webkit-date-and-time-value {
	margin: 0;
}

.form-date-input[type="date"] {
	border: 0;
	margin: 0;
	border-radius: 0.2em;
	padding: 7px;
	box-shadow: none;
	-webkit-appearance: none;
}

.form-date-input[type="date"]::-webkit-inner-spin-button,
.form-date-input[type="date"]::-webkit-outer-spin-button,
.form-date-input[type="date"]::-webkit-clear-button {
	-webkit-appearance: none;
	display: none;
}

.form-date-input[type="date"]::-webkit-datetime-edit-month-field {
	padding: 0;
}
.form-date-input[type="date"]::-webkit-datetime-edit-day-field {
	padding: 0;
}
.form-date-input[type="date"]::-webkit-datetime-edit-year-field {
	padding: 0;
}

.form-date-input[type="date"]::-webkit-datetime-edit-fields-wrapper {
	padding: 0;
}
</style>

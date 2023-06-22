<template>
	<!-- <pre>{{ props.hotel.totalPrice }}</pre> -->
	<div class="card">
		<img
			class="img-card"
			src="https://majestichotelgroup.com/web/majestic/homepage/slider_principal/00-hotel-majestic-barcelona.jpg"
			alt="hotel"
			style="width: 100%; height: 150px; border-radius: 0.4em" />
		<div class="card-content">
			<h3>
				{{ props.hotel.name }}
				<span
					v-for="star in props.hotel.rating"
					:key="star"
					class="star">
					★
				</span>
			</h3>
			<div>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
				impedit odio obcaecati expedita sed perferendis iste. Dicta
				exercitationem cum nesciunt, alias, ipsum natus totam sunt quas,
				architecto doloribus modi cumque?
			</div>
			<div class="prices">
				<div class="card-text" v-if="props.type == 'regular'">
					Regular Weekday: {{ props.hotel.rates.regular.weekday }}$
					<br />
					Regular Weekend: {{ props.hotel.rates.regular.weekend }}$
				</div>
				<div class="card-text" v-else>
					Reward Weekday: {{ props.hotel.rates.reward.weekday }}$
					<br />
					Reward Weekend: {{ props.hotel.rates.reward.weekend }}$
				</div>
			</div>
			<div v-if="props.hotel.totalPrice">
				Total price: {{ props.hotel.totalPrice }}$
			</div>

			<router-link
				:to="{
					name: 'Reservation',
					params: { name: props.hotel.name },
				}">
				<button
					class="btn-reservation button"
					v-if="!props.reservation">
					Reservation
				</button>
			</router-link>
		</div>
	</div>
</template>

<script setup lang="ts">
interface Props {
	hotel: {
		name: string;
		rating: number;
		rates: {
			regular: {
				weekday: number;
				weekend: number;
			};
			reward: {
				weekday: number;
				weekend: number;
			};
		};
		totalPrice?: number
	};
	type: String;
	reservation: Boolean;
}

const props = defineProps<Props>();
</script>

<style scoped>
.star {
	display: inline-block;
	width: 16px;
	height: 16px;
	color: gold;
	border-radius: 50%;
}
.prices {
	color: #ffffff;
}
.btn-reservation {
	margin: auto;
	margin-top: 1em;
	background-color: #00559f;
	color: #ffffff;
}
.btn-reservation:hover {
	background-color: #005cac;
}
.card-text {
	padding: 15px 0;
}
</style>

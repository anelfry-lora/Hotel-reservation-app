<template>
	<div class="nav">
		<nav class="navbar">
			<div class="logo">HotelApp</div>
			<ul class="nav-links">
				<div class="menu">
					<li>
						<router-link to="/"> Home </router-link>
					</li>
					<li>
						<router-link to="/cheapest-hotel">
							Cheapest Hotel
						</router-link>
					</li>
				</div>
			</ul>
		</nav>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped>
.nav {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
.navbar {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px;
	/* background-color: teal; */
	color: #fff;
}

.nav-links a {
	color: #fff;
}

.logo {
	font-size: 32px;
}

.menu {
	display: flex;
	gap: 1em;
	font-size: 18px;
}

.menu li:hover {
	background-color: #575757;
	border-radius: 0.2em;
	transition: 0.3s ease;
}

.menu li {
	background-color: #434343;
	border-radius: 0.2em;
	padding: 5px 14px;
	list-style: none;
}
</style>

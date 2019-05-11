<template>
	<div>
		<router-link class='zjt' to='' tag='div'>
			<router-link to='' class='zjt-top' tag='div'>
				<router-link to='' class='zjt-top-img'>
					<img src="../assets/index_03.png"/>
					<p>二手房</p>
				</router-link>
				<router-link to='' class='zjt-top-img'>
					<img src="../assets/index_05.png"/>
					<p>新房</p>
				</router-link>
				<router-link to='/ydfz' class='zjt-top-img'>
					<img src="../assets/index_07.png"/>
					<p>租房</p>
				</router-link>
				<router-link to='/ydfz' class='zjt-top-img'>
					<img src="../assets/index_09.png"/>
					<p>卖房</p>
				</router-link>
			</router-link>
		</router-link>
	</div>
</template>

<script>
</script>

<style>
	.zjt{
		margin-top: -0.3rem;
		width: 100%;
		}
	.zjt-top{
		width: 100%;
		height: 8rem;
		background: #FF8A00;
		text-align: center;
		display: flex;
		text-decoration: none;
	}
	.zjt-top-img{
		width: 25%;
		color: white;
		
	}
	.zjt-top-img>img{
		width: 4rem;
		height: 4rem;
		padding-top: 1.5rem;
	}
	a{
		text-decoration: none;
	}
</style>
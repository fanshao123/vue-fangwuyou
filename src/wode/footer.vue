<template>
	<div class="wod-fot">
		<router-link to='' tag='div' class='wod-fot-hang'>
			<div class="wod-fot-hang-img"><img src="../assets/icon1.png"/></div>
			<div class="wod-fot-hang-you">
				<div><b>我关注的房源</b></div>
				<div class="wod-fot-hang-you-jt"><img src="../assets/right.png"/></div>
			</div>
		</router-link>
		<router-link to='/xiaoqu' tag='div' class='wod-fot-hang'>
			<div class="wod-fot-hang-img"><img src="../assets/icon2.png"/></div>
			<div class="wod-fot-hang-you">
				<div><b>我关注的小区</b></div>
				<div class="wod-fot-hang-you-jt"><img src="../assets/right.png"/></div>
			</div>
		</router-link>
		<router-link to='' tag='div' class='wod-fot-hang'>
			<div class="wod-fot-hang-img"><img src="../assets/icon3.png"/></div>
			<div class="wod-fot-hang-you">
				<div><b>我关注的新房</b></div>
				<div class="wod-fot-hang-you-jt"><img src="../assets/right.png"/></div>
			</div>
		</router-link>
		<router-link to='' tag='div' class='wod-fot-hang'>
			<div class="wod-fot-hang-img"><img src="../assets/icon4.png"/></div>
			<div class="wod-fot-hang-you">
				<div><b>我的看房记录</b></div>
				<div class="wod-fot-hang-you-jt"><img src="../assets/right.png"/></div>
			</div>
		</router-link>
	</div>
</template>

<script>
</script>

<style>
	.wod-fot{
		width: 100%;
		height: 20rem;
		margin-top: 1rem;
		background: white;
	}
	.wod-fot-hang{
		width: 100%;
		height: 4rem;
		/*border: 1px solid red;*/
		display: flex;
	}
	.wod-fot-hang-img{
		width: 20%;
		height: 100%;
		margin-right: 0rem;
		/*border: 1px solid red;*/
	}
	.wod-fot-hang-img>img{
		margin-top: 1rem;
		margin-left: 3rem;
		width: 2.2rem;
		height: 2.2rem;
	}
	.wod-fot-hang-you{
		width: 80%;
		height: 100%;
		display: flex;
		border-bottom: 1px solid #F0F0F0;
		/*margin-left: 2rem;*/
		line-height: 4rem;
		font-size: 1.6rem;
	}
	.wod-fot-hang-you-jt{
		margin-left: 50%;
		margin-top: 0.5rem;
	}
	.wod-fot-hang-you-jt>img{
		width: 1rem;
		height: 2rem;
	}
</style>
<template>
	<div class="wodeydl">
		<div class="wodeydl-fot">
		<router-link to='' tag='div' class='wodeydl-fot-hang'>
		
			<div class="wodeydl-fot-hang-you">
				<div><b>我关注的房源</b></div>
				<div class="wodeydl-fot-hang-you-jt"><img src="../assets/right.png"/></div>
			</div>
		</router-link>
		<router-link to='/xiaoqu' tag='div' class='wodeydl-fot-hang'>
		<div class="wodeydl-fot-hang-you">
				<div><b>我关注的小区</b></div>
				<div class="wodeydl-fot-hang-you-jt"><img src="../assets/right.png"/></div>
			</div>
		</router-link>
		<router-link to='' tag='div' class='wodeydl-fot-hang'>
		<div class="wodeydl-fot-hang-you">
				<div><b>我关注的新房</b></div>
				<div class="wodeydl-fot-hang-you-jt"><img src="../assets/right.png"/></div>
			</div>
		</router-link>
		<router-link to='' tag='div' class='wodeydl-fot-hang'>
			<div class="wodeydl-fot-hang-you">
				<div><b>我的看房记录</b></div>
				<div class="wodeydl-fot-hang-you-jt"><img src="../assets/right.png"/></div>
			</div>
		</router-link>
		<router-link to='/dl' class='wodeydl-fot-tc' tag='div'>退出登录</router-link>
	</div>
	</div>
</template>

<script>
</script>

<style>
	
	.wodeydl{
		width: 100%;
		height: 50rem;
		background: #F0EFED;
	}
	.wodeydl-fot{
		width: 100%;
		height: 16rem;
		margin-top: 1rem;
		background: white;
	}
	.wodeydl-fot-hang{
		width: 100%;
		height: 4rem;
		/*border: 1px solid red;*/
		display: flex;
	}
	.wodeydl-fot-hang-img{
		width: 20%;
		height: 100%;
		margin-right: 0rem;
		/*border: 1px solid red;*/
	}
	.wodeydl-fot-hang-img>img{
		margin-top: 1rem;
		margin-left: 3rem;
		width: 2.2rem;
		height: 2.2rem;
	}
	.wodeydl-fot-hang-you{
		width: 80%;
		height: 100%;
		display: flex;
		border-bottom: 1px solid #F0F0F0;
		/*margin-left: 2rem;*/
		line-height: 4rem;
		font-size: 1.6rem;
		margin-left: 10%;
	}
	.wodeydl-fot-hang-you-jt{
		margin-left: 60%;
		margin-top: 0.5rem;
	}
	.wodeydl-fot-hang-you-jt>img{
		width: 1rem;
		height: 2rem;
	}
	.wodeydl-fot-tc{
		width: 80%;
		height: 3rem;
		margin: 3rem auto;
		text-align: center;
		line-height: 3rem;
		color: #FF9013;
		background: white;
		border: 0.1rem solid #D7D7D6;
		font-size: 1.5rem;
	}
</style>
<template>
	<div class="xiaoqu-bew">
		<div class="xiaoqu-bew-top">
		 	<router-link to='/' tag='div' class='xiaoqu-bew-top-wz'>首页</router-link>
		 	<p class="xiaoqu-bew-top-img"><img src="../assets/right.png"/></p>
		 	<router-link to='/wode' tag='div' class='xiaoqu-bew-top-wz'>我的</router-link>
		 	<p class="xiaoqu-bew-top-img"><img src="../assets/right.png"/></p>
		 	<router-link to='/xiaoqu' tag='div' class='xiaoqu-bew-top-wz xiaoqu-bew-top-wz1'>我关注的小区</router-link>
		 </div>
	</div>
</template>

<script>
</script>

<style>
	.xiaoqu-bew{
		width: 100%;
		/*height: 70rem;*/
		background: #F0EFED;
		
	}
	.xiaoqu-bew-top{
		width: 100%;
		height: 4rem;
		border-bottom: 0.1rem solid #EAEAEA;
		display: flex;
		background: white;
	}
	.xiaoqu-bew-top-wz{
		width: 4rem;
		height: 4rem;
		text-align: center;
		line-height: 4rem;
		font-size: 1.5rem;
	}
	.xiaoqu-bew-top-wz1{
		width: 8rem;
	}
	.xiaoqu-bew-top-img{
		width: 1rem;
		height: 4rem;
	}
	.xiaoqu-bew-top-img>img{
		width: 1rem;
		height: 2rem;
		margin-top: 1rem;
	}
</style>
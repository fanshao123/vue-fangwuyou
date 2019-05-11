<template>
	<div class="fzxq-bew">
		<div class="fzxq-bew-top">
		 	<router-link to='/' tag='div' class='fzxq-bew-top-wz'>首页</router-link>
		 	<p class="fzxq-bew-top-img"><img src="../assets/right.png"/></p>
		 	<router-link to='/xq' tag='div' class='fzxq-bew-top-wz fzxq-bew-top-wz2'>北京房租</router-link>
		 	<p class="fzxq-bew-top-img"><img src="../assets/right.png"/></p>
		 	<router-link to='/fzxq' tag='div' class='fzxq-bew-top-wz fzxq-bew-top-wz2'>房源信息</router-link>
		 </div>
	</div>
</template>

<script>
</script>

<style>
	.fzxq-bew{
		width: 100%;
		/*height: 70rem;*/
		background: #F0EFED;
		
	}
	.fzxq-bew-top{
		width: 100%;
		height: 4rem;
		border-bottom: 0.1rem solid #EAEAEA;
		display: flex;
		background: white;
	}
	.fzxq-bew-top-wz{
		width: 4rem;
		height: 4rem;
		text-align: center;
		line-height: 4rem;
		font-size: 1.5rem;
	}
	.fzxq-bew-top-wz2{
		width: 6rem;
	}
	.fzxq-bew-top-img{
		width: 1rem;
		height: 4rem;
	}
	.fzxq-bew-top-img>img{
		width: 1rem;
		height: 2rem;
		margin-top: 1rem;
	}
</style>
<template>
	<div class="ydfz-bew">
		<div class="ydfz-bew-top">
		 	<router-link to='/' tag='div' class='ydfz-bew-top-wz'>首页</router-link>
		 	<p class="ydfz-bew-top-img"><img src="../assets/right.png"/></p>
		 	<router-link to='/wode' tag='div' class='ydfz-bew-top-wz'>北京房租</router-link>
		 </div>
		<div class="ydfz-bew-bew">
		 	<div class="ydfz-bew-bew-input">
		 		<input type="text" name="" id="" value="" />
		 	</div>
		 	<div class="ydfz-bew-bew-ss">
		 		<router-link to='' tag='span'></router-link>
		 	</div>
		</div>
		 
	</div>
</template>

<script>
</script>

<style>
	.ydfz-bew{
		width: 100%;
		/*height: 70rem;*/
		background: #F0EFED;
		
	}
	.ydfz-bew-top{
		width: 100%;
		height: 4rem;
		border-bottom: 0.1rem solid #EAEAEA;
		display: flex;
		background: white;
	}
	.ydfz-bew-top-wz{
		width: 6rem;
		height: 4rem;
		text-align: center;
		line-height: 4rem;
		font-size: 1.5rem;
	}
	.ydfz-bew-top-img{
		width: 1rem;
		height: 4rem;
	}
	.ydfz-bew-top-img>img{
		width: 1rem;
		height: 2rem;
		margin-top: 1rem;
	}
	
	.ydfz-bew-bew{
		width: 90%;
		height: 4rem;
		border: 0.1rem solid #D0D0D0;
		margin: 2rem auto;
		background: white;
		display: flex;
	}
	.ydfz-bew-bew-input{
		width: 80%;
		height: 100%;
		
	}
	.ydfz-bew-bew-input>input{
		width: 95%;
		height: 3rem;
		margin-top: 0.5rem;
		margin-left: 5%;
		border: 0rem;
		border-right: 0.1rem solid #D0D0D0;
		outline: none;
	
	}
	.ydfz-bew-bew-ss{
		width: 20%;
		height: 100%;
	}.ydfz-bew-bew-ss>span{
		display: inline-block;
		width: 2.5rem;
		height: 2.7rem;
		background: url(../assets/search.png) no-repeat;
		background-size: cover;
		margin-top: 0.45rem;
		margin-left: 1.5rem;
	}
</style>
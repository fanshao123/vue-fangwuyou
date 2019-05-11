<template>
	<div class="wodeydl-bew">
		<div class="wodeydl-bew-top">
		 	<router-link to='/' tag='div' class='wodeydl-bew-top-wz'>首页</router-link>
		 	<p class="wodeydl-bew-top-img"><img src="../assets/right.png"/></p>
		 	<router-link to='/wode' tag='div' class='wodeydl-bew-top-wz'>我的</router-link>
		 </div>
		 <div class="wodeydl-bew-bew">
		 	<div class="wodeydl-top-logo">
		</div>
	    <div class="wodeydl-top-dlogo">
	    	<img src="../assets/urse2.png"/>
	    </div>
	    <router-link to=''tag='div' class='wodeydl-top-dl'>欢迎您 , 17630755230</router-link>
		 </div>
	</div>
</template>

<script>
</script>

<style>
	.wodeydl-bew{
		width: 100%;
		/*height: 70rem;*/
		background: #F0EFED;
		
	}
	.wodeydl-bew-top{
		width: 100%;
		height: 4rem;
		border-bottom: 0.1rem solid #EAEAEA;
		display: flex;
		background: white;
	}
	.wodeydl-bew-top-wz{
		width: 4rem;
		height: 4rem;
		text-align: center;
		line-height: 4rem;
		font-size: 1.5rem;
	}
	.wodeydl-bew-top-wz1{
			width: 7rem;
	}
	.wodeydl-bew-top-img{
		width: 1rem;
		height: 4rem;
	}
	.wodeydl-bew-top-img>img{
		width: 1rem;
		height: 2rem;
		margin-top: 1rem;
	}
	/*xiamiam*/
	.wodeydl-bew-bew{
		width: 100%;
		height: 16rem;
	  	background: url(../assets/bg2.png) no-repeat;
	  	background-size: cover;
		position: relative;
	}
	a{
		text-decoration: none;
		color: white;
	}
	.wodeydl-top-dlogo{
		width: 6rem;
		height: 6rem;
		position: absolute;
		top: 50%;
		margin-top: -5rem;
		left: 50%;
		margin-left: -3rem;
	}
	.wodeydl-top-dlogo>img{
		width: 6rem;
		height: 6rem;
	}
	.wodeydl-top-dl{
		width: 16rem;
		height: 2.5rem;
		text-align: center;
		color: white;
		position: absolute;
		line-height: 2.5rem;
		left: 50%;
		margin-left: -8rem;
		top: 50%;
		margin-top: 2rem;
		font-size: 1.8rem;
	}
</style>
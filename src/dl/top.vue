<template>
	<div class="dl-top">
		<nav class="dl-top-nav">
			<router-link to="/" tag='div' class="dl-top-nav-logo"><img src="../assets/logo12.png"/></router-link>
			<div class="dl-top-nav-didian">
				<p>北京 v</p>
			</div>
			<div class="dl-top-nav-you">
				<router-link to='/wode'class="dl-top-nav-you-wd">
					<img src="../assets/urse.png"/>
					<p>我的</p>
				</router-link>
				<router-link to=''class="dl-top-nav-you-app">
					<img src="../assets/down.png"/>
					<p>app</p>
				</router-link>
				
			</div>
		</nav>
	</div>
</template>

<script>
</script>

<style>
	.dl-top{
		width: 100%;
		height:6rem;
		/*border: 1px solid red;*/
	}
	.dl-top-nav{
		width: 100%;
		height: 6rem;
		display: flex;
		background: #FF8A00;
	}
	.dl-top-nav-logo{
		width: 9rem;
		height: 100%;
	}
	.dl-top-nav-logo>img{
		margin-top: 2rem;
		margin-left: 1rem;
		width: 7rem;
		height: 2.5rem;
	}
	.dl-top-nav-didian{
		width: 5rem;
		height: 100%;
		color: white;
		font-size: 1.7rem;
		text-align: center;
		line-height: 6rem;
	}
	.dl-top-nav-you{
		width: 9rem;
		height: 100%;
		
		margin-left: 8rem;
		display: flex;
		font-size: 1.3rem;
	}
	.dl-top-nav-you-wd{
		margin-top: 1rem;
	}
	.dl-top-nav-you-app{
		margin-top: 1rem;
	}
	.dl-top-nav-you>a{
		color: white;
		margin-left: 2rem;
	}
	.dl-top-nav-you>a>img{
		width: 2rem;
		height: 2rem;
	}
	
</style>
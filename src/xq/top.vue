<template>
	<div class="xq-top">
		<nav class="xq-top-nav">
			<router-link to="/" tag='div' class="xq-top-nav-logo"><img src="../assets/logo12.png"/></router-link>
			<div class="xq-top-nav-you">
				<router-link to='/wode'class="xq-top-nav-you-wd">
					<img src="../assets/urse.png"/>
					<p>我的</p>
				</router-link>
				<router-link to=''class="xq-top-nav-you-app">
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
	.xq-top{
		width: 100%;
		height:6rem;
		/*border: 1px solid red;*/
	}
	.xq-top-nav{
		width: 100%;
		height: 6rem;
		display: flex;
		background: #FF8A00;
	}
	.xq-top-nav-logo{
		width: 9rem;
		height: 100%;
	}
	.xq-top-nav-logo>img{
		margin-top: 2rem;
		margin-left: 1rem;
		width: 7rem;
		height: 2.5rem;
	}
	.xq-top-nav-you{
		width: 9rem;
		height: 100%;
		
		margin-left: 12rem;
		display: flex;
		font-size: 1.3rem;
	}
	.xq-top-nav-you-wd{
		margin-top: 1rem;
	}
	.xq-top-nav-you-app{
		margin-top: 1rem;
	}
	.xq-top-nav-you>a{
		color: white;
		margin-left: 2rem;
	}
	.xq-top-nav-you>a>img{
		width: 2rem;
		height: 2rem;
	}
</style>
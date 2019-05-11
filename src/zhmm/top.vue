<template>
	<div class="zhmm-top">
		<nav class="zhmm-top-nav">
			<router-link to="/" tag='div' class="zhmm-top-nav-logo"><img src="../assets/logo12.png"/></router-link>
			<div class="zhmm-top-nav-didian">
				<p>北京 v</p>
			</div>
			<div class="zhmm-top-nav-you">
				<router-link to='/wode'class="zhmm-top-nav-you-wd">
					<img src="../assets/urse.png"/>
					<p>我的</p>
				</router-link>
				<router-link to=''class="zhmm-top-nav-you-app">
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
	.zhmm-top{
		width: 100%;
		height:6rem;
		/*border: 1px solid red;*/
	}
	.zhmm-top-nav{
		width: 100%;
		height: 6rem;
		display: flex;
		background: #FF8A00;
	}
	.zhmm-top-nav-logo{
		width: 9rem;
		height: 100%;
	}
	.zhmm-top-nav-logo>img{
		margin-top: 2rem;
		margin-left: 1rem;
		width: 7rem;
		height: 2.5rem;
	}
	.zhmm-top-nav-didian{
		width: 5rem;
		height: 100%;
		color: white;
		font-size: 1.7rem;
		text-align: center;
		line-height: 6rem;
	}
	.zhmm-top-nav-you{
		width: 9rem;
		height: 100%;
		
		margin-left: 8rem;
		display: flex;
		font-size: 1.3rem;
	}
	.zhmm-top-nav-you-wd{
		margin-top: 1rem;
	}
	.zhmm-top-nav-you-app{
		margin-top: 1rem;
	}
	.zhmm-top-nav-you>a{
		color: white;
		margin-left: 2rem;
	}
	.zhmm-top-nav-you>a>img{
		width: 2rem;
		height: 2rem;
	}
</style>
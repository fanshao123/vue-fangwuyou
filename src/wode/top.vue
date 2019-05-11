<template>
	<div class="wode-top">
		<div class="wode-top-logo">
			 <div class="wode-wd">
	     	 	<router-link to="/wode">
	     	 		<img src="../assets/urse.png"/>
	     	 		<p>我的</p>
	     	 	</router-link>
	     	 </div>
	     	 <div class="wode-app">
	     	 	   <router-link to=''>
	     	 	   	<img src="../assets/down.png"/>
	     	 	   	<p>App</p>
	     	 	   </router-link>
	     	  </div>
		</div>
	    <div class="wode-top-dlogo">
	    	<img src="../assets/logo.png"/>
	    </div>
	    <router-link to='/dl'tag='div' class='wode-top-dl'>登录</router-link>
	</div>
</template>

<script>
</script>

<style>
	.wode-top{
		width: 100%;
		height: 20rem;
	  	background: url(../assets/bg1.png) no-repeat;
	  	background-size: cover;
		position: relative;
	}
	.wode-top-logo{
		position: absolute;
		right: 0px;
		height:6rem;
		width:10rem;
		/*border:1px solid red;*/
		display: flex;
		
	}
	.wode-top-logo>div{
		margin-left: 2rem;
		margin-top: 1rem;
	}
	.wode-top-logo>div>a>img{
		width: 2rem;
		height: 2rem;
	}
	a{
		text-decoration: none;
		color: white;
	}
	.wode-top-dlogo{
		width: 6rem;
		height: 6rem;
		position: absolute;
		top: 50%;
		margin-top: -3rem;
		left: 50%;
		margin-left: -3rem;
	}
	.wode-top-dlogo>img{
		width: 6rem;
		height: 6rem;
	}
	.wode-top-dl{
		width: 6rem;
		height: 2.5rem;
		text-align: center;
		color: white;
		border: 0.1rem solid white;
		position: absolute;
		line-height: 2.5rem;
		left: 50%;
		margin-left: -3rem;
		top: 50%;
		margin-top: 4rem;
	}
</style>
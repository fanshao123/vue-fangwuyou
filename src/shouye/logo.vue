<template>
	<div >
		<nav>
     	 <div class="logo">
     	 	 <router-link to=""><img src="../assets/logo.jpg"/></router-link>
     	 </div>
     	 <div class="logo-you">
	     	 <div class="nav-wd">
	     	 	<router-link to="/wode">
	     	 		<img src="../assets/my.jpg"/>
	     	 	</router-link>
	     	 </div>
	     	 <div class="nav-app">
	     	 	   <router-link to=''>
	     	 	   	<img src="../assets/xiazai.jpg"/>
	     	 	   </router-link>
	     	  </div>
     	 </div>
     </nav>
	</div>
</template>

<script>
</script>

<style>

 nav{
 	width: 100%;
 	height: 6rem;
 	background: #FF8A00;
 
 }
 nav>div{
 	float: left;
 	width: 2rem;
 	height: 3px;
 	padding-top: 0.5rem;
 }
 .logo{
 	margin-left: 1rem;
 	padding-top: 1rem;
 }
 .logo>a>img{
 	width: 8rem;
 	height: 4rem;
 }
.logo-you{
	float: right;
	width: 10rem;
	height: 85%;
	display: flex;
}
 .nav-wd{
 	margin-left: 2rem;
 	
 }
 .nav-wd>a>img{
 	margin-top: 0.5rem;
 	width: 3rem;
 	height: 4rem;
 }
 .nav-app{
 	margin-left: 0.5rem;
 	
 }
 .nav-app>a>img{
 	margin-top: 0.5rem;
 	width: 3rem;
 	height: 4rem;
 }
</style>
<template>
	<div class="dl-bew">
		 <div class="dl-bew-top">
		 	<router-link to='/' tag='div' class='dl-bew-top-wz'>首页</router-link>
		 	<p class="dl-bew-top-img"><img src="../assets/right.png"/></p>
		 	<router-link to='/wode' tag='div' class='dl-bew-top-wz'>我的</router-link>
		 	<p class="dl-bew-top-img"><img src="../assets/right.png"/></p>
		 	<router-link to='/dl' tag='div' class='dl-bew-top-wz'>登录</router-link>
		 </div>
		 <div class="dl-bew-bew">
		 	<router-link to='/dl'name='ptdl'>普通登录</router-link>
		 	<router-link to='/dl/kj'>验证码快捷登录</router-link>
		 </div>
		 <div>
		 	<router-view></router-view>
		 </div>
		 <div class="dl-bew-footer">
		 	<router-link to='/zc' class='dl-bew-footer-dl'>立即注册</router-link>
		 	<router-link to='/zhmm'class='dl-bew-footer-mm'>忘记密码</router-link>
		 </div>
	</div>
</template>

<script>
	import dl1 from './tiaozhuan/dl';
	import kj from './tiaozhuan/kj'
</script>

<style>
	.dl-bew{
		width: 100%;
		height: 70rem;
		background: #F0EFED;
		
	}
	.dl-bew-top{
		width: 100%;
		height: 4rem;
		border-bottom: 0.1rem solid #EAEAEA;
		display: flex;
		background: white;
	}
	.dl-bew-top-wz{
		width: 4rem;
		height: 4rem;
		text-align: center;
		line-height: 4rem;
		font-size: 1.5rem;
	}
	.dl-bew-top-img{
		width: 1rem;
		height: 4rem;
	}
	.dl-bew-top-img>img{
		width: 1rem;
		height: 2rem;
		margin-top: 1rem;
	}
	.dl-bew-bew{
		width: 100%;
		height: 4rem;
		/*border: 1px solid red;*/
		display: flex;
		text-align: center;
		background: white;
		font-size: 1.5rem;
	}
	.dl-bew-bew>a{
		width: 50%;
		height: 4rem;
		line-height: 4rem;
		color: black;
	}
	.dl-bew-bew>.router-link-exact-active{
		border-bottom: 0.3rem solid #FEBC6E;
	}
	.dl-bew-footer{
		margin-top: 2rem;
		width: 90%;
		margin-left: 5%;
		font-size: 1rem;
	}
	.dl-bew-footer-dl{
		float: left;
		color: #FF8A00;
	}
	.dl-bew-footer-mm{
		float: right;
	}
</style>
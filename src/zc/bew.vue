<template>
	<div class="zc-bew">
		 <div class="zc-bew-top">
		 	<router-link to='/' tag='div' class='zc-bew-top-wz'>首页</router-link>
		 	<p class="zc-bew-top-img"><img src="../assets/right.png"/></p>
		 	<router-link to='/wode' tag='div' class='zc-bew-top-wz'>我的</router-link>
		 		<p class="zc-bew-top-img"><img src="../assets/right.png"/></p>
		 	<router-link to='/zc' tag='div' class='zc-bew-top-wz'>注册</router-link>
		 </div>
		 <div class="zc-dl">
			 	<div class="zc-dl-top">
				<div class="zc-dl-zh">
					<input type="text" name="" id="" value="" placeholder="请输入手机号"/>
					<router-link to=''tag='div'>发送验证</router-link>
				</div>
				<div class="zc-dl-mima">
					<input type="text" name="" id="" value="" placeholder="请输入短信中的验证码"/>
				</div>
				<div class="zc-dl-mima">
					<input type="text" name="" id="" value="" placeholder="请输入新密码"/>
				</div>
				
			</div>
			<router-link to='/dl' tag='div' class='zc-dl-anniu'>
			      注册
			</router-link>
		 </div>
	</div>
</template>

<script>
</script>

<style>
	.zc-bew{
		width: 100%;
		height: 70rem;
		background: #F0EFED;
		
	}
	.zc-bew-top{
		width: 100%;
		height: 4rem;
		border-bottom: 0.1rem solid #EAEAEA;
		display: flex;
		background: white;
	}
	.zc-bew-top-wz{
		width: 4rem;
		height: 4rem;
		text-align: center;
		line-height: 4rem;
		font-size: 1.5rem;
	}
	.zc-bew-top-wz1{
			width: 7rem;
	}
	.zc-bew-top-img{
		width: 1rem;
		height: 4rem;
	}
	.zc-bew-top-img>img{
		width: 1rem;
		height: 2rem;
		margin-top: 1rem;
	}
	/*xiamian*/
	.zc-dl{
		margin-top: 0.3rem;
		width: 100%;
		
	}
	.zc-dl-top{
		width: 100%;
		background: white;
	}
	.zc-dl-top>div{
		width: 90%;
		margin-left: 5%;
		height: 4rem;
		border-bottom: 1px solid #F0EFED;
	}
	.zc-dl>div>div>input{
		border: 0px;
		width: 100%;
		height: 100%;
		outline: none;
		font-size: 1.5rem;
	}
	 .zc-dl-zh{
		position: relative;
	}
	.zc-dl-zh>div{
		width: 6rem;
		height: 70%;
	    position: absolute;
	    top: 10%;
	    right:1rem ;
		text-align: center;
		line-height: 3rem;
		border: 0.1rem solid #E7E7E7;
	}
	.zc-dl-anniu{
		width: 90%;
		margin-left: 5%;
		height: 4rem;
		margin-top: 2rem;
		background: #FF8A00;
		color: white;
		text-align: center;
		line-height: 4rem;
		font-size: 1.6rem;
	}
</style>
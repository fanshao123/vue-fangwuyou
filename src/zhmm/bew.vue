<template>
	<div class="zhmm-bew">
		 <div class="zhmm-bew-top">
		 	<router-link to='/' tag='div' class='zhmm-bew-top-wz'>首页</router-link>
		 	<p class="zhmm-bew-top-img"><img src="../assets/right.png"/></p>
		 	<router-link to='/zhmm' tag='div' class='zhmm-bew-top-wz zhmm-bew-top-wz1'>找回密码</router-link>
		 </div>
		 <div class="zhmm-dl">
			 	<div class="zhmm-dl-top">
				<div class="zhmm-dl-zh">
					<input type="text" name="" id="" value="17630755230" placeholder="请输入手机号"/>
					<router-link to=''tag='div'>45s后重发</router-link>
				</div>
				<div class="zhmm-dl-mima">
					<input type="text" name="" id="" value="" placeholder="请输入短信中的验证码"/>
				</div>
				<div class="zhmm-dl-mima">
					<input type="text" name="" id="" value="" placeholder="请输入新密码"/>
				</div>
				<div class="zhmm-dl-mima">
					<input type="text" name="" id="" value="" placeholder="确认新密码"/>
				</div>
			</div>
			<router-link to='/dl' tag='div' class='zhmm-dl-anniu'>
			      提交
			</router-link>
		 </div>
	</div>
</template>

<script>
</script>

<style>
	.zhmm-bew{
		width: 100%;
		height: 70rem;
		background: #F0EFED;
		
	}
	.zhmm-bew-top{
		width: 100%;
		height: 4rem;
		border-bottom: 0.1rem solid #EAEAEA;
		display: flex;
		background: white;
	}
	.zhmm-bew-top-wz{
		width: 4rem;
		height: 4rem;
		text-align: center;
		line-height: 4rem;
		font-size: 1.5rem;
	}
	.zhmm-bew-top-wz1{
			width: 7rem;
	}
	.zhmm-bew-top-img{
		width: 1rem;
		height: 4rem;
	}
	.zhmm-bew-top-img>img{
		width: 1rem;
		height: 2rem;
		margin-top: 1rem;
	}
	/*xiamian*/
	.zhmm-dl{
		margin-top: 0.3rem;
		width: 100%;
		
	}
	.zhmm-dl-top{
		width: 100%;
		background: white;
	}
	.zhmm-dl-top>div{
		width: 90%;
		margin-left: 5%;
		height: 4rem;
		border-bottom: 1px solid #F0EFED;
	}
	.zhmm-dl>div>div>input{
		border: 0px;
		width: 100%;
		height: 100%;
		outline: none;
		font-size: 1.5rem;
	}
	 .zhmm-dl-zh{
		position: relative;
	}
	.zhmm-dl-zh>div{
		width: 6rem;
		height: 70%;
	    position: absolute;
	    top: 10%;
	    right:1rem ;
		text-align: center;
		line-height: 3rem;
		border: 0.1rem solid #E7E7E7;
	}
	.zhmm-dl-anniu{
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
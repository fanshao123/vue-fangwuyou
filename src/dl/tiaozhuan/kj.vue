<template>
	<div class="dl-dl">
		<div class="dl-dl-top">
			<div class="dl-dl-zh">
				<input type="text" name="" id="" value="" placeholder="请输入手机号"/>
				<router-link to=''tag='div'>发送验证码</router-link>
			</div>
			<div class="dl-dl-mima">
				<input type="text" name="" id="" value="" placeholder="请输入信息中的验证码"/>
			</div>
		</div>
		<router-link to='/wodeydl' tag='div' class='dl-dl-anniu'>
			验证并登录
		</router-link>
	</div>
</template>

<script>
</script>

<style>
    .dl-dl-zh{
		position: relative;
	}
	.dl-dl-zh>div{
		width: 6rem;
		height: 70%;
	    position: absolute;
	    top: 10%;
	    right:1rem ;
		text-align: center;
		line-height: 3rem;
		border: 0.1rem solid #E7E7E7;
	}
	
</style>
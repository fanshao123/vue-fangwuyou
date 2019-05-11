<template>
	<div class="dl-dl">
		<div class="dl-dl-top">
			<div class="dl-dl-zh">
				<input type="text" name="" id="" value="" placeholder="请输入手机号"/>
			</div>
			<div class="dl-dl-mima">
				<input type="text" name="" id="" value="" placeholder="请输入密码"/>
			</div>
		</div>
		<router-link to='/wodeydl' tag='div' class='dl-dl-anniu'>
			登录
		</router-link>
	</div>
</template>

<script>
</script>

<style>
	.dl-dl{
		margin-top: 0.3rem;
		width: 100%;
		
	}
	.dl-dl-top{
		width: 100%;
		background: white;
	}
	.dl-dl-top>div{
		width: 90%;
		margin-left: 5%;
		height: 4rem;
		border-bottom: 1px solid #F0EFED;
	}
	.dl-dl>div>div>input{
		border: 0px;
		width: 100%;
		height: 100%;
		outline: none;
		font-size: 1.5rem;
	}
	.dl-dl-anniu{
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
<template>
	<div class="sy-tp">
		<img src="../assets/banner.png"width="100%"/>
     <div class="sy-input">
     	<span><img src="../assets/seach.jpg"/></span>
     	<input type="text" name="" id="" value="" placeholder="请输入小区或者商圈名开始找房喽"/>
     </div>
	</div>
</template>

<script>
</script>

<style>
	.sy-tp>img{
		height: 25rem;
	}
	.sy-input{
	width: 80%;
	height: 3rem;
	border: 1px solid #D6D5D5;
	box-shadow: 0px 0px 10px #D6D5D5;
	position: absolute;
	left: 10%;
	top: 26rem;
	background: white;
	/*position: relative;*/
	display: flex;
}
.sy-input>span{
	height: 100%;
	margin-left: 0.5rem;
}
.sy-input>span>img{
	width: 2rem;
	height: 2rem;
	margin-top: 0.5rem;
}
.sy-input>input{
	border: 0px;
	height: 100%;
	width: 80%;
	outline: none;
	margin-left: 0.2rem;
}
</style>
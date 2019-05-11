<template>
	<div class="shouy-tz">
		<div class="shouy-tiaozhuan">
			<!--<router-link to='' tag='div' @click='flag1=false'>热门关注</router-link>
			<router-link to='' tag='div' @click='flag1=true'>友情链接</router-link>-->
			<div @click='flag1=true'>热门关注</div>
			<div @click='flag1=false'>友情链接</div>
		</div>
		<div v-show="flag1" class="shouy-tz1">
			<div class="souye-xian"></div>
			<div class="shouy-tz1-a">
				<div>
					<a href="">北京二手房</a>
				</div>
				<div>
					<a href="">北京房找房无忧</a>
				</div>
			</div>
			<div class="shouy-tz1-a">
				<div>
					<a href="">北京二手房</a>
				</div>
				<div>
					<a href="">北京房找房无忧</a>
				</div>
			</div>
			<div class="shouy-tz1-a">
				<div>
					<a href="">北京二手房</a>
				</div>
				<div>
					<a href="">北京房找房无忧</a>
				</div>
			</div>
			<div class="shouy-tz1-a">
				<div>
					<a href="">北京二手房</a>
				</div>
				<div>
					<a href="">北京房找房无忧</a>
				</div>
			</div>
		</div>
		<div class="shouy-tz2">
			<div class="souye-xian1"></div>
			<div class="shouy-tz1-a">
				<div>
					<a href="https://www.baidu.com/?tn=98010089_dg&ch=12">百度</a>
				</div>
				<div>
					<a href="https://www.jd.com/?cu=true&utm_source=kong&utm_medium=tuiguang&utm_campaign=t_299570028_&utm_term=79fe87ee717b4dc19975538dfa01b49d">京东</a>
				</div>
			</div>
			<div class="shouy-tz1-a">
				<div>
					<a href="">淘宝</a>
				</div>
				<div>
					<a href="">三七</a>
				</div>
			</div>
			<div class="shouy-tz1-a">
				<div>
					<a href="">火狐</a>
				</div>
				<div>
					<a href="">谷歌</a>
				</div>
			</div>
			<div class="shouy-tz1-a">
				<div>
					<a href="">吓阻</a>
				</div>
				<div>
					<a href="">北京房找房无忧</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
		export default {
	  name: 'App',
	  data(){
	  	return{
	  		flag1:true,
	  	}
	  },
	  methods:{
	  	
	  },
	  components:{
	  	
	  },
	}
</script>

<style>
	.shouy-tz{
		width:100%;
		background: white;
		margin-top: 1rem;
		position: relative;
		height: 20rem;
	}
	.shouy-tiaozhuan{
		display: flex;
		width: 100%;
		/*border: 1px solid red;*/
		height: 4rem;
	}
	.shouy-tiaozhuan>div{
		line-height: 4rem;
		width: 50%;
		height: 100%;
		text-align: center;
		font-size: 1.2rem;
		border-bottom: 0.1rem solid #FF8A00;
		position: relative;
	}
	.shouy-tz1{
		width: 90%;
		margin: 2rem auto;
		/*border: 1px solid red;*/
		height: 13rem;
		background: white;
		/*display: none;*/
		position: absolute;
		z-index: 3;
		top: 4.5rem;
		left: 1.5rem;
	}
	.shouy-tz1-a{
		display: flex;
	}
	.shouy-tz1-a>div{
		width: 50%;
		/*border: 1px solid red;*/
		height: 3rem;
		line-height: 3rem;
		font-size: 1.3rem;
	}
	.shouy-tz1-a>div>a{
		color: #AAAAAA;
	}
	.shouy-tz2{
		width: 90%;
		margin: 2rem auto;
		/*border: 1px solid red;*/
		height: 13rem;
		background: white;
		position: absolute;
		top: 4.5rem;
		left: 1.5rem;
		z-index: 1;
	}
	.souye-xian{
		width: 60%;
		border-bottom: 0.2rem solid #FF8A00;
		position: absolute;
		top: -2.6rem;
		left: -1.5rem;
	}
	.souye-xian1{
		width: 60%;
		border-bottom: 0.2rem solid #FF8A00;
		position: absolute;
		top: -2.6em;
		right: -1.5rem;
		z-index: 1;
	}
</style>
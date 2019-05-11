<template>
	<div class="shouyegd" v-show="flag2">
		<div @click.stop="flag2=flase"><img src="../assets/close.png"/></div>
		<div class="sydg-logo">
			<div>
				<img src="../assets/download.png"/>
			</div>
			<div style="font-size: 1.2rem;margin-left: 1rem;">
				 <p style="font-size: 1.6rem;">找房无忧</p>
			     <p style="margin-top: 0.5rem;">市场行情一手掌握</p>
			</div>
			
		</div>
	    <div class="sygdxz">
	    	 <router-link to='' class='sydg-xiazai' tag='div'>免费下载</router-link>
	    </div>
	   
	</div>
</template>

<script>
	export default{
		name:'shouyedg',
		data(){
			return{
				flag2:true,
			}
		}
	}
</script>

<style>
	.shouyegd{
		width: 100%;
		height: 6rem;
		background: rgba(0,0,0,0.5);
		position: fixed;
		bottom: 0rem;
		left: 0rem;
		z-index: 999;
	    display: flex;
	}
	.sydg-logo{
		height: 100%;
		margin-left: 2rem;
		display: flex;
		color: white;
	}
	.sydg-logo>div{
		height: 70%;
		margin-top: 8%;
	}
	.sydg-logo>div>img{
		height: 100%;
	}
	.sygdxz{
		position: absolute;
	 right: 0rem;
	}
	.sydg-xiazai{
		width: 9rem;
		height: 100%;
		background: #FF8A00;
		/*margin-left: 5rem;*/
		/*margin-right: 0rem;*/
		text-align: center;
		line-height: 6rem;
		font-size: 2rem;
		color: white;
	}
</style>
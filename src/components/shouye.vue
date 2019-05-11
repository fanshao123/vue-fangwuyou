<template>
	<div class="shouye">
		 <gd></gd>
		 <logo></logo>
	     <tp></tp>
	     <zj></zj>
	     <router-link tag='div' to='' class='sy-kzx'>
	     	<img src="../assets/banner2.png" />
	     </router-link>
	     <rem></rem>
	     <tz></tz>
	     <footer1></footer1>
	    
	</div>
</template>

<script>
		import logo from '../shouye/logo.vue';
		import tp from '../shouye/tp.vue';
		import zj from '../shouye/zj.vue';
		import rem from '../shouye/rmen.vue';
		import tz from '../shouye/tiaozhuan.vue';
		import gd from '../shouye/shouyeguding.vue';
	//	最底部
		import footer1 from '../shouye/footer.vue';
		export default {
	  name: 'App',
	  data(){
	  	return{
	  		
	  	}
	  },
	  methods:{},
	  components:{
	  	logo,
	  	tp,
	  	zj,
	  	footer1,
	  	rem,
	  	tz,
	  	gd,
	  },
	}
</script>

<style>
	.shouye{
		position: relative;
	}
	.sy-kzx{
		width: 100%;
		height: 25rem;
		background: #F5F5F5;
		padding: 1rem 0rem 0.5rem 0rem;
	}
	.sy-kzx>img{
		width: 100%;
		height: 25rem;
	}
</style>
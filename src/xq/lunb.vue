<template>
	<div class="xq-lb">
		<el-carousel :interval="4000" arrow="always">
		    <el-carousel-item v-for="(item,index) in list" :key="item.id">
		    <h3 class="xq-lb-lbt"><img :src="item.src" alt="" /></h3>
		    </el-carousel-item>
	 	 </el-carousel>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				list:[
					{
						id:0,
						src:require("../assets/img.png"),
					},
					{
						id:1,
						src:require("../assets/img.png"),
					},
					{
						id:2,
						src:require("../assets/img.png"),
					},
					{
						id:3,
						src:require("../assets/img.png"),
					},
				]
			}
		},
		methods:{
			a(index){
				console.log(this.list(index).src);
			}
		}
	}
</script>

<style>
	.xq-lb{
		width: 100%;
	}
	.xq-lb-lbt{
		width: 100%;
		height: 30rem;
	}
	.xq-lb-lbt>img{
		width: 100%;
		height: 100%;
	}
</style>
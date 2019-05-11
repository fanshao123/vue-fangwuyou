<template>
	<div class="main2"@click.stop>
		<div v-for="(item,i) in list":class="{'act':item.bor,'active':item.flag}"@click="toggle(item,i)">
			{{item.name}}
		</div>
		<div>自定义价格<input type="text"placeholder="最小" />-<input type="text"placeholder="最大" /><span>确定</span></div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				list:[
					{name:'不限',flag:false,bor:true},
					{name:'100万以下',flag:false,bor:true},
					{name:'100万-150万',flag:false,bor:true},
					{name:'150万-200万',flag:false,bor:true},
					{name:'200万-250万',flag:false,bor:true},
					{name:'250万-300万',flag:false,bor:true},
				]
			}
		},
		methods:{
			toggle(item,i){
				this.list.forEach(f=>{
					if(f.flag!==this.list[i].flag){
						f.flag=false
					}
				})
				item.flag=!item.flag
			}
		}
	}
</script>

<style>
.main2{
	position: relative;
		top: 0.067rem;
		left: 0;
		width: 100%;
		height: 21rem;
		background: white;
		color: black;
		z-index: 99;
		font-size: 1.1rem;
}
.main2>div>input{
	text-align: center;
	width: 3rem;
	margin-left: 0.5rem;
	margin-right: 0.5rem;
	border: none;
	outline: none;
	background: #F5F5F5;
	padding: 0.1rem 0;
	position: relative;
	top: -0.1rem;
}
.main2>div>span{
	display: inline-block;
	color: white;
	width: 3rem;
	height: 1.5rem;
	line-height: 1.5rem;
	text-align: center;
	background: #FC8B03;
	/*padding: 0.1rem 0;*/
	font-size: 1rem;
}
.main2>div{
	text-align: left;
	width: 95%;
	height: 3rem;
	line-height: 3rem;
	margin-left: 5%;
}
.main2>.active{
	color: #FE8B09;
}
.main2>.act{
	border-bottom: 0.067rem solid #E7E7E7;
}
</style>
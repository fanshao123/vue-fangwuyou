<template>
	<div class="main3"@click.stop>
		<div v-for="(item,i) in list":class="{'act':item.bor,'active':item.flag}"@click="toggle(item,i)">
			{{item.name}}<input type="checkbox" :checked="item.flag" />
		</div>
		<div style="width: 100%;margin: 0;color: white;text-align: center;background: #FF8A00;">确定</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				list:[
					{name:'不限',flag:false,bor:true},
					{name:'1室',flag:false,bor:true},
					{name:'2室',flag:false,bor:true},
					{name:'3室',flag:false,bor:true},
					{name:'4室',flag:false,bor:true},
					{name:'5室',flag:false,bor:true},
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
.main3{
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
.main3>div>input[type="checkbox"]{
		float: right;
		margin-right: 5%;
		margin-top: 1rem;
	}
.main3>div>span{
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
.main3>div{
	text-align: left;
	width: 95%;
	height: 3rem;
	line-height: 3rem;
	margin-left: 5%;
}
.main3>.active{
	color: #FE8B09;
}
.main3>.act{
	border-bottom: 0.067rem solid #E7E7E7;
}
</style>
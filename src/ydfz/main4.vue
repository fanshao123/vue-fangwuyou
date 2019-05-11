<template>
	<div class="main4"@click.stop>
		<div>
			<div class="sec1">
				<h2>区域</h2>
				<div>
					<span v-for="(item,index) in list":class="{'active':item.flag}" @click="togg1(item,index)">{{item.name}}</span>
				</div>
			</div>
		</div>
		<div>
			<div class="sec1">
				<h2>面积（平米）</h2>
				<div>
					<span v-for="(item,index) in list1":class="{'active':item.flag}" @click="togg2(item,index)">{{item.name}}</span>
				</div>
			</div>
		</div>
		<div>
			<div class="sec1">
				<h2>标签</h2>
				<div>
					<span v-for="(item,index) in list2":class="{'active':item.flag}" @click="togg3(item,index)">{{item.name}}</span>
				</div>
			</div>
		</div>
		<div>
			<div class="sec1">
				<h2>楼龄</h2>
				<div>
					<span v-for="(item,index) in list3":class="{'active':item.flag}" @click="togg4(item,index)">{{item.name}}</span>
				</div>
			</div>
		</div>
		<div>
			<div class="sec1">
				<h2>楼层</h2>
				<div>
					<span v-for="(item,index) in list4":class="{'active':item.flag}" @click="togg5(item,index)">{{item.name}}</span>
				</div>
			</div>
		</div>
		<div class="clear"@click="clear">
			清空条件
		</div>
		<div class="sure">
			确定
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				list:[
					{name:'南',flag:false},
					{name:'南北',flag:false},
					{name:'东',flag:false},
					{name:'西',flag:false},
					{name:'北',flag:false},
				],
				list1:[
					{name:'50以下',flag:false},
					{name:'50-70',flag:false},
					{name:'70-90',flag:false},
					{name:'90-110',flag:false},
					{name:'110-130',flag:false},
					{name:'130-150',flag:false},
					{name:'150-200',flag:false},
					{name:'200以上',flag:false},
				],
				list2:[
					{name:'学区房',flag:false},
					{name:'地铁房',flag:false},
					{name:'不限购',flag:false},
					{name:'满两年',flag:false},
					{name:'满五唯一',flag:false},
					{name:'降价',flag:false},
					{name:'新上',flag:false},
					{name:'独家',flag:false},
					{name:'有钥匙',flag:false},
				],
				list3:[
					{name:'5年以内',flag:false},
					{name:'10年以内',flag:false},
					{name:'10-20年',flag:false},
					{name:'20年以上',flag:false},
				],
				list4:[
					{name:'低楼层',flag:false},
					{name:'中楼层',flag:false},
					{name:'高楼层',flag:false},
				],
			}
		},
		methods:{
			togg1(item,index){
				this.list.forEach(f=>{
					if(f.flag!==this.list[index].flag){
						f.flag=false
					}
				})
				item.flag=!item.flag
			},
			togg2(item,index){
				this.list1.forEach(f=>{
					if(f.flag!==this.list1[index].flag){
						f.flag=false
					}
				})
				item.flag=!item.flag
			},
			togg3(item,index){
				item.flag=!item.flag
			},
			togg4(item,index){
				this.list3.forEach(f=>{
					if(f.flag!==this.list3[index].flag){
						f.flag=false
					}
				})
				item.flag=!item.flag
			},
			togg5(item,index){
				this.list4.forEach(f=>{
					if(f.flag!==this.list4[index].flag){
						f.flag=false
					}
				})
				item.flag=!item.flag
			},
			clear(){
				this.list.forEach(f=>{
						f.flag=false
				})
				this.list1.forEach(f=>{
						f.flag=false
				})
				this.list2.forEach(f=>{
						f.flag=false
				})
				this.list3.forEach(f=>{
						f.flag=false
				})
				this.list4.forEach(f=>{
						f.flag=false
				})
			}
		}
	}
</script>

<style>
	.main4{
	position: relative;
		top: 0.067rem;
		left: 0;
		width: 100%;
		height: 21rem;
		background: white;
		color: black;
		z-index: 99;
		font-size: 1.1rem;
		overflow: scroll;
}
.main4>div{
	width: 100%;
	text-align: left;
	border-bottom: 0.067rem solid #E7E7E7;
}
.main4>div h2{
	font-weight: 500;
	font-size: 1.1rem;
}
.main4>div>.sec1{
	width: 90%;
	margin: 0.5rem auto;
	padding: 1rem 0;
}
.main4>div>.sec1>div{
	display: flex;
	flex-wrap: wrap;
}
.main4>div span{
	display: inline-block;
	width:22%;
	height: 2rem;
	text-align: center;
	line-height: 2rem;
	border: 0.067rem solid #DEDEDE;
	border-radius: 0.2rem;
	margin-left: 0.72rem;
	margin-top: 0.8rem;
	font-size: 1rem;
	color: #A9A9A9;
}
.main4>div .active{
	color: #FF8A00;
	border-color: #FF8A00;
}
.main4>div span:nth-child(1){
	margin-left: 0;
}
.main4>div span:nth-child(5){
	margin-left: 0;
}
.main4>div span:nth-child(9){
	margin-left: 0;
}
.main4>.clear{
	width: 100%;
	height: 3.5rem;
	line-height: 3.5rem;
	text-align: center;
	color: #9E9E9E;
}
.main4>.sure{
	width: 100%;
	height: 3rem;
	line-height: 3rem;
	color: white;
	text-align: center;
	background: #FF8A00;
}
</style>
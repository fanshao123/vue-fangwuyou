<template>
	<div class="main1"@click.stop>
		<div @click.stop>
			<li v-for="(item,i) in list1" :class="{'m1act':item.flag}" @click="m1(item,i)">{{item.nam}}
				<ul class="child" v-if="i==0" v-show="item.flag" @click.stop>
					<li v-for="(ite,i) in childd" @click="m1a(ite,i)":class="{'m1act':ite.flag}">{{ite.name}}
						<ul class="chi" v-if="i==2" v-show="ite.flag" @click.stop>
							<li v-for="(it,index) in childd1":class="{'m1act':it.flag}"@click="m1b(it,index)">{{it.name}}</li>
						</ul>
						<ul class="chi" v-if="i==3" v-show="ite.flag" @click.stop>
							<li v-for="(it,index) in childd2":class="{'m1act':it.flag}"@click="m1c(it,index)">{{it.name}}</li>
						</ul>
						<ul class="chi" v-if="i==4" v-show="ite.flag" @click.stop>
							<li v-for="(it,index) in childd1":class="{'m1act':it.flag}"@click="m1b(it,index)">{{it.name}}</li>
						</ul>
						<ul class="chi" v-if="i==5" v-show="ite.flag" @click.stop>
							<li v-for="(it,index) in childd2":class="{'m1act':it.flag}"@click="m1c(it,index)">{{it.name}}</li>
						</ul>
						<ul class="chi" v-if="i==6" v-show="ite.flag" @click.stop>
							<li v-for="(it,index) in childd1":class="{'m1act':it.flag}"@click="m1b(it,index)">{{it.name}}</li>
						</ul>
					</li>
				</ul>
				<ul class="child"v-if="i==1" v-show="item.flag"@click.stop>
					<li v-for="(dt,i) in childs"@click="m1d(dt,i)":class="{'m1act':dt.flag}">{{dt.name}}</li>
				</ul>
			</li>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list1: [{
						nam: '区域',
						flag: true,
					},
					{
						nam: '地铁',
						flag: false,

					}
				],
				childd: [{
						name: '附近',
						flag: false,
					},
					{
						name: '不限',
						flag: false,
					},
					{
						name: '朝阳',
						flag: false,
					},
					{
						name: '海淀',
						flag: false,
					},
					{
						name: '昌平',
						flag: false,
					},
					{
						name: '丰台',
						flag: false,
					},
					{
						name: '石景山',
						flag: false,
					},
				],
				childd1: [{
						name: '不限',
						flag: false
					},
					{
						name: '安贞',
						flag: false
					},
					{
						name: '奥林匹克公园',
						flag: false
					},
					{
						name: '百子湾',
						flag: false
					},
					{
						name: '北工大',
						flag: false
					},
					{
						name: '北苑',
						flag: false
					},
					{
						name: 'CBD',
						flag: false
					},
				],
				childd2: [{
						name: '不限',
						flag: false
					},
					{
						name: '奥林匹克公园',
						flag: false
					},
					{
						name: '安贞',
						flag: false
					},
					{
						name: '北苑',
						flag: false
					},
					{
						name: '北工大',
						flag: false
					},
					{
						name: '百子苑',
						flag: false
					},
					{
						name: 'CBD',
						flag: false
					},
				],
				childs: [{
						name: '附近',
						flag: false
					},
					{
						name: '不限',
						flag: false
					},
					{
						name: '一号线',
						flag: false
					},
					{
						name: '二号线',
						flag: false
					},
					{
						name: '三号线',
						flag: false
					},
					{
						name: '四号线',
						flag: false
					},
				]
			}
		},
		methods: {
			m1(item, i) {
				this.list1.forEach(f => {
					if(f.flag !== this.list1[i].flag) {
						f.flag = false
					}
				})
				item.flag = !item.flag
			},
			m1a(ite, i) {
				this.childd.forEach(f => {
					if(f.flag !== this.childd[i].flag) {
						f.flag = false
					}
				})
				ite.flag = !ite.flag
			},
			m1b(it, index) {
				this.childd1.forEach(f => {
					if(f.flag !== this.childd1[index].flag) {
						f.flag = false
					}
				})
				it.flag = !it.flag
			},
			m1c(it, index) {
				this.childd2.forEach(f => {
					if(f.flag !== this.childd2[index].flag) {
						f.flag = false
					}
				})
				it.flag = !it.flag
			},
			m1d(dt, i) {
				this.childs.forEach(f => {
					if(f.flag !== this.childs[i].flag) {
						f.flag = false
					}
				})
				dt.flag = !dt.flag
			},
		}
	}
</script>

<style>
	.main1 {
		position: relative;
		top: 0.067rem;
		left: 0;
		width: 100%;
		height: 21rem;
		background: white;
		color: black;
		z-index: 99;
		font-size: 1rem;
	}
	
	.main1>div {
		width: 25%;
		height: 21rem;
		text-align: center;
		font-size: 1.1rem;
		background: #F0F0F0;
	}
	
	.main1>div>li {
		width: 100%;
		height: 3rem;
		line-height: 3rem;
	}
	
	.main1>div>.m1act {
		background: white;
		color: #FE8B09;
	}
	
	.main1>div>li>.child {
		position: absolute;
		top: 0rem;
		width: 20%;
		height: 21rem;
		left: 25%;
		margin-left: 5%;
		text-align: left;
		border-right: 0.067rem solid #f0f0f0;
		color: black;
	}
	
	.main1>div>li>.child>li {
		height: 3rem;
		box-sizing: border-box;
		border-bottom: 0.067rem solid #f0f0f0;
	}
	.main1>div>li>.child>.m1act{
		color: #FE8B09;
	}
	.main1>div>li>.child>li>.chi {
		position: absolute;
		top: 0;
		left: 7rem;
		width: 200%;
		color: black;
	}
	.main1>div>li>.child>li>.chi>.m1act{
		color: #FE8B09;
	}
	.main1>div>li>.child>li>.chi>li {
		height: 3rem;
		box-sizing: border-box;
		border-bottom: 0.067rem solid #f0f0f0;
	}
</style>
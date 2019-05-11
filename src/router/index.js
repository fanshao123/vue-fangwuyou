import Vue from 'vue'
import Router from 'vue-router'
import shouye from '@/components/shouye'
import wode from '@/components/wode'
import dl from '@/components/dl'
import dl1 from '@/dl/tiaozhuan/dl'
import kj from '@/dl/tiaozhuan/kj'
import xiaoqu from '@/components/xiaoqu'
import zhmm from '@/components/zhmm'
import zc from '@/components/zc'
import wodeydl from '@/components/wodeydl'
import ydfz from '@/components/ydfz'
import xq from '@/components/xq'
import fzxq from '@/components/fzxq'

Vue.use(Router)

export default new Router({
routes: [
    {
      path: '/',
      name: 'shouye',
      component: shouye,
    },
    {
      path: '/wode',
      name: 'wode',
      component: wode,
    },
    {
      path: '/dl',
      name: 'dl',
      component: dl,
      children:[
		{path:'/dl',component:dl1},
		{path:'/dl/kj',component:kj},
        	
	  ]
    },
    {
      path: '/xiaoqu',
      name: 'xiaoqu',
      component: xiaoqu,
    },
    {
      path: '/zhmm',
      name: 'zhmm',
      component: zhmm,
    },
    {
      path: '/zc',
      name: 'zc',
      component: zc,
    },
    {
      path: '/wodeydl',
      name: 'wodeydl',
      component: wodeydl,
    },
    {
      path: '/ydfz',
      name: 'ydfz',
      component: ydfz,
    },
    {
      path: '/xq',
      name: 'xq',
      component: xq,
    },
    {
    	path: '/fzxq',
      name: 'fzxq',
      component: fzxq,
    },
]
})

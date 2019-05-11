<template>
	<div class="footer">
	    <div class="footer-hz">
	    	<div class="footer-top">
	    		北京找房无忧>首页
	    	</div>
	    	<div class="footer-bew">
	    		<div class="footer-bew-top">
	    			<div><img src="../assets/apple.png"/></div>
	    			<div style="margin-left: 1rem;">
	    				<p>iphone</p>
	    				<p>客户端</p>
	    			</div>
	    		</div>
	    		<div class="footer-bew-top android">
	    			<div><img src="../assets/android.png"/></div>
	    			<div style="margin-left: 1rem;">
	    				<p>android</p>
	    				<p>客户端</p>
	    			</div>
	    		</div>
	    		<div class="footer-wz">
	    			<p style="font-size: 1.3rem;">北京房无忧地产经纪有限公司</p>
	    			<p style="font-size: 0.7rem;">网络营销许可证 京ICP备20160812号-12</p>
	    		</div>
	    	</div>
	    </div>
	</div>
</template>

<script>
</script>

<style>
	.footer{
		width: 100%;
		height: 14rem;
		background:#2F3130 ;
		color: white;
	}
	.footer-hz{
		width: 90%;
		height: 80%;
		margin-left: 5%;
		padding-top: 5%;
		/*border: 1px solid red;*/
	}
	.footer-top{
		width: 100%;
		border-bottom: 0.1rem solid #939494;
		height: 2rem;
	}
	.footer-bew{
		margin: 0 auto;
		width: 18rem;
		/*border: 1px solid red;*/
		display: flex;
		margin-top: 1rem;
		position: relative;
	}
	.footer-bew-top{
		display: flex;
	}
	.footer-bew-top>div>img{
		width: 2.5rem;
		height: 2.5rem;
		
	}
	.android{
		margin-left: 20px;
	}
	.footer-wz{
		position: absolute;
		top: 4rem;
		text-align: center;
	}
	
</style>
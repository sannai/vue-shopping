<template>
	<div class="shopping">
		<div style="display:flex">
			<div>选择</div>
			<div class="p">衣服</div>
			<div class="p">数量</div>
			<div class="p">价格</div>
			<div class="p">输入数量</div>
			<div class="p">删除</div>
		</div>
		<div style="width:10px"><input type="checkbox" :checked="this.shopping.all" @change="selection($event)"></div>
		<div class="content" v-for="(item, index) in this.shopping.commodity" :key="item.id">
			<input type="checkbox" v-model="item.type" @change="multiSelect($event, index)">
			<p class="p">{{item.shop}}</p>
			<p class="p">{{item.num}}</p>
			<p class="p">{{item.price}}</p>
			<div class="input">
				<div @click="reduces(item.num, index)">-</div>
				<input type="text" v-model="item.num">
				<div @click="add(item.num, index)">+</div>
			</div>
			<p class="p" @click="deletes(index)">删除</p>
		</div>
		<div>
			<div class="total">总数量:{{quantity}}</div>
			<div class="total">总金额:{{price}}</div>
		</div>
	</div>
</template>

<script>
	import * as Types from 'store/mutation-types'
  import { mapState, mapGetters, mapMutations } from 'vuex'
	export default {
		data() {
			return {

			}
		},
		//计算属性
		computed: {
			//这是shopping state状态
			...mapState([
				'shopping'
			]),
			//这是shopping getters派生其他数据
			...mapGetters([
				'quantity', 'price', 'add', 'reduces', 'selection', 'multiSelect'
			]),
		},
		//方法
		methods: {
			//唯一用来修改数据的工具
			...mapMutations([
				"deletes"
      ])
		},
		created() {

		}
	}
</script>
<style scoped>
	.shopping{
		width: 1100px;
		height: 600px;
		background: darkgray;
	}
	.content{
		display: flex;
	}
	.p{
		width: 200px;
	}
	.input{
		display: flex;
	}
	.input div{
		font-size: 40px;
	}

</style>


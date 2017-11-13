<template>

	<section>
		<div id="bg" v-bind:class="{'bg_show':bg_show}">
			<span>
				<!--我是刘柏宏-->
			</span>
		</div>
	</section>
</template>

<script>
	import axios from 'axios'
	import qs from 'qs'
	import config from '../util/config'
	export default {
		asyncData({ params }) {
//			return axios.post(config.url.helloWorld, qs.stringify({
//				mark: "00",
//				name: "liubh"
//			})).then(function(req) {
//				return {
//					"hello": req.data
//				}
//			}).catch(function(req) {
//				console.log("error: " + req);
//			})
		},
		mounted() {
			var that = this;
			that.bg_show = true;
//			axios.post(config.url.helloWorld, qs.stringify({
//				mark: "00",
//				name: "liubh"
//			})).then(function(req) {
//				console.log(req.data);
//			}).catch(function(req) {
//				console.log("error: " + req);
//			})
		},
		methods: {
			
		},
		data() {
			return {
				"bg_show": false
			}
		}
	}
</script>

<style scoped>
	#bg {
		opacity: 0;
		background-image: url(../assets/img/bg.jpg);
		background-attachment: fixed;
		background-position: 0 0;
		background-size: cover;
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: -1;
		display: flex;
		justify-content: center;
		align-items: center;
		transition-property: opacity;
		transition-duration: 1000ms;
		transition-timing-function: ease;
		-webkit-transition-property: opacity;
		-webkit-transition-duration: 1000ms;
		-webkit-transition-timing-function: ease;
		-moz-transition-property: opacity;
		-moz-transition-duration: 1000ms;
		-moz-transition-timing-function: ease;
	}
	
	#bg.bg_show {
		opacity: 1;
	}
	
	#bg>span {
		font-family: "宋体";
		color: white;
		font-size: 60px;
		font-weight: bold;
		cursor: pointer;
	}
</style>
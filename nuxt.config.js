module.exports = {
	/*
	 ** Headers of the page
	 */
	head: {
		title: '刘柏宏个人博客',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Nuxt.js project' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},
	/*
	 ** Global CSS
	 */
	css: [{ src: '~assets/less/index.less', lang: 'less' }],
    /*
     ** Global JS
     */
    plugins: [
        { src: '~static/js/jquery.2.2.4.min.js', ssr: false },{src:'~static/js/swiper.js',ssr:false}
    ],
	/*
	 ** Customize the progress-bar color
	 */
	loading: { color: '#3B8070' },
    build: {
        vendor: ['axios']
    }
}
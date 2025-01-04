export default {
	server: {
		port: 8080
	},
	root: './',
	build: {
		outDir: 'dist'
	},
	appType: 'mpa',
	resolve: {
		alias: {
			'@': '/src'
		}
	}
}
export default {
	server: {
		port: 3001
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
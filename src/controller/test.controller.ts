import { Path, Get } from 'koa-decorate';

@Path('/api/test')
export class TestController {
	@Get
	@Path('/')
	async eatCao() {
		const TIME = 3;
		return await new Promise(resolve => {
			setTimeout(() => {
				resolve(`<body style="text-align: center;line-height: 100vh;">
					<span>等待 ${TIME} 秒钟才返回结果...</span>
					</body>`);
			}, TIME * 1000);
		});
	}
}

import Koa from 'koa';
import path from 'path';
import logger from 'koa-logger';
import Router from 'koa-router';
import Decorator from 'koa-decorate';
import koaStatic from 'koa-static';
import bodyParser from 'koa-bodyparser';

import { TestController } from './controller/test.controller';

const PORT = 1314;
const app = new Koa();
const router = new Decorator({
	router: new Router(),
	controllers: [
		TestController,
	],
});

app.use(logger());
app.use(bodyParser());
app.use(router.routes());
app.use(koaStatic(path.join(__dirname, './public')));

console.info(`\nPROMPT: \x1b[35m(Service started on port ${PORT}) \x1b[32mhttp://127.0.0.1:${PORT}/api/test \x1b[0m\n`);

app.listen(PORT);

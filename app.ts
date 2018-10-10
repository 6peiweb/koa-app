import Koa from 'koa';
import Router from 'koa-router';
import Controller from './controller';
import Decorator from './src';

const app = new Koa();

const routes = new Decorator({
	router: new Router(),
	controllers: Controller
}).create();

app.use(async (ctx, next) => {
	let enterTime = + new Date(),
			ms;
	next();
	ms = `${+ new Date() - enterTime}`;
	ctx.response.set('X-Response-Time', ms);
	console.log(`Process ${ctx.method} ${ctx.url} ${ctx.path} ${ms}ms`);
});


app.use(routes);

app.use(async (ctx) => {
	ctx.body = ctx.request;
});

console.log(`Service started on port 3005...`);

app.listen(3005);


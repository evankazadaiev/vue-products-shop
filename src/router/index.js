import Vue from 'vue';
import Router from 'vue-router';
import routerConfig from './router.config';
import routes from './routes';

Vue.use(Router);

const router = new Router(routerConfig(routes));

export default router;

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home/')
  },
  {
    path: '/create-product',
    name: 'CreateProduct',
    component: () => import('@/views/Product/')
  },
  {
    path: '/update-product/:id',
    name: 'UpdateProduct',
    component: () => import('@/views/Product/')
  }
];

export default routes;

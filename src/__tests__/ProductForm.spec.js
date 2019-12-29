// import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
// // import Home from '@/components/Home.vue'
// import Vuetify from "vuetify"
// import Vuex from 'vuex';
// import VueRouter from 'vue-router';
// import router from '@/router/';
// import ProductsTable from '@/components/ProductsTable/';
//
// describe('ProductsTable.vue', () => {
//   let wrapper, store;
//   beforeEach(()=> {
//     const localVue = createLocalVue();
//     let vuetify = new Vuetify();
//     // localVue.use(vuetify);
//     localVue.use(Vuex);
//     // localVue.use(VueRouter);
//
//     const productsModule = {
//       namespaced: true,
//       state: {},
//       mutations: {},
//       actions: {},
//       getters: {
//         products: () => [
//           { id: 1, name: 'Item 1', description: 'descr 1', price: 23 },
//           { id: 2, name: 'Item 2', description: 'descr 2', price: 3 },
//           { id: 3, name: 'Item 3', description: 'descr 3', price: 29 },
//         ]
//       }
//     };
//
//     store = new Vuex.Store({
//       modules: {
//         products: productsModule
//       }
//     });
//
//     wrapper = mount(ProductsTable, {
//       // stubs: {
//       //   'v-btn': {
//       //     template: '<button class="v-btn" @click="$listeners.click"></button>'
//       //   }
//       // },
//       $router: {
//         push: () => {}
//       },
//       localVue,
//       vuetify,
//       store,
//       router
//     });
//   });
//   it('renders a vue instance', () => {
//     expect(wrapper.isVueInstance()).toBe(true);
//   });
//
//   it('Find Create product button', () => {
//     expect(wrapper.find('.v-btn').exists()).toBe(true);
//   });
//   it('component has table', ()=>{
//     expect(wrapper.find('v-data-table').exists()).toBe(true)
//   });
//   it('router called when client clicks create button', () => {
//     const button = wrapper.find('.v-btn[name="create-product"]');
//     console.log('RETURNED BUTTON', button);
//     button.trigger('click');
//     const spy = jest.spyOn(wrapper.vm.options.$router, "push");
//     const route = router.find(route => route.name === "CreateProduct");
//     expect(spy).toHaveBeenCalledWith(route);
//   });
//
// })
//
//
// // describe('ProductsTable', () => {
// //   // let component;
// //   // beforeEach(() => {
// //   //   component = shallowMount(ProductsTable, {
// //   //     localVue
// //   //   });
// //   // });
// //   // let wrapper;
// //   // let store, getters;
// //   // store = new Vuex.Store({
// //   //   namespaced: true,
// //   //   getters: {
// //   //     products: () => [
// //   //       { id: 1, name: 'Item 1', description: 'descr 1', price: 23 },
// //   //       { id: 2, name: 'Item 2', description: 'descr 2', price: 3 },
// //   //       { id: 3, name: 'Item 3', description: 'descr 3', price: 29 },
// //   //     ]
// //   //   }
// //   // });
// //   // const config = {
// //   //   localVue,
// //   //   store,
// //   //   $router: {
// //   //     push: () => {}
// //   //   },
// //   // };
// //   // beforeEach(() => {
// //   //   wrapper = shallowMount(ProductsTable, config);
// //   // });
// //
// //   it('Has Vuetify table', () => {
// //     expect(component.contains('.v-data-table')).toBe(true);
// //   });
// //
// //   it('Find Create product button', () => {
// //     expect(component.contains('#createProduct')).toBe(true);
// //   });
// //
// //   // it('router called when client clicks create button', () => {
// //   //   wrapper = mount(ProductsTable, config);
// //   //   const button = wrapper.find('#createProduct');
// //   //   button.trigger('click');
// //   //   const spy = jest.spyOn(wrapper.vm.options.$router, "push");
// //   //   const route = router.find(route => route.name === "CreateProduct");
// //   //   expect(spy).toHaveBeenCalledWith(route);
// //   // })
// //   // it('Table renders N rows when there are N getter items', () => {
// //   //   console.log(wrapper.findAll('.v-data-table__wrapper tbody tr').length);
// //   //   expect(wrapper.findAll('.v-data-table__wrapper > tbody > tr').length).toBe(getters.products().length);
// //   // });
// //
// // });

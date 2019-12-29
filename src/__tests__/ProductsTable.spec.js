import { createLocalVue, mount } from '@vue/test-utils'
import Vuetify from "vuetify";
import VueRouter from "vue-router";
import Vuex from 'vuex';
import router from '@/router/';
import ProductsTable from '@/components/ProductsTable/';

//can't find vuetify components, magic

describe('ProductsTable.vue', () => {
  let wrapper, store;
  beforeEach(()=> {
    const localVue = createLocalVue();
    let vuetify = new Vuetify();
    localVue.use(Vuex);
    localVue.use(VueRouter);
    const productsModule = {
      namespaced: true,
      state: {},
      mutations: {},
      actions: {},
      getters: {
        products: () => [
          { id: 1, name: 'Item 1', description: 'descr 1', price: 23 },
          { id: 2, name: 'Item 2', description: 'descr 2', price: 3 },
          { id: 3, name: 'Item 3', description: 'descr 3', price: 29 },
        ]
      }
    };

    store = new Vuex.Store({
      modules: {
        products: productsModule
      }
    });

    wrapper = mount(ProductsTable, {
      $router: {
        push: () => {}
      },
      localVue,
      vuetify,
      store,
      router
    });
  });
  
  it('renders a vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });
  it('Find Create product button', () => {
    expect(wrapper.find('[data-test="button"]').exists()).toBe(true);
  });
  it('Find Create product button exists', () => {
    const button = wrapper.find('button[name="create-product"]');
    expect(button.exists()).toBe(true);
  });
  it('component has table', ()=>{
    expect(wrapper.find('.v-data-table').exists()).toBe(true)
  });
  it('router called when client clicks create button', () => {
    const button = wrapper.find('button[name="create-product"]');
    button.trigger('click');
    const spy = jest.spyOn(wrapper.vm.options.$router, "push");
    const route = router.find(route => route.name === "CreateProduct");
    expect(spy).toHaveBeenCalledWith(route);
  });
  it('Table renders N rows when there are N getter items', () => {
    expect(wrapper.findAll('.v-data-table__wrapper > tbody > tr').length).toBe(wrapper.vm.$store.getters['products/products'].length);
  });
});

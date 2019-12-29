import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import Home from '@/views/Home/';

const localVue = createLocalVue();

describe('Home', () => {
  let wrapper;
  const $route = { path: '/', name: 'Home' };
  beforeEach(() => {
    localVue.use(new Vuetify());
    localVue.use(Vuex);
    localVue.use(VueRouter);
    wrapper = shallowMount(Home, {
      localVue: localVue,
      mocks: {
        $route
      }
    });
  });

  it('is Home component a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  it('has / url', () => {
    expect(wrapper.vm.$route.path).toBe($route.path)
  })
});

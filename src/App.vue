<template>
  <v-app>
    <v-container>
      <router-view/>
    </v-container>
    <Modal/>
  </v-app>
</template>

<script>
const Notification = () => import('./components/Notification/');
const Modal = () => import('@/modals/Modal');

export default {
  name: 'App',

  components: {
    Notification,
    Modal
  }
};
</script>

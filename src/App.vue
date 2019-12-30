<template>
  <v-app>
    <v-container>
      <router-view/>
    </v-container>
    <Modal/>
  </v-app>
</template>

<script>
const Modal = () => import('@/modals/Modal');

export default {
  name: 'App',

  components: {
    Modal
  }
};
</script>

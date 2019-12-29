<template>
    <v-snackbar
            :value="isShown"
            :class="type"
            :timeout="2000" >
        <h3>{{ title }}</h3>
        <p class="d-flex flex-grow-1 justify-center ma-0">{{ text }}</p>
    </v-snackbar>

</template>

<script>
    import { EventBus } from "@/utils/EventBus";

    export default {
    name: "Notification",
    data: () => ({
        isShown: false,
        title: null,
        text: null,
        type: null
    }),
    mounted() {
      EventBus.$on('notification', ({ type, title, text  }) => {
        this.title = title;
        this.type = type;
        this.text = text;
        this.isShown = true;
        setTimeout(() => {
          this.isShown = false;
          this.title = null;
          this.type = null;
          this.text = null;
        }, 2000);
      });
    }
  }
</script>

<style lang="scss" scoped>

</style>

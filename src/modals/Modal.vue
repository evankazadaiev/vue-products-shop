<template>
    <v-dialog v-model="isModalShown" max-width="600">
        <v-card>
            <v-card-title class="headline">{{ text }}</v-card-title>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red darken-1" small text @click="hideModal">Cancel</v-btn>
                <v-btn color="deep-purple darken-1" small text @click="handler">OK</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
  import { EventBus } from "@/utils/EventBus";

  export default {
    name: 'ConfirmRemoveOperationModal',
    data: () => ({
      handler: () => ({}),
      text: '',
      isModalShown: false
    }),
    created() {
      EventBus.$on('showModal', ({ handler, text }) => {
        this.isModalShown = true;
        this.handler = handler ? handler : () => ({});
        this.text = text ? text : () => ({});
      });
      EventBus.$on('hideModal', () => {
        this.hideModal();
      });
    },
    methods: {
      hideModal() {
        this.isModalShown = false;
        this.handler = {};
        this.text = '';
      }

    }
  };
</script>

<style scoped>
</style>

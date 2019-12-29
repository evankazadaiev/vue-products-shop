<template>
    <v-data-table
            :headers="headers"
            :items="products"
            :items-per-page="10"
            class="pa-4">
        <template v-slot:top>
            <div class="d-flex align-center justify-space-between pa-4">
                <h1 class="font-weight-regular title">All products</h1>
                <v-btn
                        outlined
                        small
                        color="deep-purple lighten-1"
                        class="white--text mr-2"
                        @click="goToCreateProduct"
                >Add new product</v-btn>
            </div>
        </template>
        <template v-slot:item.actions="{ item }">
            <div class="d-flex justify-start">
                <v-btn
                        outlined
                        rounded
                        small
                        color="deep-purple lighten-1"
                        class="white--text mr-2"
                        @click="goToEditProduct(item)"
                >Update</v-btn>
                <v-btn
                        outlined
                        rounded
                        small
                        color="red lighten-1"
                        class="white--text"
                        @click="showAskToDeleteModal(item)"
                >Delete</v-btn>
            </div>
        </template>
    </v-data-table>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import { EventBus } from "@/utils/EventBus";

  export default {
    name: "ProductsTable",
    data: () => ({
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Description', value: 'description' },
        { text: 'Id', value: 'id' },
        { text: 'Price', value: 'price' },
        { text: 'Actions', value: 'actions' },
      ],
    }),
    computed: {
      ...mapGetters({
        products: 'products/products'
      }),
    },
    methods: {
      ...mapActions({
        deleteProduct: 'products/deleteProduct'
      }),
      goToCreateProduct() {
        this.$router.push('create-product');
      },
      goToEditProduct(product) {
        const { id } = product;
        this.$router.push(`update-product/${id}`)
      },
      async deleteProductHandler(id) {
        await this.deleteProduct(id);
        this.hideModal();
      },
      hideModal() {
        EventBus.$emit('hideModal');
      },
      showAskToDeleteModal(product) {
        const { name, id } = product;
        const text = `Do you really want to delete product with name '${name}' and id '${id}'?`;
        EventBus.$emit('showModal', {
          text,
          handler: () => this.deleteProductHandler(id),
        })
      }
    }
  }
</script>

<style scoped>

</style>

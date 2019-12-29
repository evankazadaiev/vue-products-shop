<template>
    <ProductForm/>
</template>

<script>
  const ProductForm = () => import('@/components/ProductForm/');

  export default {
    name: "Product",
    components: {
      ProductForm
    }
  }
</script>

<style scoped>

</style>

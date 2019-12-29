<template>
    <ProductsTable/>
</template>

<script>
const ProductsTable = () => import('@/components/ProductsTable/');

export default {
    name: "Home",
    components: {
      ProductsTable
    }
}
</script>

<style scoped>

</style>

<template>
  <div class="product">
    <img src="@/assets/images/product/product_1.jpg" alt="" />

    <p class="product__description">
      <span class="product__amount">$7986</span>
      Step behind the scenes of Havana's theater</p>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  .product {
    color: color('primary');
    padding: 0 .5rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    font-size: rem(15);

    img {
      width: 100%;
    }

    &__amount {
      font-family: font-name('primary-semibold');
    }

    &__description {
      font-family: font-name('primary-light');
    }
  }
</style>

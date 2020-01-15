<template>
  <div class="action">
    <div class="number">
      <button>-</button>
      <span>1</span>
      <button>+</button>
    </div>

    <button class="add">Add to Cart</button>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  .action {
    align-items: center;
    display: flex;
  }

  .number {
    align-items: center;
    background: #E5E5E580;
    border-radius: 3px;
    display: flex;
    justify-content: space-between;
    padding: 6px;

    button {
      border: 1px solid #e5e5e5;
      height: 3.6rem;
      width: 3.6rem;
    }

    span {
      color: color('secondary');
      font-family: font-name('default-bold');
      font-size: rem(16);
      margin-left: 1.6rem;
      margin-right: 1.6rem;
    }
  }

  .add {
    background-color: color('highlight');
    border-radius: 3px;
    border: 0;
    color: color('basic-white');
    font-family: font-name('default');
    font-size: rem(16);
    height: 51px;
    margin-left: 2rem;
    padding-left: 2.2rem;
    padding-right: 2.2rem;
  }
</style>

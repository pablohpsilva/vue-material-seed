<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
  };
</script>

<style>
  @media (max-width: 991px) {
    .hide-md {
      display: none;
    }

    .show-md {
      display: block;
    }
  }

  @media (min-width: 991px) {
    .hide-md {
      display: block;
    }

    .show-md {
      display: none;
    }
  }
</style>

<template>
  <div>
    <mu-appbar
      title="Title or Logo"
      @click="$router.push({ path: '/' })">
      <mu-flat-button
        class="hide-md"
        label="Dashboard"
        @click="$router.push({ name: 'Dashboard' })"
        slot="right"/>
      <mu-flat-button
        class="hide-md"
        label="Cadastro"
        @click="$router.push({ name: 'Customer' })"
        slot="right"/>
      <mu-flat-button
        class="hide-md"
        label="Vendas"
        slot="right"/>
      <mu-flat-button
        class="hide-md"
        label="Compras"
        slot="right"/>
      <mu-flat-button
        class="hide-md"
        label="Financeiro"
        slot="right"/>
      <mu-flat-button
        class="hide-md"
        label="Relatórios"
        slot="right"/>

      <mu-icon-menu
        slot="right"
        class="show-md"
        icon="more_vert">
        <mu-menu-item
          title="Dashboard"
          @click="$router.push({ name: 'Dashboard' })"/>
        <mu-menu-item
          title="Cadastro"
          @click="$router.push({ name: 'Customer' })"/>
        <mu-menu-item
          title="Vendas"/>
        <mu-menu-item
          title="Compras"/>
        <mu-menu-item
          title="Financeiro"/>
        <mu-menu-item
          title="Relatórios"/>
      </mu-icon-menu>
    </mu-appbar>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        open: false,
        docked: false,
      };
    },
    methods: {
      toggle(flag) {
        this.open = !this.open;
        this.docked = !flag;
      },
    },
  };
</script>

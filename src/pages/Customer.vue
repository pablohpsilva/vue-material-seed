<template>
  <div>
    <h1>Customer</h1>
    <custom-table
      :tableHeaders="tableHeaders"
      :tableRows="tableRows"/>
  </div>
</template>

<script>
  import CustomTable from '@/shared-components/CustomTable';

  export default {
    name: 'customer',
    data() {
      return {
        url: 'https://typeahead-js-twitter-api-proxy.herokuapp.com/demo/search?q=',
        search: 'pablohp',
        tableHeaders: [],
        tableRows: [],
      };
    },
    components: {
      CustomTable,
    },
    methods: {
      buildHeader(data = null) {
        this.tableHeaders = ['id', 'name', 'lang', 'created_at'] || data;
      },
      buildRows(data) {
        this.tableRows = data;
      },
      buildTable(data) {
        if (data && data.length) {
          this.buildHeader(data);
          this.buildRows(data);
        }
      },
      getClients() {
        this.axios.get(`${this.url}${this.search}`)
          .then((response) => {
            this.buildTable(response.data);
          })
          .catch((err) => {
            console.warn(err); // eslint-disable-line
          });
      },
    },
    mounted() {
      this.getClients();
    },
  };
</script>

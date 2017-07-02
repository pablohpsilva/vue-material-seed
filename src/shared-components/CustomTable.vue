<template>
  <div>
    <mu-table
      v-if="tableHeaders && tableHeaders.length"
      multiSelectable
      enableSelectAll
      ref="table">
      <mu-thead>
        <mu-tr>
          <mu-th v-for="head in tableHeaders"
            :key="head">
            {{ head }}
          </mu-th>
        </mu-tr>
      </mu-thead>

      <mu-tbody v-if="filteredRows && filteredRows.length">
        <mu-tr
          v-for="row in filteredRows"
          :key="row">
          <mu-td
            v-for="key in Object.keys(row)"
            :key="key">
            {{ row[key] }}
          </mu-td>
        </mu-tr>
      </mu-tbody>
    </mu-table>
  </div>
</template>

<script>
  export default {
    name: 'CustomTable',
    props: {
      tableHeaders: Array,
      tableRows: Array,
    },
    computed: {
      filteredRows() {
        return this.tableRows && this.tableRows.length ?
          this.tableRows.map(el => this.filterObjectKeys(this.tableHeaders, el)) :
          [];
      },
    },
    methods: {
      filterObjectKeys(keys, obj) {
        return keys.reduce((acc, curr) => {
          if (Object.prototype.hasOwnProperty.call(obj, curr)) {
            return Object.assign(acc, { [curr]: obj[curr] });
          }
          return acc;
        }, {});
      },
      unselect() {
        this.$refs.table.unSelectAll();
      },
    },
  };
</script>

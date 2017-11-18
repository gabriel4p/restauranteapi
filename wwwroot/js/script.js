Vue.component('vue-grid', {
  template: '#grid-template',
  props: {
    data: Array,
    columns: Array,
    filterKey: String
  },
  data: function () {
    var sortOrders = {}
    this.columns.forEach(function (key) {
      sortOrders[key] = 1
    })
    return {
      sortKey: '',
      sortOrders: sortOrders
    }
  },
  computed: {
    filteredData: function () {
      var sortKey = this.sortKey
      var filterKey = this.filterKey && this.filterKey.toLowerCase()
      var order = this.sortOrders[sortKey] || 1
      var data = this.data
      if (filterKey) {
        data = data.filter(function (row) {
          return Object.keys(row).some(function (key) {
            return String(row[key]).toLowerCase().indexOf(filterKey) > -1
          })
        })
      }
      if (sortKey) {
        data = data.slice().sort(function (a, b) {
          a = a[sortKey]
          b = b[sortKey]
          return (a === b ? 0 : a > b ? 1 : -1) * order
        })
      }
      return data
    }
  },
  filters: {
    capitalize: function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  },
  methods: {
    sortBy: function (key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    }
  }
})

var vue = new Vue({
  el: '#vue-grid',
  data: {
    searchQuery: '',
    gridColumns: ['Id', 'name', 'power'],
    gridData: [
      { Id: 0, name: 'Chuck Norris', power: Infinity },
      { Id: 1, name: 'Bruce Lee', power: 9000 },
      { Id: 2, name: 'Jackie Chan', power: 7000 },
      { Id: 3, name: 'Jet Li', power: 8000 }
    ]
  },
  beforeMount() {
    let data = this.gridData
    axios.get('/api/item').then(function (e) {
      data[0].nome = 'nome alterado'
      this.gridData = e.data.data

      console.log(data[0])
    },
      (e) => console.log(e)
    )
  },
})
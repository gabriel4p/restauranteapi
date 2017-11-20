Vue.component('custom-grid', {
  template: '#grid-template',
  data: function () {
    var sortOrders = {}
    var columns = ['id', 'titulo', 'valor', 'categoria']
    columns.forEach(function (key) {
      sortOrders[key] = 1
    })
    return {
      sortKey: '',
      sortOrders: sortOrders,
      searchQuery: '',
      showModal: false,
      itens: [],
      columns: columns,
      titleModal: ''
    }
  },
  computed: {
    filteredData: function () {
      var sortKey = this.sortKey
      var filterKey = this.searchQuery && this.searchQuery.toLowerCase()
      var order = this.sortOrders[sortKey] || 1
      var data = this.itens
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
    capitalize: (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  },
  methods: {
    sortBy: function (key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    },
    removeItem: (item) => {
      console.log(item)
    },
    editItem: function (item) {
      item = item ? item : {}
      this.currentItem = item
      this.showModal = true
      this.titleModal = item.id > 0 ? 'Edit Item' : 'New Item'
    }
  },
  beforeMount() {
    let data = this.gridData
    axios.get('/api/item').then((e) => {
      e.data.data.map((value, key) => {
        this.itens.push(value)
      })
    },
      (e) => console.log(e)
    )
  },
})

var vue = new Vue({
  el: '#item-grid',
  data: {
    searchQuery: '',
    showModal: false,
    currentItem: {},
  }
})
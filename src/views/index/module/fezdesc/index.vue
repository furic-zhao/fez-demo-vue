<template>
  <div class="container fezdesc">
    <div class="row">
      <div class="col-md-12 fez-content">
        <h3>{{fezdesc}}</h3>
        <svg>
          <use xlink:href='#fez-fezlogo'></use>
        </svg>
      </div>
    </div>
    <hr>
  </div>
</template>
<script>
import Service from './service'
export default {
  data() {
    return {
      fezdesc: ""
    }
  },
  methods: {
    fezdescInit: function() {
      let _vm = this
      Service.renderData().then((data) => {
        _vm.fezdesc = data
      })
    }
  },
  created() {
    this.fezdescInit()
  }
}

</script>

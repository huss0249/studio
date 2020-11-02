const app = new Vue({
  el: '#app',
  data: {
    tShirts: tshirts,
  },
  methods: {
    nextShipmentDays: function (nextShipment) {
      const myTime = nextShipment.year + ", " + nextShipment.month + ", " + nextShipment.day
      const timeNow = new Date()
      const myShipTime = new Date(myTime)
      const difference = myShipTime.getTime() - timeNow.getTime()
      return Math.floor(difference / 1000 / 60 / 60 / 24)
    }
  }
})
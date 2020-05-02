<template>
    <div class="blackList">
            <b-table striped hover sticky-header class="my-table-scroll" :items="items"></b-table>
    </div>
</template>
<script>
export default {
    name : 'BlackList',
    data() {
      return {
        items: [
          { ip: 1000025, date: '06/05/18', goal: 'DDOS' },
          { ip: 1000025, date: '09/03/18', goal: 'DDOS' },
          { ip: 1000025, date: '07/02/18', goal: 'DDOS' },
           { ip: 1000025, date: '06/05/18', goal: 'DDOS' },
          { ip: 1000025, date: '09/03/18', goal: 'DDOS' },
          { ip: 1000025, date: '07/02/18', goal: 'DDOS' },
           { ip: 1000025, date: '06/05/18', goal: 'DDOS' },
          { ip: 1000025, date: '09/03/18', goal: 'DDOS' },
          { ip: 1000025, date: '07/02/18', goal: 'DDOS' },
           { ip: 1000025, date: '06/05/18', goal: 'DDOS' },
          { ip: 1000025, date: '09/03/18', goal: 'DDOS' },
          { ip: 1000025, date: '07/02/18', goal: 'DDOS' },
           { ip: 1000025, date: '06/05/18', goal: 'DDOS' },
          { ip: 1000025, date: '09/03/18', goal: 'DDOS' },
          { ip: 1000025, date: '07/02/18', goal: 'DDOS' },
           { ip: 1000025, date: '06/05/18', goal: 'DDOS' },
          { ip: 1000025, date: '09/03/18', goal: 'DDOS' },
          { ip: 1000025, date: '07/02/18', goal: 'DDOS' },
          { ip: 1000025, date: '22/07/18', goal: 'Manual' }
        ]
      }
    }
}
</script>
<style lang="scss">
.blackList{
    .b-table-sticky-header{
        overflow-y: auto;
        max-height: calc(100vh - 40px - 1rem);
    }
    
}

</style>
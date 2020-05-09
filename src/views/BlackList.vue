<template>
    <div class="blackList">
        <b-table striped hover sticky-header class="my-table-scroll" :items="BlackList"></b-table>
    </div>
</template>

<script>
export default {
    name : 'BlackList',
    computed: {
       BlackList (){ return this.$store.getters.GetBlackList}
    }
}
</script>

<style lang="scss">
.blackList{
    padding: 32px;
    .b-table-sticky-header{
        overflow-y: auto;
        max-height: calc(100vh - 104px - 1rem);
        border: none;
        border-radius: 0.25rem;
        box-shadow: 0px 0px 32px rgba(39, 31, 31, 0.3);
    }
    
}

</style>

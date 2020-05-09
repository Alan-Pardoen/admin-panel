<template>
    <div class="infra-view">
          <b-container>
        <b-row>
            <div class="shadow red"></div>
        </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    name : 'InfraView'
}
</script>

<style lang="scss">
.infra-view{
    height: calc(100% - 40px);
    .container{
        max-width: 100%;
        height: 100%;
        .row{
            height: 100%;
                padding: 32px;
            .shadow{
                width: 100%;
                height: 100%;
                border: none;
                border-radius: 0.25rem;
                box-shadow: 0px 0px 32px rgba(39, 31, 31, 0.3);
            }

        }
    }
}
</style>

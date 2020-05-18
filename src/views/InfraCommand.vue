<template>
    <div class="infra-command">
        <b-container>
        <b-row>
        <b-col  cols="6">
            <div class="shadow red"></div>
        </b-col>
        <b-col  cols="6">
            <div class="shadow blue">
                <Command />
            </div>
        </b-col>
        </b-row>
        </b-container>
    </div>
</template>

<script>
import Command from '../components/Command'
export default {
    name : 'InfraCommand',
    components: {
        Command
    },
}
</script>

<style lang="scss">
.infra-command{
    height: calc(100% - 40px);
    .container{
        max-width: 100%;
        height: 100%;
        .row{
            height: 100%;
            .col-6{
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
}
</style>

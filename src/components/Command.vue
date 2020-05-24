<template>
    <div class="command"> 
        <b-tabs fill> 
            <b-tab title = "Web" class="web"  active >
                <b-list-group class="px-2 py-2" > 
                    <b-list-group-item  href = "#" > Commande 1 </b-list-group-item > 
                    <b-list-group-item  href = "#" class="striped"> Commande 2 </b-list-group-item > 
                    <b-list-group-item  href = "#" > Commande 3 </b-list-group-item >
                    <b-list-group-item  href = "#" class="striped"> Commande 4 </b-list-group-item >  
                </b-list-group > 
            </b-tab > 
            <b-tab title = "Disk" class="disk" > 
                <b-list-group class="px-2 py-2" > 
                    <b-list-group-item  href = "#" > Commande 1 </b-list-group-item > 
                    <b-list-group-item  href = "#" class="striped" > Commande 2 </b-list-group-item > 
                    <b-list-group-item  href = "#" > Commande 3 </b-list-group-item > 
                </b-list-group >  
            </b-tab > 
            <b-tab title = "Serveur"> <p> Serveur</p> </b-tab> 
        </b-tabs> 
    </div>
</template>

<script>
export default {
    name: 'Command'
}
</script>

<style lang="scss">
    .command{
        .striped{
            background-color: rgba(0, 0, 0, 0.05);
        }
    }
</style>

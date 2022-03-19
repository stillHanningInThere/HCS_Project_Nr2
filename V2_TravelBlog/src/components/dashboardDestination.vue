<template>
    <SwedenDetailsVue />

    <GreeceDetailsVue />

    <ParisDetailsVue />

    <MallorcaDetailsVue />

    <MolotowDetailsVue />
</template>

<script>
import SwedenDetailsVue from "../components/SwedenDetails.vue"
import MolotowDetailsVue from "./MolotowDetails.vue"
import MallorcaDetailsVue from "./MallorcaDetails.vue"
import GreeceDetailsVue from "./GreeceDetails.vue"
import ParisDetailsVue from "./ParisDetails.vue"

export default {
    components: {
        SwedenDetailsVue,
        MolotowDetailsVue,
        MallorcaDetailsVue,
        GreeceDetailsVue,
        ParisDetailsVue
    }
    
}
</script>
<template>
    <component v-b-tooltip="$props.extra?.toUpperCase()" class="extras-icon" :is="getIconComponentForExtra()"></component>
</template>

<script>
import ExtrasIconAccessible from "./icons/ExtrasIconAccessible.vue"
import ExtrasIconAirCon from "./icons/ExtrasIconAirCon.vue"
import ExtrasIconBath from "./icons/ExtrasIconBath.vue"
import ExtrasIconBreakfast from "./icons/ExtrasIconBreakfast.vue"
import ExtrasIconLivingRoom from "./icons/ExtrasIconLivingRoom.vue"
import ExtrasIconMinibar from "./icons/ExtrasIconMinibar.vue"
import ExtrasIconTV from "./icons/ExtrasIconTV.vue"
import ExtrasIconWifi from "./icons/ExtrasIconWifi.vue"
export default {
    components: {
        ExtrasIconAccessible,
        ExtrasIconAirCon,
        ExtrasIconBath,
        ExtrasIconBreakfast,
        ExtrasIconLivingRoom,
        ExtrasIconMinibar,
        ExtrasIconTV,
        ExtrasIconWifi
    },
    props: {
        extra: {
            type: String,
            required: true,
        },
    },
    methods: {
        getIconComponentForExtra() {
            // possible extras: "aircondition", "bathroom", "breakfast", "handicapped accessible", "livingroom", "minibar", "television", "wifi"
            switch (this.$props?.extra.toLowerCase()) {
                case "aircondition":
                    return ExtrasIconAirCon;
                case "bathroom":
                    return ExtrasIconBath;
                case "breakfast":
                    return ExtrasIconBreakfast;
                case "handicapped accessible":
                    return ExtrasIconAccessible;
                case "livingroom":
                    return ExtrasIconLivingRoom;
                case "minibar":
                    return ExtrasIconMinibar;
                case "television":
                    return ExtrasIconTV;
                case "wifi":
                    return ExtrasIconWifi;
                default:
                    return "div" // fallback
            }
        }
    }
}
</script>

<style scoped>
.extras-icon {
    width: 1.75rem;
    height: 1.75rem;
    margin: 0.5rem;
    background-color: rgba(var(--primary-values), 0.2);
    padding: 0.2rem;
    border-radius: 100%;
    border: 1px solid var(--primary);
}
</style>

<template>
<div>
    <div class="border-b px-2 py-3 bg-white rounded-t">
        <h5 class="font-semibold uppercase">Posts</h5>
    </div>
    <CardInList v-for="(item) in 20" :key="item" />
</div>
</template>

<script>
export default {
    methods: {
        List() {
            this.$repositories.Tag.all().then(res => {
                console.log(res.data);
            })
        }
    },
    mounted() {
        this.List()
    }
}
</script>

<style>

</style>

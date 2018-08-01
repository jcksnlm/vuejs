<template>
    <div class="gui-card" v-bind:style="expandFx" v-on:click="expandTile()" v-on:mouseleave="shrinkTile()">
        <div class="gui-card__media">
            <img class="gui-card__img" v-bind:src="img" alt=""  />
        </div>
        <div class="gui-card__details">
            <div class="gui-card__title">
                {{pTitle}}
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        props: ['pTitle', 'img'],
        data() {
            return {
                expandFx: null
            }
        },
        methods: {
            expandTile: function () {
                this.expandFx = '-webkit-transform: scale(1.9); transform: scale(1.9); margin-right: 110px;';
            },
            shrinkTile: function () {
                this.expandFx = null;
            }
        }
    }
</script>

<style lang="scss">
</style>

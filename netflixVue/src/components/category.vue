<template>
    <div class="slider">
        <h3>{{pTitle}}</h3>
        <span v-on:mouseenter="scrollEsquerda()" v-on:mouseleave="clearScroll()" class="handle handlePrev active">
            <i class="fa fa-caret-left" aria-hidden="true"></i>
        </span>


        <div ref="scroller" class="row">
            <div class="row__inner">
                <movie v-for="movie in movies" v-bind:key="movie.id" v-bind:p-title="movie.title" v-bind:img="movie.img"></movie>

            </div>
        </div>


        <span v-on:mouseenter="scrollDireita()" v-on:mouseleave="clearScroll()" class="handle handleNext active">
            <i class="fa fa-caret-right" aria-hidden="true"></i>
        </span>
    </div>
</template>


<script>

    import movie from './movie.vue'

    export default {
        props: ['pTitle', 'movies'],
        components: {
            movie
        },
        data() {
            return {
                interval: null,
            }
        },
        methods: {
            scrollDireita(){
                //const that = this;
                this.intervalo = setInterval(() => { this.$refs.scroller.scrollLeft += 1 }  , 5);
                // this.intervalo = setInterval(function(){ that.$refs.scroller.scrollLeft += 1 }  , 5);
            },
            scrollEsquerda(){
                //const that = this;
                this.intervalo = setInterval(() => { this.$refs.scroller.scrollLeft -= 1 }  , 5);
                // this.intervalo = setInterval(function(){ that.$refs.scroller.scrollLeft -= 1 }  , 5);
            },
            clearScroll(){
                const that = this;
                clearInterval(this.intervalo);
            }

        }
    }
</script>

<style lang="scss">

</style>

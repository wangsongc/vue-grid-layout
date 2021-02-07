<template>
    <div id="app">
        <h1 style="text-align: center">Vue Grid Layout</h1>
        <!--<pre>{{ layout | json }}</pre>-->
        <div>
            <div class="layoutJSON">
                Displayed as <code>[x, y, w, h]</code>:
                <div class="columns">
                    <div class="layoutItem" v-for="item in layout" :key="item.i">
                        <b>{{item.i}}</b>: [{{item.x}}, {{item.y}}, {{item.w}}, {{item.h}}]
                    </div>
                </div>
            </div>
        </div>
        <grid-layout
            :layout.sync="layout"
            :col-num="14"
            :row-height="30"
            :is-draggable="true"
            :is-resizable="true"
            :is-mirrored="false"
            :vertical-compact="true"
            :margin="[10, 10]"
            :use-css-transforms="true"
    >

        <grid-item v-for="item in layout"
                   :x="item.x"
                   :y="item.y"
                   :w="item.w"
                   :h="item.h"
                   :i="item.i"
                   :key="item.i">
            {{item.i}}
        </grid-item>
    </grid-layout>
    </div>
</template>

<script>
    import GridItem from './components/GridItem.vue';
    import GridLayout from './components/GridLayout.vue';

    let testLayout = [
        { x: 0, y: 0, w: 2, h: 5, i: "1" },
        { x: 0, y: 0, w: 10, h: 1, i: "2" },
        { x: 5, y: 1, w: 1, h: 1, i: "3" },
        { x: 5, y: 2, w: 1, h: 1, i: "4" },
        { x: 5, y: 3, w: 1, h: 1, i: "5", static: true }
    ];

    export default {
        name: 'app',
        components: {
            GridLayout,
            GridItem
        },
        data () {
            return {
                layout: JSON.parse(JSON.stringify(testLayout)),
                layout2: JSON.parse(JSON.stringify(testLayout)),
                // draggable: true,
                // resizable: true,
                // mirrored: false,
                // responsive: true,
                // preventCollision: false,
                // compact: true,
                // rowHeight: 30,
                // colNum: 12,
                // index: 0,
                // marginX: 10,
                // marginY: 10,
            }
        },
        mounted: function () {
            this.index = this.layout.length;
        },
        methods: {
            layoutCreatedEvent: function(newLayout){
                console.log("Created layout: ", newLayout)
            },
            layoutBeforeMountEvent: function(newLayout){
                console.log("beforeMount layout: ", newLayout)
            },
            layoutMountedEvent: function(newLayout){
                console.log("Mounted layout: ", newLayout)
            },
            layoutReadyEvent: function(newLayout){
                console.log("Ready layout: ", newLayout)
            },
            layoutUpdatedEvent: function(newLayout){
                console.log("Updated layout: ", newLayout)
            },
            breakpointChangedEvent: function(newBreakpoint, newLayout){
                console.log("breakpoint changed breakpoint=", newBreakpoint, ", layout: ", newLayout );
            }

        },
    }
</script>

<style>
</style>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>

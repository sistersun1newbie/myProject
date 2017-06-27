<template>
    <div class="mheader">
        <div :style="{width:ismobile?windowwidth*0.2+'px':'230px'}"
             class="mhitemr" style=" transition:all 0.5s;justify-content: center  ;">
             <slot name='logo'></slot>
        </div>
        <div class="mhitemr" :style="{width:ismobile?windowwidth*0.75+'px':windowwidth-250+'px'}">
            <slot name='left'> </slot>
            <slot name='right'>
            </slot>
        </div>
    </div>

</template>
<style>

    .mhicon2:active {
        /*background: #AA0013;*/
      box-shadow:0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5) ;
    }

    .mheader {
        /*flex-wrap: wrap;*/
        min-height: 50px;
        box-shadow: 3px 3px 3px #888888;
        display: flex;
    }

    .mhitemr {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 50px;
        /*transition:all 0.5s ;*/
    }

    
</style>
<script>
  import { mapActions } from 'vuex'
    export default{
        props: {
            windowwidth: {
                type: [String, Number],
                default: document.documentElement.clientWidth
            },
            ismobile: {
                type: Boolean,
                default: false
            }
        },
        methods: {
      
        

        },
    }
</script>

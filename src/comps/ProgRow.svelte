<script lang="ts">
    import type { Channel } from "../types";
    import ProgBlock from "./ProgBlock.svelte";

    export let channel: Channel
    const { name, programs } = channel

    export let selRow = false
    export let selProg = 0
    export let y: number
    export let click: (x: number, y: number) => void
</script>

<div class="progrow">
    <div class="channel">
        <h3>{name}</h3>
    </div>
    {#each programs as program, i}
        <ProgBlock {...{program, y, click}} selected={selProg === i && selRow} x={i}></ProgBlock>
    {/each}
</div>

<style lang="sass">
    .progrow
        display: flex

    .channel
        width: 150px
        display: flex
        align-items: center
        justify-content: center
        background-color: var(--cLvl2)
        flex-shrink: 0

    :global(.progblock):last-child
        width: 100% !important
</style>

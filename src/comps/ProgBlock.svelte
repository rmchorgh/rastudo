<script lang="ts">
	import type { Program } from '../types';
    
    export let program: Program;
	const { time, name } = program;

    export let x: number
    export let y: number
    export let click: (x: number, y: number) => void

    export let selected = false

	let w = !!time ? (time[1].getTime() - time[0].getTime()) / 10000 : 360;

	const timeDis = (t: Date) =>
		`${t.getHours()}:${t.getMinutes().toString().padStart(2, '0')}`;
</script>

<div on:click={() => click(x, y)} class={`progblock${selected ? ' selected' : ''}`} style="width: {w}px">
    <h3>{name}</h3>
    {#if !!time}
        <p>{timeDis(time[0])} - {timeDis(time[1])}</p>
    {/if}
</div>

<style lang="sass">
    .progblock
        background-color: var(--cLvl3)
        border: 1px solid var(--cLvl4)
        display: flex
        flex-direction: column
        height: 120px
        padding: 0.85em
        box-sizing: border-box
        transition: background-color 0.5s ease-in-out
        &.selected, &:hover
            background-color: var(--cLvl5)
    p
        font-size: 0.8em
        margin-top: 0.8em
</style>

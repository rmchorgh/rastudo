<script lang="ts">
    import '../globals.sass'
    import ProgRow from '../comps/ProgRow.svelte';
    import type { Channel, Program } from '../types';
import DescCard from '../comps/DescCard.svelte';

    const testProgram = (start='18', end='19'): Program => ({
        name: 'Test Program',
        time: [new Date(`2023-04-04T${start}:00:00`),new Date(`2023-04-04T${end}:00:00`)],
        channelName: 'testChannel',
        location: 'testLocation',
        description: 'testDescription'
    })

    const channels: Channel[] = [
        {
            name: "Gala",
            programs: [
                testProgram(),
                testProgram('19', '21'),
                testProgram('21', '22')
            ]
        },
        {
            name: "J'ouvert",
            programs: [
                testProgram('18','20'),
                testProgram('20','22'),
            ]
        },
        {
            name: "CariFest",
            programs: [
                testProgram('15','18'),
                testProgram('18','20'),
                testProgram('20','22'),
            ]
        },
        {
            name: "Pageant",
            programs: [
                testProgram('18','20'),
                testProgram('20','22'),
            ]
        },
    ]

    let selRow = 0
    let selProg = 0

    const handleKeys = (ev: KeyboardEvent) => {
        switch (ev.key) {
            case 'ArrowUp':
                selRow = Math.max(selRow - 1, 0)
                selProg = Math.min(selProg, channels[selRow].programs.length - 1)
                break
            case 'ArrowDown':
                selRow = Math.min(selRow + 1, channels.length - 1)
                selProg = Math.min(selProg, channels[selRow].programs.length - 1)
                break
            case 'ArrowLeft':
                selProg = Math.max(selProg - 1, 0)
                break
            case 'ArrowRight':
                selProg = Math.min(selProg + 1, channels[selRow].programs.length - 1)
                break
        }
    }

    const click = (x: number, y: number) => {
        selProg = x
        selRow = y
    }

    const tvbuttons = [
        {
            letter: 'T',
            color: 'blue',
            name: 'Twitter'
        },
        {
            letter: 'I',
            color: 'purple',
            name: 'Instagram'
        }
    ]
</script>

<svelte:window on:keydown={handleKeys} />

<main>
    <section id="preview">
        
    </section>

    <section id='active'>
        <DescCard md={channels[selRow].programs[selProg].description} />
    </section>

    <section id='channels'>
        {#each channels as channel, i}
            <ProgRow {...{channel, click}} bind:selProg selRow={selRow === i} y={i} />
        {/each}
    </section>

    <section id='tvbuttons'>
        {#each tvbuttons as {letter, name, color}}
        <div class="button tv">
            <span style="background-color: {color};">{letter}</span>
            <p>{name}</p>
        </div>
        {/each}
    </section>
</main>

<style lang="sass">
    main
        display: grid
        grid-template-areas: "preview active" "channels channels" "tvbuttons tvbuttons"
        grid-template-columns: 1fr 1fr
        grid-template-rows: 1fr 450px 80px
        height: 100%

    #preview
        grid-area: preview
        border: 1px solid transparent
        border-bottom-color: var(--cLvl4)
        border-right-color: var(--cLvl4)

    #active
        grid-area: active
        border: 1px solid transparent
        border-bottom-color: var(--cLvl4)
        border-left-color: var(--cLvl4)

    #channels
        grid-area: channels
        overflow: scroll

    #tvbuttons
        display: flex
        flex-direction: row-reverse
        grid-area: tvbuttons
        margin: 1em

    .tv.button
        display: flex
        align-items: center
        align-self: center
        margin-right: 1em
        span
            margin-right: 1em
            height: 1em
            width: 1em
            text-align: center
            padding: 0.25em
</style>

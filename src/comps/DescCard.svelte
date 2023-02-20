<script lang='ts'>
    export let md: string

    const mdToHtml = (x: string): string => x
</script>

{@html mdToHtml(md)}

<script>
    import Sipac from "./Projects/Sipac.svelte";
    const projects = [
        Sipac,
    ];
</script>

<div id="fullpage">
    {#each projects as project}
        <svelte:component this={project}  />
    {/each}
</div>
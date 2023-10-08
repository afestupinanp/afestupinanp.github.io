<script>
    import { _ } from "svelte-i18n";
    import { link } from 'svelte-spa-router';
    import ProjectItem from "./Projects/ProjectItem.svelte";
    $: document.title = 'Andrés Peláez | ' + $_('navbar.projects');
</script>

<div class="row slideUp position-relative top-padding-fix">
    <div class="col-12 text-center">
        ...
    </div>
</div>
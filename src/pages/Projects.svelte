<script>
    import { _ } from "svelte-i18n";
    $: document.title = 'Andrés Peláez | ' + $_('navbar.projects');
</script>

<div class="row slideUp position-relative top-padding-fix">
    <div class="col-12 text-center">
        <h1>
            <i class="fa-solid fa-hammer"></i>
        </h1>
        {$_('soon')}
    </div>
</div>
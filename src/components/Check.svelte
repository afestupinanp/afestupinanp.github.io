<script>
    import Helpers from '@src/helpers';
    export let label = '';
    export let checked = false;
    export let disabled = false;
    export let onChange = () => {};

    const id = Helpers.randomString();
</script>

<div class="hoverable">
    <div class="hoverable form-check form-switch">
        <input {disabled} on:change={onChange} bind:checked={checked} class="hoverable form-check-input" role="switch" {id} type="checkbox">
        <label for="{id}" class="hoverable form-check-label">{@html label}</label>
    </div>
</div>
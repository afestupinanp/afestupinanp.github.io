<script>
    import Helpers from '../helpers';
    export let label = '';
    export let checked = false;
    export let disabled = false;
    export let onChange = () => {};

    const id = Helpers.randomString();
</script>

<div class="form-check form-switch">
    <input {disabled} on:change={onChange} bind:checked={checked} class="form-check-input" role="switch" {id} type="checkbox">
    <label for="{id}" class="form-check-label">{@html label}</label>
</div>
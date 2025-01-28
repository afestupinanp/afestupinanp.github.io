<script>
    import Helpers from '@src/helpers';
    /**
     * @typedef {Object} Props
     * @property {string} [label]
     * @property {boolean} [checked]
     * @property {boolean} [disabled]
     * @property {any} [onChange]
     */

    /** @type {Props} */
    let {
        label = '',
        checked = $bindable(false),
        disabled = false,
        onChange = () => {}
    } = $props();

    const id = Helpers.randomString();
</script>

<div class="hoverable">
    <div class="hoverable form-check form-switch">
        <input {disabled} onchange={onChange} bind:checked={checked} class="hoverable form-check-input" role="switch" {id} type="checkbox">
        <label for="{id}" class="hoverable form-check-label">{@html label}</label>
    </div>
</div>
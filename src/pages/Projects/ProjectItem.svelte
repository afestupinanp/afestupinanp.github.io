<script>
    /**
     * @typedef {Object} Props
     * @property {import('svelte').Snippet} [content]
     */

    /** @type {Props} */
    let { content } = $props();

</script>

<div class="timeline__item">
    <div class="timeline__content">
        {@render content?.()}
    </div>
</div>
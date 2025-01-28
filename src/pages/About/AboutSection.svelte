<script>
    import { _ } from "svelte-i18n";
    import Helpers from "@src/helpers";

    /**
     * @typedef {Object} Props
     * @property {any} icon
     * @property {any} title
     * @property {string} [description]
     * @property {string} [collapseState]
     * @property {import('svelte').Snippet} [content]
     */

    /** @type {Props} */
    let {
        icon,
        title,
        description = '',
        collapseState = 'show',
        content
    } = $props();
    
    const sectionId = Helpers.randomString();
</script>

<section class="py-3">
    <h5 class="hoverable" data-bs-toggle="collapse" href="#{sectionId}" aria-controls="{sectionId}">
        <i class={icon}></i>
        {title}
    </h5>
    <hr/>
    <div class="collapse {collapseState}" id="{sectionId}">
        {@html description}
        {@render content?.()}
    </div>
</section>
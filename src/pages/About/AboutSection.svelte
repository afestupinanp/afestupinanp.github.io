<script>
    import { _ } from "svelte-i18n";
    import Helpers from "../../helpers";

    export let icon;
    export let title;
    export let description = '';
    export let collapseState = 'show';
    
    const sectionId = Helpers.randomString();
</script>

<section class="py-3">
    <h5 data-bs-toggle="collapse" href="#{sectionId}" aria-controls="{sectionId}">
        <i class={icon}></i>
        {title}
    </h5>
    <hr/>
    <div class="collapse {collapseState}" id="{sectionId}">
        {@html description}
        <slot name="content"></slot>
    </div>
</section>
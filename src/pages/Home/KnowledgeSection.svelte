<script>
    import { _ } from "svelte-i18n";

    export let borderClass;
    export let iconClass;

    export let header;
    export let description;
    export let offset = '';
</script>

<div class="col-12 {offset} col-lg-3 mb-3 d-flex align-items-stretch my-4">
    <div class="card glow">
        <div class="card-body border-knowledge border-knowledge-{borderClass} text-center">
            <i style="margin-top: 50px; margin-bottom: 50px;" class="{iconClass} fs-1 me-4"></i>
            <br/>
            <span class="fs-3">{header}</span>
            <p class="mt-4">{description}</p>
        </div>
    </div>
</div>
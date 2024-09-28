<script>
    import { _ } from "svelte-i18n";

    export let borderClass;
    export let iconClass;

    export let header;
    export let description;
</script>

<div class="col-10 col-sm-5 offset-1 offset-lg-0 col-lg-3 my-3">
    <div class="d-flex align-items-center h-100 my-2">
        <div class="card shadow glow h-100 w-100">
            <div class="card-body border-knowledge border-knowledge-{borderClass} text-center">
                <i style="margin-top: 50px; margin-bottom: 50px;" class="{iconClass} fs-1"></i>
                <br/>
                <span class="fs-3">{header}</span>
                <p class="mt-4">{description}</p>
            </div>
        </div>
    </div>
</div>
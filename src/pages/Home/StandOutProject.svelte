<script>
    import { _ } from "svelte-i18n";

    export let image;
    export let title;
    export let description;
    export let url = '';
    export let order;
    export let repoUrl = '';

    const orderImage = order == 1 ? 'order-lg-1' : 'order-lg-2';
    const orderDescription = order == 1 ? 'order-lg-2' : 'order-lg-1';
</script>

<div class="col-12 py-4">
    <div class="position-relative row slideIn">
        <div class="col-12 col-lg-7 order-1 {orderImage} text-center" style="background: url('{image}') no-repeat; background-size: cover; height: 300px;">
            &nbsp;
        </div>
        <div class="col-12 col-lg-5 order-2 {orderDescription}">
            <h4 class="py-3">{title}</h4>
            <p>{description}</p>
            <div class="text-right">
                {#if url}
                    <a class="btn btn-primary btn-block" href={url} target="_blank" rel="noreferrer noopener">
                        <i class="fa-solid fa-up-right-from-square"></i>
                        {$_('projects.visit-page')}
                    </a>
                {/if}
                {#if repoUrl}
                    <a class="btn btn-primary btn-block" href={repoUrl} target="_blank" rel="noreferrer noopener">
                        <i class="fa-solid fa-code-branch"></i>
                        {$_('projects.code-repo')}
                    </a>
                {/if}
            </div>
        </div>
    </div>
</div>
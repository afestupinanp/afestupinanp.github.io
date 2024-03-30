<script>
    import { _ } from 'svelte-i18n';

    import appsUrl from '@img/appsLogo.png?url';
</script>

<div class="row">
    <div class="col-12 vertical-align-middle" style="background: url('{appsUrl}') no-repeat; background-size: cover; background-position: center; height: 200px;">
        <h1 class="text-center">{$_('projects.apps.title')}</h1>
    </div>
</div>
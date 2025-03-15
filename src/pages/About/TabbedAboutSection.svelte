<script>
    import { _ } from 'svelte-i18n';
    import badges from '@src/pages/About/badges.json';
    import AboutBadge from '@src/pages/About/AboutBadge.svelte';

    const current = new Date();
    let difference = $state(current.getFullYear() - 2000);
    if (current.getMonth() < 6) {
        difference--;
    }

</script>

<ul class="nav nav-tabs d-flex w-100 mt-3" role="tablist">
    <li class="nav-item flex-fill" role="presentation">
        <button class="nav-link w-100 active" id="about-me-tab" data-bs-toggle="tab" data-bs-target="#about-me" type="button" role="tab" aria-controls="about-me" aria-selected="true">
            {$_('about.title')}
        </button>
    </li>
    <li class="nav-item flex-fill" role="presentation">
        <button class="nav-link w-100" id="abilities-tab" data-bs-toggle="tab" data-bs-target="#abilities" type="button" role="tab" aria-controls="abilities" aria-selected="false">
            {$_('about.abilities')}
        </button>
    </li>
</ul>
<div class="tab-content mt-4">
    <div class="tab-pane fade show active" id="about-me" role="tabpanel" aria-labelledby="about-me-tab">
        <p class="text-left">{@html $_('about.myself-description', {values: {'years': difference}})}</p>
    </div>
    <div class="tab-pane fade" id="abilities" role="tabpanel" aria-labelledby="abilities-tab">
        <ul class="d-flex flex-wrap p-0" style="list-style-type: none;">
            {#each badges as badgeInfo}
                <li class="w-25 w-50 text-center">
                    <AboutBadge color={badgeInfo.color} icon={badgeInfo.icon} name={badgeInfo.name} />
                </li>
            {/each}
        </ul>
    </div>
</div>
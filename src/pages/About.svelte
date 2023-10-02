<script>
    import { _ } from 'svelte-i18n';
    import me from '../assets/images/me.jpeg';
    import AboutSection from './About/AboutSection.svelte';
    import AboutBadge from './About/AboutBadge.svelte';

    import badges from './About/badges.json';

    $: document.title = 'Andrés Peláez | ' + $_('about.title');
    const current = new Date();
    let difference = current.getFullYear() - 2000;
    if (current.getMonth() < 7 && current.getDate() < 21) {
        difference = difference - 1;
    }
</script>

<div class="row slideIn position-relative">
    <div class="col-12 col-lg-4 text-center">
        <img src="{me}" class="img-fluid rounded-circle" width="400" height="400" alt="" />
        <h2 class="py-4">{$_('about.title')}</h2>
    </div>
    <div class="col-12 col-lg-8">
        <AboutSection icon="fa-solid fa-hammer" title={$_('about.abilities')}>
            <span slot="content">
                {#each badges as badgeInfo}
                    <AboutBadge color={badgeInfo.color} icon={badgeInfo.icon} name={badgeInfo.name} />
                {/each}
            </span>
        </AboutSection>
        <AboutSection icon="fa-solid fa-user-circle" title={$_('about.myself')} description={$_('about.myself-description', {values: {'years': difference}})} />
    </div>
</div>

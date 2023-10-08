<script>
    import { _ } from 'svelte-i18n';
    import me from '@img/me.jpeg?url';
    import AboutSection from './About/AboutSection.svelte';
    import AboutBadge from './About/AboutBadge.svelte';

    import badges from './About/badges.json';

    $: document.title = 'Andrés Peláez | ' + $_('about.title');
    const current = new Date();
    let difference = current.getFullYear() - 2000;
    if (current.getMonth() < 7 && current.getDate() < 21) {
        difference = difference - 1;
    }

    $: experiences = $_('about.experiences');
    $: academics = $_('about.academics');
</script>

<div class="row slideUp position-relative top-padding-fix page-padding">
    <div class="col-12 col-lg-5">
        <div class="text-center">
            <img src="{me}" class="img-fluid shadow rounded-circle" width="400" height="400" alt="" />
            <h2 class="py-4">{$_('about.title')}</h2>
        </div>
        <p class="text-left">{@html $_('about.myself-description', {values: {'years': difference}})}</p>
    </div>
    <div class="col-12 col-lg-7">
        <AboutSection icon="fa-solid fa-hammer" title={$_('about.abilities')}>
            <span slot="content">
                {#each badges as badgeInfo}
                    <AboutBadge color={badgeInfo.color} icon={badgeInfo.icon} name={badgeInfo.name} />
                {/each}
            </span>
        </AboutSection>
        <AboutSection icon="fa-solid fa-user-circle" title={$_('about.experience')}>
            <div slot="content">
                {#if Array.isArray(experiences) && experiences.length}
                    <ul class="timeline">
                        {#each experiences as experience}
                            <li class="py-3">
                                <div>
                                    <h4>{experience.title}</h4>
                                    <h6>{experience.time} | {experience.position}</h6>
                                    <p class="py-3">{experience.description}</p>
                                </div>
                            </li>
                        {/each}
                    </ul>
                {/if}
            </div>
        </AboutSection>
        <AboutSection icon="fa-solid fa-graduation-cap" title={$_('about.academic')}>
            <div slot="content">
                {#if Array.isArray(academics) && academics.length}
                    <ul class="timeline">
                        {#each academics as academic}
                            <li class="py-3">
                                <div>
                                    <h4>{academic.title}</h4>
                                    <h6>{academic.time} | {academic.location}</h6>
                                </div>
                            </li>
                        {/each}
                    </ul>
                {/if}
            </div>
        </AboutSection>
    </div>
</div>

<script>
    import { _, json } from 'svelte-i18n';
    import me from '@img/me.jpeg?url';
    import AboutSection from '@src/pages/About/AboutSection.svelte';
    import AboutBadge from '@src/pages/About/AboutBadge.svelte';

    import badges from '@src/pages/About/badges.json';

    $effect.pre(() => {
        document.title = 'Andrés Peláez - ' + $_('about.title');
    });

    const current = new Date();
    let difference = $state(current.getFullYear() - 2000);
    if (current.getMonth() < 6) {
        difference--;
    }

    let experiences = $derived($json('about.experiences'));
    let academics = $derived($json('about.academics'));
</script>

<div class="row slideUp position-relative top-padding page-padding">
    <div class="col-12 col-lg-5">
        <div class="text-center">
            <img src="{me}" class="img-fluid shadow rounded-circle" width="400" height="400" alt="Andrés Felipe Estupiñán Peláez" />
            <h2 class="py-4">{$_('about.title')}</h2>
        </div>
        <p class="text-left">{@html $_('about.myself-description', {values: {'years': difference}})}</p>
    </div>
    <div class="col-12 col-lg-7">
        <AboutSection icon="fa-solid fa-hammer" title={$_('about.abilities')}>
            {#snippet content()}
                <span >
                    {#each badges as badgeInfo}
                        <AboutBadge color={badgeInfo.color} icon={badgeInfo.icon} name={badgeInfo.name} />
                    {/each}
                </span>
            {/snippet}
        </AboutSection>
        <AboutSection icon="fa-solid fa-user-circle" title={$_('about.experience')}>
            {#snippet content()}
                <div >
                    {#if Array.isArray(experiences) && experiences.length}
                        <ul class="timeline">
                            {#each experiences as experience, index (index)}
                                <li class="py-3">
                                    <div>
                                        <h4>{experience.title}</h4>
                                        <h6>{experience.time} | {experience.position}</h6>
                                        <small><i>{experience.location}</i></small>
                                        <p class="py-3">{experience.description}</p>
                                    </div>
                                </li>
                            {/each}
                        </ul>
                    {/if}
                </div>
            {/snippet}
        </AboutSection>
        <AboutSection icon="fa-solid fa-graduation-cap" title={$_('about.academic')}>
            {#snippet content()}
                <div >
                    {#if Array.isArray(academics) && academics.length}
                        <ul class="timeline">
                            {#each academics as academic, index (index)}
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
            {/snippet}
        </AboutSection>
    </div>
</div>

<script>
    import { _, json } from 'svelte-i18n';
    import me from '@img/me.jpeg?url';
    import AboutSection from '@src/pages/About/AboutSection.svelte';
    import TabbedAboutSection from './About/TabbedAboutSection.svelte';

    $effect.pre(() => {
        document.title = 'Andrés Peláez - ' + $_('about.title');
    });

    let experiences = $derived($json('about.experiences'));
    let academics = $derived($json('about.academics'));
</script>

<div class="row slideUp position-relative top-padding page-padding">
    <div class="col-12 col-lg-5">
        <div class="text-center">
            <img src="{me}" class="img-fluid shadow rounded-circle" width="400" height="400" alt="Andrés Felipe Estupiñán Peláez" />
        </div>
        <TabbedAboutSection></TabbedAboutSection>
        <!-- <AboutSection icon="fa-solid fa-hammer" title={$_('about.abilities')}>
            {#snippet content()}
                
            {/snippet}
        </AboutSection>
        <AboutSection icon="fa-solid fa-user" title={$_('about.title')}>
            {#snippet content()}
                <p class="text-left">{@html $_('about.myself-description', {values: {'years': difference}})}</p>
            {/snippet}
        </AboutSection> -->
    </div>
    <div class="col-12 col-lg-7">
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

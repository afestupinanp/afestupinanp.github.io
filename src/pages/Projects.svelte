<script>
    import { _ } from "svelte-i18n";
    import { link } from 'svelte-spa-router';
    import { onMount } from "svelte";
    import ProjectItem from "./Projects/ProjectItem.svelte";
    import projects from './Projects/projects.json';
    $: document.title = 'Andrés Peláez | ' + $_('navbar.projects');

    onMount(() => {
        timeline('#timeline', {
            'verticalStartPosition': 'right',
            'mode': 'vertical'
        });
    });
</script>

<div class="row slideUp position-relative">
    <div class="col-12 col-lg-8 offset-0 offset-lg-2">
        <div id="timeline">
            <div class="timeline__wrap">
                <div class="timeline__items">
                    {#each projects as project}
                        <ProjectItem>
                            <div slot="content">
                                <a class="text-dark" use:link={{'href': project.url}}>
                                    <h6>{$_(project.title)}</h6>
                                </a>
                            </div>
                        </ProjectItem>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</div>
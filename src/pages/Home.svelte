<script>
    import { onMount } from "svelte";
    import { _ } from "svelte-i18n";

    import backgroundImage from '../assets/images/background.jpg?url';
    import sipacImage from '../assets/images/sipacLogo.png?url';
    import appsImage from '../assets/images/appsLogo.png?url';
    import ssmanagerImage from '../assets/images/ssmanagerLogo.png?url';

    import KnowledgeSection from "./Home/KnowledgeSection.svelte";
    import StandOutProject from "./Home/StandOutProject.svelte";
    import { link } from "svelte-spa-router";

    $: document.title = 'Andrés Peláez | ' + $_('home.title');
</script>

<div class="row align-items-center">
    <div class="col-12 text-center text-white p-5" style="background: url('{backgroundImage}') no-repeat; background-size: cover; background-position: center;">
        <div class="slideIn">
            <h1>{$_('home.welcoming')}</h1>
            <h3>{$_('home.my-name')}</h3>
        </div>
    </div>
    <div class="col-12">
        <div class="border-primary position-relative slideIn p-4">
            <i class="fa-solid fa-computer fs-4 me-4"></i>
            <span class="fs-4">{$_('home.sections.my-knowledge')}</span>
        </div>
    </div>
    <div class="col-12">
        <div class="row">
            <KnowledgeSection borderClass="primary" iconClass="fa-solid fa-laptop-code" header={$_('home.icons.full-stack')} description={$_('home.icons.full-stack-description')} />
            <KnowledgeSection borderClass="primary" iconClass="fa-solid fa-rocket" header={$_('home.icons.cicd')} description={$_('home.icons.cicd-description')} />
            <KnowledgeSection borderClass="primary" iconClass="fa-solid fa-language" header={$_('home.icons.bilingual')} description={$_('home.icons.bilingual-description')} />
            <KnowledgeSection borderClass="primary" iconClass="fa-solid fa-hourglass-half" header={$_('home.icons.experience-time')} description={$_('home.icons.experience-time-description')} />
        </div>
    </div>
    <div class="col-12">
        <div class="border-primary position-relative slideIn p-4">
            <i class="fa-solid fa-briefcase fs-4 me-4"></i>
            <span class="fs-4">{$_('home.sections.stand-out-projects')}</span>
        </div>
        <p class="slideIn position-relative">{$_('projects.nda-warning')}</p>
    </div>
    <StandOutProject type="1" image={sipacImage} title={$_('projects.sipac.title')} description={$_('projects.sipac.description')} url="https://sipac2.usc.edu.co" />
    <StandOutProject type="2" image={appsImage} title={$_('projects.apps.title')} description={$_('projects.apps.description')} url="https://apps.usc.edu.co" />
    <StandOutProject type="1" image={ssmanagerImage} title={$_('projects.ssmanager.title')} description={$_('projects.ssmanager.description')} repoUrl="https://github.com/afestupinanp/ssmanager" />
    <div class="col-12 text-center">
        <a class="btn btn-info" use:link={{'href': '/projects'}}>
            <i class="fa-solid fa-briefcase"></i>
            {$_('projects.see-all')}
        </a>
    </div>
</div>

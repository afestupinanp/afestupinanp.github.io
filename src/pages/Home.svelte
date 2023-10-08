<script>
    import { _ } from "svelte-i18n";

    import backgroundImage from '@img/background.jpg?url';
    import sipacImage from '@img/sipacLogo.png?url';
    import appsImage from '@img/appsLogo.png?url';
    import ssmanagerImage from '@img/ssmanagerLogo.png?url';
    import me from '@img/me.jpeg?url';

    import KnowledgeSection from "./Home/KnowledgeSection.svelte";
    import StandOutProject from "./Home/StandOutProject.svelte";
    import { link } from "svelte-spa-router";
    import HeaderSection from "./Home/HeaderSection.svelte";

    $: document.title = 'Andrés Peláez | ' + $_('home.title');
</script>

<div class="row">
    <div class="col-12 text-white top-padding-fix welcome-section d-flex flex-row align-items-center" style="background-image: url('{backgroundImage}');">
        <div class="flex-grow-1">
            <div class="row align-items-center">
                <div class="col-12 col-lg-6 text-center">
                    <div class="position-relative slideUp">
                        <img src={me} class="img-fluid shadow rounded-circle" width="200" height="200" alt="" />
                    </div>
                </div>
                <div class="col-12 col-lg-6">
                    <div class="position-relative slideUp">
                        <h1>{$_('home.welcoming')}</h1>
                        <h3>{$_('home.my-name')}</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="row page-padding">
    <div class="col-12">
        <HeaderSection color="primary" icon="fa-solid fa-computer" text={$_('home.sections.my-knowledge')}  />
    </div>
    <div class="col-12">
        <div class="position-relative slideUp row">
            <KnowledgeSection borderClass="primary" iconClass="fa-solid fa-laptop-code" header={$_('home.icons.full-stack')} description={$_('home.icons.full-stack-description')} />
            <KnowledgeSection borderClass="primary" iconClass="fa-solid fa-rocket" header={$_('home.icons.cicd')} description={$_('home.icons.cicd-description')} />
            <KnowledgeSection borderClass="primary" iconClass="fa-solid fa-language" header={$_('home.icons.bilingual')} description={$_('home.icons.bilingual-description')} />
            <KnowledgeSection borderClass="primary" iconClass="fa-solid fa-hourglass-half" header={$_('home.icons.experience-time')} description={$_('home.icons.experience-time-description')} />
        </div>
    </div>
    <div class="col-12">
        <HeaderSection color="primary" icon="fa-solid fa-briefcase" text={$_('home.sections.stand-out-projects')}  />
    </div>
    <StandOutProject type="2" image={sipacImage} title={$_('projects.sipac.title')} description={$_('projects.sipac.description')} url="https://sipac2.usc.edu.co" />
    <StandOutProject type="2" image={appsImage} title={$_('projects.apps.title')} description={$_('projects.apps.description')} url="https://apps.usc.edu.co" />
    <StandOutProject type="2" image={ssmanagerImage} title={$_('projects.ssmanager.title')} description={$_('projects.ssmanager.description')} repoUrl="https://github.com/afestupinanp/ssmanager" />
    <div class="col-12 text-center">
        <a class="btn btn-info" use:link={{'href': '/projects'}}>
            <i class="fa-solid fa-briefcase"></i>
            {$_('projects.see-all')}
        </a>
    </div>
</div>

<script>
    import { _ } from 'svelte-i18n';
    import me from '../assets/images/me.jpeg';
    import AboutSection from './About/AboutSection.svelte';
    import AboutBadge from './About/AboutBadge.svelte';

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
                <AboutBadge color="warning" icon="fa-brands fa-gitlab" name="GitLab Self Managed" />
                <AboutBadge color="warning" icon="fa-brands fa-gitlab" name="GitLab CI/CD" />
                <AboutBadge color="dark" icon="fa-brands fa-github" name="GitHub Actions" />
                <AboutBadge color="danger" icon="fa-brands fa-git" name="Git" />
                <AboutBadge color="info" icon="fa-brands fa-js" name="JavaScript/TypeScript" />
                <AboutBadge color="danger" icon="fa-brands fa-css3" name="CSS3" />
                <AboutBadge color="info" icon="fa-brands fa-docker" name="Docker" />
                <AboutBadge color="dark" icon="fa-brands fa-php" name="php" />
                <AboutBadge color="danger" icon="fa-brands fa-laravel" name="Laravel" />
                <AboutBadge color="dark" icon="fa-brands fa-react" name="React (Native)" />
                <AboutBadge color="dark" icon="fa-brands fa-microsoft" name="C#" />
                <AboutBadge color="danger" icon="fa-brands fa-java" name="Java" />
                <AboutBadge color="success" icon="fa-brands fa-vuejs" name="Vue.js" />
                <AboutBadge color="warning" icon="fa-brands fa-linux" name="Linux" />
                <AboutBadge color="info" icon="fa-brands fa-python" name="Python" />
                <AboutBadge color="success" icon="fa-brands fa-node-js" name="Node.js" />
                <AboutBadge color="dark" icon="fa-brands fa-bootstrap" name="Bootstrap" />
                <AboutBadge color="danger" icon="fa-solid fa-code" name="Lua" />
            </span>
        </AboutSection>
        <AboutSection icon="fa-solid fa-user-circle" title={$_('about.myself')} description={$_('about.myself-description', {values: {'years': difference}})} />
    </div>
</div>

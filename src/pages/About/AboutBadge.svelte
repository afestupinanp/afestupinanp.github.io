<script>
    let { icon, name, color } = $props();
</script>

<h4 class="d-inline-block mx-2">
    <span class="badge text-bg-{color}">
        <i class="{icon} me-1"></i>
        {name}
    </span>
</h4>
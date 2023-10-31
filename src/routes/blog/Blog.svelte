<script>
  export let data;
  export let request; 
  export let settings;
  let { html, frontmatter } = data;
  html = html.replace(/<table>/g, "<table class=\"table\">");
  const title = process.env.TITLE;
</script>

<svelte:head>
<title>{frontmatter.title}</title>
<meta name="description" content={frontmatter.description ? frontmatter.description : frontmatter.title} />
{#if frontmatter.tags}
<meta name="keywords" content="{frontmatter.tags}">
{:else}
<meta name="keywords" content="{title} Blog">
{/if}
<link href="{`${settings.origin}${request.permalink}`}" rel="canonical" />
</svelte:head>

<div class="container min-vh-100 mt-5">
  <h1>{frontmatter.title}</h1>
  <div class="line-numbers">
  {@html html}
  </div>
</div>

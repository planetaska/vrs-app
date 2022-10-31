<script lang="ts">
  export let blog: {
    title: string
    article: string
  }
</script>

<h1>{blog.title}</h1>
<p>{blog.article}</p>
import BlogsShow from "../components/BlogShow.svelte"

const target = document.getElementById("blogs-show")

new BlogsShow({
  target: target,
    props: {
      blog: {
        title: target.dataset["title"],
        article: target.dataset["article"],
      },
    }
})
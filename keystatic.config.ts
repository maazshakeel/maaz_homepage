import { collection, config, fields } from "@keystatic/core";

const isDev = process.env.NODE_ENV === "development";
const useGitHub =
  !isDev && Boolean(process.env.KEYSTATIC_GITHUB_CLIENT_ID);

export default config({
  storage: useGitHub
    ? {
        kind: "github",
        repo: "maazshakeel/maaz_homepage",
      }
    : {
        kind: "local",
      },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "content/posts/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        description: fields.text({
          label: "Description",
          multiline: true,
        }),
        date: fields.date({ label: "Published date" }),
        tags: fields.array(fields.text({ label: "Tag" }), {
          label: "Tags",
          itemLabel: (props) => props.value || "Tag",
        }),
        cover: fields.image({
          label: "Cover image",
          directory: "public/blog",
          publicPath: "/blog/",
        }),
        content: fields.markdoc({
          label: "Content",
          options: {
            image: {
              directory: "public/blog",
              publicPath: "/blog/",
            },
          },
        }),
      },
    }),
  },
});

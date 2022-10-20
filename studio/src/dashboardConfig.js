export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "635146795f31232d4a6f0396",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-se7u15ds",
                  apiId: "51648d56-9526-4ffe-ae17-fc13ee6d1229",
                },
                {
                  buildHookId: "6351467a8e3b732dc5dcee1e",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-rcp9q8yt",
                  apiId: "d3a2f5e3-5ca8-4fcb-8ce3-3f95f70aae20",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/nickzsche/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-rcp9q8yt.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};

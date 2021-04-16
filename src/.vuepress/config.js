const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "TGN Archive Project",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    nav: [
      {
        text: "Entries",
        link: "/entries/",
      },
      {
        text: "Reddit Viewer",
        link: "https://tgnap.github.io/reddit-viewer",
      },
      {
        text: "Discord",
        link: "https://discord.gg/McNyfhH",
      },
      {
        text: "Minecraft server",
        link: "https://www.tecnagamer.com/archive.html",
      },
    ],
    sidebar: {
      "/entries/": [
        {
          title: "TGN",
          children: [
            "TGN/alfredo-x-reader",
            "TGN/cipen",
            "TGN/holotic",
            "TGN/james-x-europa",
            "TGN/jaytle",
            "TGN/kerry",
            "TGN/lillwargen-x-leon",
            "TGN/not-a-fanfic",
            "TGN/overfast-x-muzak",
            "TGN/overfast",
            "TGN/pen-scp",
            "TGN/queens-thing",
            "TGN/sirius-gives-holotic-a-trident",
            "TGN/tgn-bizzare-adventure",
            "TGN/the-man-with-a-spoon",
            "TGN/theo-x-non-dono",
            "TGN/theo-x-will",
            "TGN/val-x-brush-harry",
          ],
        },
        {
          title: "TG 1.15",
          children: [
            "TG/1-15/ethan-x-mario",
            "TG/1-15/the-ballad-of-the-n-word",
            "TG/1-15/the-book-of-boul",
            "TG/1-15/the-truth",
            "TG/1-15/to-voodoobr",
            "TG/1-15/voodoobr",
          ],
        },
        {
          title: "TG 1.16",
          children: [
            "TG/1-16/cheese-vs-ethan-fanfic-act-1",
            "TG/1-16/demise-escapes-the-irs",
            "TG/1-16/in-a-society",
            "TG/1-16/infinity-is-trash",
            "TG/1-16/nino-x-heyitssirius-fanfic",
            "TG/1-16/scp-3969",
            "TG/1-16/superiority-constitution",
            "TG/1-16/the-tg-liberation-front",
          ],
        },
        {
          title: "NSFW",
          children: [
            "nsfw/death-grips-x-oppo",
            "nsfw/fox-x-rachnera",
            "nsfw/jaxon-x-queen",
            "nsfw/julia-x-marc",
            "nsfw/mboo8-x-loboga",
            "nsfw/pixela-x-sirius",
            "nsfw/theo-x-mario",
            "nsfw/tixent-x-caro",
            "nsfw/will-x-pen"
          ],
        },
        {
          title: "Discord Dumps",
          sidebarDepth: 0,
          children: [
            "discord-dumps/oppo-rd-discord-dump",
            "discord-dumps/server-general",
            "discord-dumps/tgn-discord-dump",
          ],
        },
        {
          title: "Other",
          children: [
            "other/smegs-autobiography",
          ],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top"],
};

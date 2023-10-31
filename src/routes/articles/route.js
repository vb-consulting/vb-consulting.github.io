const getBlogsData = require("../../blogs-data.js");

module.exports = {
  data: async ({ request }) => {
    return {
      blogs: await getBlogsData(),
      footerBlogs: await getBlogsData(4),
      timeAgo: true,
      bootstrapTooltips: true
    }
  },
  all: () => [{ slug: '/' }],
  permalink: "/articles/",
};

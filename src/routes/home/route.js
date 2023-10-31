const getBlogsData = require("../../blogs-data.js");

module.exports = {
  data: async ({ request }) => {
    return {
      blogs: await getBlogsData(),
      footerBlogs: await getBlogsData(4),
      timeAgo: true,
      bootstrapTooltips: true,
      fixedNav: true,
      norm: "3.3.1",
      pgroutiner: "3.5.7",
    }
  },
  all: () => [{ slug: "/" }],
  permalink: "/"
};

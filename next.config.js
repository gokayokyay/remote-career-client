const fetch = require('isomorphic-unfetch');

module.exports = {
  async exportPathMap() {
    // we fetch our list of posts, this allow us to dynamically
    // generate the exported pages
    const response = await fetch(
      // eslint-disable-next-line global-require
      `${require('./src/config').API_ENDPOINT}/jobs`,
    );
    const postList = await response.json();
    // tranform the list of posts into a mapof pages with the pathname
    // `/post/:id`
    const pages = postList.reduce(
      // eslint-disable-next-line no-shadow
      (pages, post) => ({
        ...pages,
        // eslint-disable-next-line no-underscore-dangle
        [`/jobs/${post._id}`]: { page: '/jobs/[id]' },
      }),
      {},
    );
    // combine the map of post pages with the home
    return { ...pages, '/': { page: '/' } };
  },
};

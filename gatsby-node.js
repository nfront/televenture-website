const path = require(`path`);
const config = require('./src/utils/siteConfig');

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

  // This is to create redirect from /Funds to /Funds/NIK-I
  const getRedirects = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulFunds(sort: { fields: [order] }) {
          nodes {
            shortName
          }
        }
      }
    `).then(result => {
      const [slug] = result.data.allContentfulFunds.nodes;
      const fundRedirect = `/Funds/${slug.shortName.replace(/\s+/g, '-')}`;

      const redirectPaths = [
        {
          from: '/Funds',
          to: fundRedirect,
        },
        {
          from: '/Funds/',
          to: fundRedirect,
        },
      ];

      for (const obj of redirectPaths) {
        const { from, to } = obj;
        createRedirect({
          fromPath: from,
          redirectInBrowser: true,
          toPath: to,
        });
      }
      resolve();
    });
  });

  const loadFunds = new Promise(resolve => {
    graphql(`
      {
        allContentfulFunds(sort: { fields: [order] }) {
          nodes {
            shortName
          }
        }
      }
    `).then(res => {
      const pages = res.data.allContentfulFunds.nodes;
      pages.map(({ shortName: slug }) => {
        createPage({
          path: `Funds/${slug.replace(/\s+/, '-')}/`,
          component: path.resolve('./src/templates/funds.js'),
          context: {
            slug,
            pages: pages.map(item => item.shortName),
          },
        });
      });
      resolve();
    });
  });

  const loadPosts = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPost(sort: { fields: [publishDate], order: DESC }, limit: 10000) {
          edges {
            node {
              slug
              publishDate
            }
          }
        }
      }
    `).then(result => {
      const posts = result.data.allContentfulPost.edges;
      const postsPerFirstPage = config.postsPerHomePage;
      const { postsPerPage } = config;
      const numPages = Math.ceil(posts.slice(postsPerFirstPage).length / postsPerPage);
      // Create main home page
      createPage({
        path: `/news/`,
        component: path.resolve(`./src/templates/news.js`),
        context: {
          limit: postsPerFirstPage,
          skip: 0,
          numPages: numPages + 1,
          currentPage: 1,
        },
      });

      // Create additional pagination on home page if needed
      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: `/news/${i + 2}/`,
          component: path.resolve(`./src/templates/news.js`),
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage + postsPerFirstPage,
            numPages: numPages + 1,
            currentPage: i + 2,
          },
        });
      });

      // Create each individual post
      posts.forEach((edge, i) => {
        const prev = i === 0 ? null : posts[i - 1].node;
        const next = i === posts.length - 1 ? null : posts[i + 1].node;
        createPage({
          path: `${edge.node.slug}/`,
          component: path.resolve(`./src/templates/post.js`),
          context: {
            slug: edge.node.slug,
            prev,
            next,
          },
        });
      });
      resolve();
    });
  });

  return Promise.all([getRedirects, loadFunds, loadPosts]);
};

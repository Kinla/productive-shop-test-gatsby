const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(
    `
      {
        allSanityPage(limit: 1000) {
          nodes {
            id
            slug {
              current
            }
          }
        }
      }
    `,
  );

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const pageTemplate = path.resolve(`./src/templates/page.js`);
  result.data.allSanityPage.nodes.forEach(({ id, slug }) => {
    createPage({
      ownerNodeId: id,
      path: `/${slug.current}`,
      component: pageTemplate,
      context: {
        slug: slug.current,
      },
    });
  });
};

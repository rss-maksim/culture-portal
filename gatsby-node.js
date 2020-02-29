exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions
  if (page.path.match(/^\/director/)) {
    page.matchPath = '/director/*'
    createPage(page)
  }
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions
  if (page.path.match(/^\/person/)) {
    page.matchPath = '/person/*'
    createPage(page)
  }
}

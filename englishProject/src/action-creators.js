export const selectArticle = (title) => {
  return {
    'type': 'ARTICLE_SELECT',
    'article': title
  };
}

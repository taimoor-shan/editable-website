import { f as getArticles, h as getPage } from "../../../chunks/api.js";
async function load({ locals }) {
  const currentUser = locals.user;
  const articles = await getArticles();
  const page = await getPage("about");
  return {
    currentUser,
    articles: articles.slice(0, 3),
    page
  };
}
export {
  load
};

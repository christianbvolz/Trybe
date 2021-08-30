const getRepos = require('./getRepos.js');
// comentado por causa da falha na requisicao da API
// test("verifique que os repositórios 'sd-01-week4-5-project-todo-list' e 'sd-01-week4-5-project-meme-generator' se encontram nessa lista", async () => {
//   expect.assertions(2);
//   const response = await getRepos('https://api.github.com/orgs/tryber/repos');
//   expect(response).toContain('sd-01-week4-5-project-todo-list');
//   expect(response).toContain('sd-01-week4-5-project-meme-generator');
// });
const { createServer } = require("directus");

const server = createServer();

server.listen(process.env.PORT || 3000, () => {
  console.log("Directus is running");
});

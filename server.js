const { createServer } = require("node:http");

const PORT = Number(process.env.PORT) || 3000;

const server = createServer((request, response) => {
  if (request.method === "GET" && request.url === "/") {
    response.writeHead(200, { "content-type": "application/json; charset=utf-8" });
    response.end(
      JSON.stringify({
        name: "DeployLab",
        message: "Платформа развёртывания приложений. Начинаем с малого!",
      }),
    );
    return;
  }

  if (request.method === "GET" && request.url === "/health") {
    response.writeHead(200, { "content-type": "application/json; charset=utf-8" });
    response.end(JSON.stringify({ status: "ok" }));
    return;
  }

  if (request.method === "GET" && request.url === "/about"){
    response.writeHead(200, { "content-type": "application/json; charset=utf-8" });
    response.end(
      JSON.stringify({
        name: "DeployLab",
        version: "0.1.0",
        runtime: "Node.js",
      })
    );
    return;
  }

  response.writeHead(404, { "content-type": "application/json; charset=utf-8" });
  response.end(JSON.stringify({ error: "Not found" }));
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`DeployLab is listening on http://localhost:${PORT}`);
});

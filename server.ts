const { createServer } = require("node:http");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const hostname = process.env.APP_IP || "localhost";
const port = process.env.APP_PORT || 3000;

const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

app.prepare().then(() => {
    const httpServer = createServer(handler);

    httpServer
        .once("error", (err:any) => {
            console.error(err);
            process.exit(1);
        })
        .listen(port, () => {
            console.log(`> Запутстилось на http://${hostname}:${port}`);
        });
});
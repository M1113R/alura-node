import { app } from "./src/app";

const port = process.end.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor escutando em http:/localhost:${port}/`)
});
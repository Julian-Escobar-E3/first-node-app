"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.use((0, morgan_1.default)('dev'));
let data = [
    { idecita: 1, name: "Example 1" },
    { idecita: 2, name: "Example 2" }
];
app.get('/', (req, res) => {
    res.send('Welcome');
});
app.get('/api/getall', (req, res) => { res.status(200).json(data); });
app.get('/api/getByID/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = data.find((item) => item.idecita === id);
    console.log({ item });
    if (item) {
        res.status(200).json(item);
    }
    else {
        res.status(404).json({ error: `El elemento con el id ${id} posiblemente no existe` });
    }
});
app.post('/api/create', (req, res) => {
    const newItem = req.body;
    data.push(newItem);
    res.status(201).json(newItem);
});
app.put('/api/update/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const updatedItem = req.body;
    const index = data.findIndex((d) => d.idecita === id);
    if (index !== -1) {
        data[index] = { ...data[index], ...updatedItem };
        res.status(200).json(data[index]);
    }
    else {
        res.status(404).json({ Error: `No se ecnontro informacion con el ID ${id} ` });
    }
});
app.delete('/api/delete/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    data = data.filter((d) => { d.idecita !== id; });
    res.status(204).json({ Mensaje: 'Se elimino correctamente' });
});
app.listen(PORT, () => {
    console.log(`Server ir running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map
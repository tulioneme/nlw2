import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// Corpo (Request Body): Dados para criação ou atualização de um registro
// Route Params: Identificar qual recurso eu quero atualizar ou deletar
// Query Params: Paginação, filtros, ordenação

// app.post('/users', (req, res) => {
//   console.log(req.body);

//   const users = [
//     { name: 'Piroca', age: 20 },
//     { name: 'Pirocudo', age: 30 },
//   ];

//   return res.json(users);
// })

app.listen(3333);

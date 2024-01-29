import express, {Request, Response} from 'express';
import morgan from 'morgan';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(morgan('dev'));

//Example data

let data:{idecita:number;name:string}[]=[
	{idecita:1 ,name:"Example 1"},
	{idecita:2 ,name:"Example 2"}
]
// Main

app.get('/',(req:Request,res:Response)=>{
	res.send('Welcome');});

//GET ALL
app.get('/api/getall',(req:Request,res:Response)=>{res.status(200).json(data)});

//GET BY ID
app.get('/api/getByID/:id',(req:Request,res:Response)=>{
	const id=parseInt(req.params.id);
	const item = data.find((item)=>item.idecita===id);
	if(item){
	res.status(200).json(item);
	}else{
	res.status(404).json({error:`El elemento con el id ${id} posiblemente no existe`});
	}
});

//POST	 
app.post('/api/create',(req:Request,res:Response)=>{
	const newItem = req.body;
	data.push(newItem);
	res.status(201).json(newItem);
});

//PUT
app.put('/api/update/:id',(req:Request,res:Response)=>{
	const id=parseInt(req.params.id,10);
	const updatedItem = req.body;
	const index = data.findIndex((d)=>d.idecita === id);

	if (index!==-1){
	data[index]={...data[index],...updatedItem};
	res.status(200).json(data[index]);
	}else{
	res.status(404).json({Error:`No se ecnontro informacion con el ID ${id} `})
	}
});
//DELETE
app.delete('/api/delete/:id',(req:Request,res:Response)=>{
const id=parseInt(req.params.id,10);
	data = data.filter((d)=>{d.idecita!==id});
	res.status(204).json({Mensaje:'Se elimino correctamente'});}
);
app.listen(PORT,()=>{
	console.log(`Server ir running on port ${PORT}`);
});

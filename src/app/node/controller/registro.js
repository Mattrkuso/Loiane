import {News} from '../model/registro';


//Mostrar

export async function mostrar (req,es){
    
};


///Crear
export async function crear (req,res){
    const {nombre, edad, correo, password}= req.body;
    const newpr=await News.create({
        nombre,
        edad,
        correo,
        password
    });
    if (newpr){
        res.send('Funciono'),
        console.log('Enviado')
    }
}

export default crear;
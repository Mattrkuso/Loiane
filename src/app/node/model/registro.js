import Sequelize from 'sequelize';
import {sequelize} from '../database/db';


   export var News = sequelize.define('loaine', {
      nombre: {
        type: Sequelize.STRING
      },
      edad: {
        type: Sequelize.INTEGER
      },
      correo:{
          type:Sequelize.TEXT
      },
      password:{
        type:Sequelize.TEXT
      }},
       {
        freezeTableName: true
      });

    export default News;
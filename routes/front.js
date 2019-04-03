/*
Importer les composants de la route
*/
const express = require('express');
const router = express.Router();
//

/**
 * 
 * Configuration de Mongoose
 */

const mongoose = require('mongoose');
const mongoServeur = 'mongodb://localhost:27017/todo';
//

/*
Définition des routes
*/
router.get( '/', (req, res) => {
    // Renvoyer le fichier index dans la réponse
    
     //Connextion à la base de données mongoDB
     mongoose.connect(mongoServeur, (err, db)=>{
         //Tester ma connexion
         if(err){ res.json({error: err}) }
         else{
             //Connexion ouverte : récupérer la collection de données
             db.collection('tasks').find().toArray( (err, collection)=>{
 
                 //tester la connexion de la collection
                 if(err){res.render('index',{error:err})}
                 else{
                     //Collection récupérée
                     //res.json(collection);

                         // Collection récupérée :Renvoyer le fichier index dans la réponse avec la collection
                        res.render('index',{data:collection});
                 }
             } )
         };
 
         //Fermer la connexion
         db.close();
 
     })
 
 });

/**
 * Créer une route pour ajouter des taches
*/

    router.get('/add-tasks',(req, res)=>{
        res.render('add-tasks')
    });



 //
/*

/**
 * Créer une route pour suppr des taches
*/

router.get('/suppr-tasks',(req, res)=>{
    res.render('suppr-tasks')
});



//
/*



Exporter le module de route
*/
module.exports = router;
//
/*
Importer les composants de la route
*/
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
//

/**
 * 
 * Configuration de Mongoose
 */

    const mongoose = require('mongoose');
    const mongoServeur = 'mongodb://localhost:27017/todo';
//


/*
Configuration de body-parser
*/
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));
//

/*
Définition des routes
*/
// Accueil de l'API
router.get( '/', (req, res) => {
    // Renvoyer un flux JSON dans la réponse
    res.json( { content: 'Hello API' } );
});

// Afficher la liste des t$âches
router.get( '/tasks', (req, res) => {
   
    //Connextion à la base de données mongoDB
    mongoose.connect(mongoServeur, (err, db)=>{
        //Tester ma connexion
        if(err){ res.json({error: err}) }
        else{
            //Connexion ouverte : récupérer la collection de données
            db.collection('tasks').find().toArray( (err, collection)=>{

                //tester la connexion de la collection
                if(err){res.json({error:err})}
                else{
                    //Collection récupérée
                    res.json(collection);
                }
            } )
        };

        //Fermer la connexion
        db.close();

    })

});

    //Créer une route API pour ajouter un article
    router.post('/add-tasks', (req,res)=>{
        console.log(req.body);
        mongoose.connect(mongoServeur, (err, db)=>{
            //Tester ma connexion
            if(err){ res.render('add-tasks', {msg:err}) }
            else{
                //Connexion ouverte : ajouter les données dans la BDD
                db.collection('tasks').insert({ 
                    content: req.body.content, 
                   state:false}, (err, newObject)=>{
                    //Verifier l'ajout
                    if(err){res.redirect(500,'/') }
                    else{
                        res.redirect(301, '/')
                    }
                })
            };
    
            //Fermer la connexion
            db.close();
    
        })
    })





//

    //Créer une route API pour supprimer un article
    router.post('/suppr-tasks/:id', (req,res)=>{
        console.log(req.params.id);
        mongoose.connect(mongoServeur, (err, db)=>{
            //Tester ma connexion
            if(err){ res.render('suppr-tasks', {msg:err}) }
            else{
                //Connexion ouverte : supprimer les données dans la BDD
                db.collection('tasks').remove({ 
                    _id:ObjectId(req.params.id), 
                   }, (err, newObject)=>{
                    //Verifier l'ajout
                    if(err){res.redirect(500,'/') }
                    else{
                        res.redirect(301,'/')
                    }
                })
            };
    
            //Fermer la connexion
            db.close();
    
        })
    })





//






/*
Exporter le module de route
*/
module.exports = router;
//
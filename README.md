# TodosMVC_test
Projet de cours basé sur le site TODOMVC.com

<br/>

## User stories
Définition des actions de l'utilisateur :
- [ ] En tant qu'utlisateur je peux ajouter une tâche
- [ ] En tant qu'utlisateur je peux valider une tâche
- [ ]  En tant qu'utlisateur je peux supprimer une tâche
- [ ] En tant qu'utlisateur je peux afficher les tâches réalisées
- [ ] En tant qu'utlisateur je peux ajouter les tâches à réaliser
- [ ] En tant qu'utlisateur je peux supprimer toutes les tâches réalisées

## Mise en place du projet
Etapes à suivre pour préparer le projet TodosMVC_test
- [ ] Initier un server Node.js
- [ ] Lancer le serveur de base de données 
- [ ] Créer la BDD MongoDB
- [ ] Créer une route `front` pour afficher un fichier `index` dans un dossier `www`
- [ ] Créer une route `API` qui renvoie en `json` l'objet `{msg: 'Hello API'}`

## Configurer la Base de données
Le but est de définir les models de données à utiliser pour l'application
- [ ] Combien d'informations faut-il enregistrer pour une tâche ?
- [ ] Comment une tâche est validée ?
- [ ] Comment une tache est supprimée ?
- [ ] Comment les tâches sont filtrées ?

### 1.Combien d'informations faut-il enregistrer pour une tâche ?
Il faut deux informations :
- ID : string
- Etat : boolean
- Contenu : string

### 2.Comment une tâche est validée ?
Quand l'état est égal à `true`.

### 3.Comment une tache est supprimée ?
Chaque tâches présentent un bouton qui, au clic, permet de supprimer l'objet.
- [ ] Je dois connaître la propriété `_id` de l'objet
- [ ]Créer une route `api` pour supprimer l'objet

### 4.Comment les tâches sont filtrées ?
Je dois sélectionner tous les objets et n'afficher que ceux dont la propriété `state` est égale à `true` ( ou à `false`)
- [ ] Créer une route  `api` pour sélectionner les tâches.
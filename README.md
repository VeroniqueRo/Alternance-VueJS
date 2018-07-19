# projet-vuejs

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

Partie 2 : VueJS

1) Initialiser une application Vue.

[X] Commençons par créer une application VueJS, pour cela utilisons l'interface en ligne de commande officielle vue-cli.
Si ce n'est pas fait, il faut d'abord l'installer avec npm :

npm install --global vue-cli
Question : Rappeler ce qu'est npm et pourquoi nous utilisons l'option --global ?

*Votre réponse :

NPM est le Package Manager de Node.js. C'est un gestionnaire de taches qui permet d'exécuter des scripts.
L'option "--global" permet l'installation du package "vue-cli" globalement. C'est important de le faire car on veux pouvoir utiliser ce package pour plusieurs applications. Si le package n'est utile que pour une seule application, c'est préférable de ne l'installer que localement das le dossier de cette application.
[X] Créez maintenant l'application :
vue init webpack-simple [NOM_PROJET]
Des questions vont vous être posées, voici un exemple de choix :



Quels sont des bons réflexes à avoir quand vous télécharger un nouveau projet ? Quels fichiers regarder ? Avant même de commencer à lancer l'application et sans regarder le code vous pouvez apprendre plein de choses.
Votre réponse :

Lire le README.md qui peut contenir une description de l'application

Si vous regardez le fichier README.md du projet vous voyez que trois commandes sont indiquées, quel est le but de chacune ?

Votre réponse :

Lancez le projet.
[ ] Une fois que tout fonctionne, faites un premier commit ( vous aurez sûrement besoin d'initialiser le repository git ). Quelle est la commande à utiliser ? 🤔
Votre réponse :

2) Analyse du contenu du starter.

[ ] Prenez le temps d'analyser le contenu du répertoire créé par vue-cli, et de comprendre l'utilité des fichiers.
Question	Réponse
Nombre de dépendances de l'application	
Dossier src/	
Dossier build/	
Fichier App.vue	
Fichier main.js	
Dossier router/	
3) Créer un premier composant.

1) Composant statique

Nous allons travailler sur le même type de données que dans l'exercice précédent.

C'est à dire qu'un projet respecte ce format :

{
  "_id": "5b3e3da861f2d927949fa8da",
  "isActive": false,
  "picture": "http://placehold.it/32x32",
  "name": "PUSHCART",
  "creation": "Tue Feb 25 1975 21:31:07 GMT+0100 (Central European Standard Time)"
}
[ ] Changez le contenu du composant HelloWorld.vue afin qu'il puisse afficher un projet.
Voici un exemple de style que cela pourrait avoir :



[ ] Renommez le fichier pour qu'il reflète son contenu.
2) Changer le style

[ ] Faites en sorte de changer le style entre un projet actif et un projet non actif, par exemple, la couleur du nom du projet ou la couleur de fond.
3) Marquer l'état avec une checkbox

[ ] Plutôt que d'écrire du texte, vous allez marquer l'état actif ou non avec une checkbox, la checkbox doit être fonctionnelle et permettre le changement.
Voici un exemple de résultat auquel vous pourriez parvenir.

Ressources :

https://vuejs.org/v2/guide/index.html
https://github.com/vuejs/vue-devtools ( devtools de Vue, à installer absolument ! )
4) Afficher la liste des projets.

VueJS offre la possibilité de faire des listes très facilement, nous allons le faire de deux manières.

1) Sans créer de nouveau composant.

[ ] Dans le code du composant précédemment créé, faites les modifications pour afficher la liste.
2) En créant un nouveau composant.

[ ] On souhaite séparer le composant affichant la liste, ProjectsList, de celui affichant un élément de la liste, Project ( c'est extrêmement classique ), ce qui nous permettra de réutiliser le composant Project indépendamment.
Comment passe-t-on de la donnée à un composant enfant ?
Quels sont les avantages en procédant ainsi ?
Ressources :

https://vuejs.org/v2/guide/components-props.html#ad
https://vuejs.org/v2/guide/index.html
https://vuejs.org/v2/guide/list.html
Voici un exemple : 

5) Faire une liste dans une nouvelle route.

[ ] Nous allons séparer la vue détaillée d'un projet de la vue contenant la liste, qui sera alors affichée sous forme de table.
1) Créer une nouvelle route

[ ] Ajoutez une nouvelle route dans votre projet, vous aurez besoin de créer un nouveau composant qui contiendra la nouvelle table.
2) Afficher le tableau des noms des projets.

[ ] Affichez sous forme de table la liste des projets avec uniquement leur nom.
3) Cliquer sur un élément pour passer à une autre page.

[ ] Dans ce nouveau composant, faites en sorte que lorsqu'on clique sur un élément de la table, alors on est redirigé vers la page présentant le détail de ce projet.
Vous aurez besoin de passer des paramètres d'une Vue à l'autre : https://router.vuejs.org/guide/essentials/passing-props.html

Voici un exemple d'interface à laquelle vous pourriez parvenir.

6) Intégrez les fonctions de recherche et de tri de l'exercice précédent.

[ ] En vous basant sur ce que vous avez fait à l'exercice précédent, intégrez dans votre application une fonction de recherche et de tri par date de création des objets.
Quelle est la différence de logique entre JQuery et VueJS ?
Ressources :

https://vuejs.org/v2/guide/list.html
7) Faire un appel HTTP.

Jusqu'à maintenant, toutes les données sont statiques. Dans la vraie vie, les données proviennent très généralement d'une API.

Nous allons en utiliser une dans cet exercice, celle ci est disponible à cette adresse.

Vous allez d'abord devoir intégrer une librairie permettant de faire des appels HTTP. La plus utilisée avec Vue est axios.

Avant de vous lancer dans le code pour appeler une API, il existe des outils permettant de tester une API sans écrire la moindre ligne. Le plus connu est probablement POSTMAN, celui ci peut s'installer sous la forme d'une extension chrome.

Une fois fait, vous pouvez tenter de récupérer les projets d'un utilisateur en utilisant cette URL :

https://daily-standup-campus.herokuapp.com/api/projects?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViMjNmODIzYTM5YjlmMDAxNGViNGJlNiIsImlhdCI6MTUzMTE0Mjg1MX0.K5e_nO1kl0sOOK8rvjYTiRkHPk2vBoGcSGY0Xh3zVQg
Celle ci contient un token d'identification, nous verrons plus tard comment cela fonctionne.

[ ] En utilisant axios, mettez à jour votre code pour qu'il affiche les données provenant de l'API.
Attention, la structure d'un projet est différente de celle utilisée précedemment, plus de picture, plus de isActive mais d'autres infos sur le créateur et les collaborateurs du projet.

Voici un exemple d'adaptation du composant :



À quel moment de la vie d'un composant faisons-nous un appel HTTP ? Votre réponse :

Comment faire pour utiliser une librairie externe en VueJS ? Votre réponse :

Comment savoir si la requête est en cours ou non ? Ajouter un loader pour montrer que la requête est en cours. Votre réponse :

Ressources :

https://vuejs.org/v2/guide/list.html
http://putaindecode.io/fr/articles/js/es2015/promises/
8) Faire une requête DELETE.

Jusqu'à maintenant, nous avons fait une requête pour récuperer des données, mais nous voulons aussi modifier des données existantes.

Quels sont les 4 types de requêtes les plus courantes en HTTP ? Votre réponse :

À quoi correspond la notion de promesse ? Pourquoi en a-t-on besoin en Javascript ? Quelles sont les alternatives ? Votre réponse :

[ ] Dans le tableau des projets, ajoutez une colonne permettant de supprimer un projet, la suppression doit s'accompagner d'un appel à l'API afin de réellement supprimer le projet.
Voici un exemple de résultat auquel vous pourriez parvenir.

9) Formulaire d'authentification.

Comme déjà mentionné l'API est protégée par authentification.

[ ] Ajoutez un formulaire d'authentification vous permettant d'être ensuite authentifié auprès de l'API.
Quelle est la route d'authentification ? Votre réponse :
[ ] Ajoutez un formulaire "Mot de passe oublié ?". En appelant la bonne route, un mail sera envoyé à l'adresse email spécifiée. Ce mail contiendra un lien qui devra renvoyer sur une nouvelle page de votre application permettant à l'utilisateur de choisir son nouveau mot de passe.
Ressources :

https://paweljw.github.io/2017/09/vue.js-front-end-app-part-3-authentication/
10) Implémentez un CRUD

[ ] Complétez votre implémentation en un CRUD complet sur la ressource Projet.
Ressources :

https://fr.wikipedia.org/wiki/CRUD
Partie 3 : mobile

Les compétences manquantes sont principalement le mémo ainsi que le schéma, reprenez les présentations faites en groupe pour valider ces compétences.

Pour pratiquer Cordova, vous pouvez prendre votre application VueJS précédemment faite et l'encapsuler dans Cordova :

Ressources :

https://itnext.io/make-hybrid-platform-cordova-vue-webpack-2fb7031c4f9b
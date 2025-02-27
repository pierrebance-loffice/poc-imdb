# Test technique

## Pré-requis

Le livrable sera un projet sous la forme d'un zip classique. Il nous sera envoyé zippé via [weTransfer](https://wetransfer.com/).<br>
Le projet sera réalisé avec React 18, les composants seront des composants fonctionnels, pas de classes.<br>
Le scaffolding de l'application sera basé sur NextJS 14, en utilisant l'"app router" pour la navigation et la structure de fichiers, le candidat n'utilisera pas le "pages router".<br>
Pas de colocation de fichiers, les composants seront rangés dans un répertoire dédié. Le candidat écrira son code avec Typescript.<br>
L'objectif est de restituer une consultation de contenu agréable et fluide en respectant les indications des wireframes.<br><br>

Le test comprend 2 niveaux de bonus: "intermédiaire" indiqué en jaune sur les wireframes, et "avancé" indiqué en vert.<br>
Il est toutefois vivement conseillé d'accomplir les bonus intermédiares pour obtenir un résultat satisfaisant.<br>
L'application sera consultable en français.<br>
Veuillez noter que la qualité du design est essentielle dans l'évaluation de ce test technique, car elle reflète non seulement votre compétence technique, mais aussi votre capacité à créer des solutions esthétiquement plaisantes et fonctionnelles.

## L'application

L'application se présentera sous la forme suivante: l'utilisateur arrivera d'abord sur une grille de films, à partir de laquelle il pourra être informé des détails d'un film.<br>
La page de détails d'un film, à travers la liste des crédits, pourra mener vers le détail profil d'un ou plusieurs acteurs.<br>
Cette page de profil aura elle aussi une liste de films auxquels aura participé la personne permettant de consulter le détail de ces films.<br>
Le candidat restera libre d'ajouter des informations au délà de ce qui est requis dans les wireframes en s'inspirant du site [The Movie DB](https://www.themoviedb.org/movie).

## API

Le candidat aura accès à une API, ici [TMDB](https://developer.themoviedb.org/docs/getting-started), pour appeler les données, les aggréger, etc.<br>

### API - Tokens

Pour utiliser l'API, le candidat dispose des éléments suivants:

API Docs: [https://developer.themoviedb.org/reference/intro/getting-started](https://developer.themoviedb.org/reference/intro/getting-started)

### API - Liste des films les plus populaires

```
https://api.themoviedb.org/3/movie/popular?language=en-US&page=1
```

Voir aussi : [https://developer.themoviedb.org/reference/discover-movie](https://developer.themoviedb.org/reference/discover-movie) pour une utilisation plus précise.

```
https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=1&sort_by=popularity.desc&year=2024
```

### API - Images

Voir: [https://developer.themoviedb.org/docs/image-basics](https://developer.themoviedb.org/docs/image-basics)

### API - Details d'un film

```
https://api.themoviedb.org/3/movie/{MOVIE_ID}?api_key={API_KEY}&append_to_response=keywords,alternative_titles,changes,credits,images,keywords,lists,releases,reviews,similar,translations,videos
```

### API - Détails d'une personne

```
https://api.themoviedb.org/3/person/{PERSON_ID}?api_key={API_KEY}&append_to_response=credits%2Cimages
```

Nous souhaitons que ce test sera pour vous une opportunité de prendre du plaisir et de nous montrer vos capacités. Et bien sûr, bonne chance!

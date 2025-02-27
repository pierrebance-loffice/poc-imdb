# MyIMDB - POC Numspot

## Consignes

- [Consignes générales](./docs/index.md)
- [Page d'accueil](./docs/1-accueil.pdf)
- [Page des films](./docs/2-films.pdf)
- [Page des personnes](./docs/3-personnes.pdf)


## Navigation

### 1. Accueil

![accueil](./images/accueil.png)

La route `/` appelle l'API de `https://api.themoviedb.org/3/discover` pour lister / trier /pagier des films

Cliquer sur un film

### 2. Page d'un film

Cette page utilise l'endpoint `https://api.themoviedb.org/3/movie` de l'API

![film-1](./images/film.png)

Si on clique sur une personnes dans la section `Crédits`, alors une modale s'ouvre et l'url devient `/movies/123/people/456`

![film-2](./images/film-et-modale.png)

Depuis la modale un lien permet d'accéder à la page d'une personne (Réalisateur ou  acteurs)

### 3. Page d'une personne

Cette page utilise l'endpoint `https://api.themoviedb.org/3/person` de l'API

![personne-1](./images/personne.png)

Si on clique sur un film dans la section `Crédits`, alors une modale s'ouvre et l'url devient `/people/456/movies/123`

![personne-2](./images/personne-et-modale.png)

Depuis la modale un lien permet d'accéder à la page d'une personne (Réalisateur ou  acteurs)

### Commentaire

A mon avis je m'y prend pas exactement comme il faut.
Les navigations sont parfois pénibles.


## Démarrage

Créer un fichier `.env` à la racine du projet

```.env
API_ENDPOINT=https://api.themoviedb.org/3
API_LANG=fr-FR
API_KEY=<paste API key>
API_TOKEN=<paste API token>

NEXT_PUBLIC_API_ENDPOINT=https://api.themoviedb.org/3
NEXT_PUBLIC_API_LANG=fr-FR
NEXT_PUBLIC_API_KEY=<paste API key>
NEXT_PUBLIC_API_TOKEN=<paste API token>>
```

puis exécuter

```.sh
pnpm install
pnpm build
pnpm start
```

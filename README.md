# Rendu Docker

HAMEL Julien M1 DEV

## Utilisation du Dockerfile

Pour utiliser le Dockerfile, il suffit de suivre les étapes suivantes :

1. Build l'image Docker

Attention à chaque modification apporté sur dans l'application, il faut rebuild l'image Docker.

```bash
docker build -t nextjs-app .
```

2. Run l'image Docker

L'option --name peut être utilisée pour donner un nom au container.
L'option -d peut être utilisée pour lancer le container en arrière plan.

```bash
docker run -p 3000:3000 nextjs-app
```

3. Accéder à l'application

L'application est accessible à l'adresse suivante : http://localhost:3000

## Utilisation de docker-compose

Le docker compose est en mode développement, ce qui signifique que à chaque modification l'application sera mise à jour sans la nécessité de build à nouveau l'image Docker.

Pour utiliser docker-compose, il suffit d'utiliser la commande suivante :

L'option -d peut être utilisée pour lancer le container en arrière plan.

```bash
docker compose up
```

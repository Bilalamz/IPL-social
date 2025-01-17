# IPL-social

## Informations personnelles
- **Nom**: Amaziane
- **Prénom**: Bilal
- **Email VINCI**: bilal.amaziane@student.vinci.be

## URL du projet GitHub
[https://github.com/Bilalamz/IPL-social](https://github.com/Bilalamz/IPL-social)

## Description du projet
Ce projet contient une configuration DevOps avec un pipeline de CI utilisant GitHub Actions. 
Le développement suit la méthodologie TDD (Test Driven Development). 

### Fonctionnalités principales :
- **Validation de mot de passe** :
  - Le mot de passe doit contenir au moins 8 caractères.
  - Il doit contenir au moins un caractère spécial.
  - Il doit contenir au moins un chiffre.
  - Il ne peut pas contenir la chaîne de caractères "IPL" (insensible à la casse).

### Structure des fichiers :
- `passwordChecker.js` : Contient la fonction de validation de mot de passe.
- `tests/passwordChecker.test.js` : Tests unitaires pour la validation de mot de passe (TDD).

## Commandes
Pour exécuter les tests, utilisez la commande suivante :
```bash
npm test


# 🚀 Comprendre le CI/CD : Continuous Integration & Continuous Deployment
### 📌 Introduction

Le CI/CD (Continuous Integration / Continuous Deployment) est une méthode utilisée en développement logiciel pour automatiser le processus de test, de build et de déploiement des applications. Il permet de livrer du code plus rapidement et de manière plus fiable.
Pourquoi utiliser CI/CD ?

- ✅ Automatisation des tests et des déploiements.
- ✅ Détection rapide des erreurs grâce aux tests automatiques.
- ✅ Livraison continue du code sans intervention manuelle.
- ✅ Gain de temps pour les développeurs et meilleure qualité du produit final.

## 1️⃣ Continuous Integration (CI) : Intégration Continue

L'objectif du CI est de tester automatiquement chaque modification de code avant qu'elle ne soit intégrée à la branche principale du projet.
Comment ça fonctionne ?

    - Le développeur pousse du code (git push sur GitHub/GitLab).
    - Un pipeline CI est déclenché automatiquement.
    - Compilation et tests sont exécutés sur un serveur distant.
    - Si tout est OK, le code peut être fusionné.
    - Si un test échoue, le développeur est alerté pour corriger son code.

## 2️⃣ Continuous Deployment (CD) : Déploiement Continu

Le CD permet d'automatiser la mise en production d'une application après validation du code.
Comment ça fonctionne ?

    - Le code est validé par les tests CI.
    - S’il passe tous les tests, il est automatiquement déployé (ex : sur un serveur, AWS, GitHub Pages, Docker).
    - L’application est mise à jour sans intervention humaine.
    


# 🚀 Générateur de Pipelines CI/CD avec GitHub Actions
### 📌 Introduction

Ce projet est un générateur automatique de pipelines CI/CD basé sur GitHub Actions. Il permet aux développeurs de créer rapidement un fichier de workflow adapté à leur langage de programmation et à leurs besoins spécifiques (tests, build, déploiement).

Avec cet outil, plus besoin d’écrire manuellement un fichier `.github/workflows/main.yml`, le générateur le fait pour vous ! 🎯

## 🎯 Objectifs du projet

- ✅ Automatiser la création de workflows CI/CD.
- ✅ Supporter plusieurs langages de programmation.
- ✅ Permettre la personnalisation (tests, linting, déploiement, etc.).
- ✅ Faciliter l'intégration continue et le déploiement rapide.

## 📌 Roadmap du projet

- ⏳ Version CLI fonctionnelle 🎯
- ⏳ Ajout de nouveaux langages (C++, Rust, Go…)
- ⏳ Création d’une interface web interactive
- ⏳ Intégration avec Docker et AWS

## 🛠️ Fonctionnalités

✔️ Génération automatique de fichiers GitHub Actions pour CI/CD.
✔️ Support des langages suivants :
    
    - Node.js (npm, jest, GitHub Pages)
    - Python (pytest, flake8)
    - Java (Gradle, Maven)
    - C++ (CMake, Makefile)

✔️ Personnalisation des workflows :

    - Tests automatiques
    - Linting (ESLint, flake8...)
    - Déploiement automatique (GitHub Pages, Docker, AWS...)

✔️ Interface CLI et Web (prévu).

### 📌 Comment ça fonctionne ?
#### 1️⃣ Sélection du langage et des options

L'utilisateur choisit :

    Le langage du projet (ex: Node.js, Python...)
    Les outils de test (ex: Jest, Pytest...)
    Les options de déploiement (ex: Docker, GitHub Pages...)

#### 2️⃣ Génération du fichier YAML

L'outil génère un fichier .github/workflows/main.yml adapté au projet.

#### 3️⃣ Intégration dans le projet GitHub

L'utilisateur place le fichier généré dans .github/workflows/, et GitHub Actions exécute automatiquement les tests et les déploiements.

### 🔧 Technologies utilisées

    - Node.js (ou Python) pour la génération de fichiers
    - YAML pour les fichiers GitHub Actions
    - CLI (Command Line Interface) pour l’interaction utilisateur
    - Interface avec python pour une utilisation plus intuitive

## 🚀 Utilisation
### Installation

`git clone https://github.com/thomas370/ci-cd-generator.git`

`cd ci-cd-generator`

`npm install  # ou pip install -r requirements.txt si Python`

#### Exécution (CLI)

`node index.js`

#### Exemple d'utilisation 

`node index.js --lang python --test pytest --deploy github-pages`

## 📜 Licence

📄 Ce projet est open-source sous licence MIT.

## 💡 Contribuer

Envie d’améliorer le projet ? Clone le repo et envoie une pull request ! 🚀
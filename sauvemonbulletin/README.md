# 🎓 SauveMonBulletin

Plateforme de révision pour le collège (5ème · 4ème · 3ème), inspirée de Save My Exams, couvrant le programme du cycle 4 : **français, mathématiques, physique-chimie, SVT, histoire-géographie, chinois LV1 (section internationale, HSK 2 → 5), russe LV2** et **histoire de la danse** (filière danse-études).

## ✨ Ce que fait le site

- **Cours en diapositives** avec voix off (synthèse vocale) et visuels.
- **Fiches de révision** synthétiques, avec version audio.
- **Cartes mémo** recto/verso, téléchargeables et imprimables.
- **Exercices corrigés** à 3 niveaux (facile / moyen / avancé) + révision de fin de chapitre.
- **Automatismes du jour** en maths (10 calculs quotidiens, corrigés).
- **Fondamentaux hebdomadaires** en français, SVT et physique-chimie.
- **2 examens par chapitre** + synthèse de révisions.
- **Examens bilan** : selon les résultats, des **révisions personnalisées sont programmées automatiquement** sur les points faibles.
- **Brevets blancs** complets (dès la 4ème) avec corrigés détaillés.
- **Méthodes & techniques** (intro, plan, conclusion, développement construit, dictée, oral…) avec exercices pratiques.
- **Tuteur IA intégré** (Claude/ChatGPT) : donne des indices puis explique, sans faire à la place de l'élève.
- **Connexion par compte**, suivi de progression, et **compte rendu hebdomadaire envoyé par email au parent**.

## 🧱 Technologie

- **Next.js 14** (App Router) + **React** + **TypeScript** + **Tailwind CSS**
- **NextAuth** (authentification par email / mot de passe)
- **Prisma** + **PostgreSQL** (comptes, progression, révisions)
- **@anthropic-ai/sdk** (tuteur IA)
- **Resend** (emails aux parents)
- Le contenu pédagogique est en TypeScript dans `content/` (facile à enrichir).

---

# 🚀 Guide de publication pas à pas

> Objectif : mettre le site en ligne sur GitHub, l'héberger gratuitement sur **Vercel** (idéal pour Next.js), puis brancher votre **nom de domaine GoDaddy** dessus.
>
> ⚠️ Ce site n'est **pas** un simple site statique : il a une base de données, une authentification et des fonctions serveur. L'hébergement mutualisé classique de GoDaddy ne peut pas le faire tourner. La bonne pratique est d'**héberger l'application sur Vercel** (gratuit) et de **pointer votre domaine GoDaddy vers Vercel**. Vous gardez donc votre domaine GoDaddy, seul l'hébergement change.

## Étape 1 — Créer une base de données PostgreSQL (gratuit)

1. Allez sur **https://neon.tech** (ou Supabase / Vercel Postgres) et créez un compte.
2. Créez un projet, puis copiez la **chaîne de connexion** (`Connection string`), du type :
   `postgresql://user:motdepasse@ep-xxx.eu-central-1.aws.neon.tech/neondb?sslmode=require`
3. Gardez-la de côté : ce sera votre variable `DATABASE_URL`.

## Étape 2 — Mettre le code sur GitHub

Le dépôt est déjà relié à votre GitHub (`gummybarrefamily-lila/sauvemonbulletin`), sur la branche `claude/french-middle-school-platform-auasrv`.

- Sur la page GitHub du dépôt, ouvrez une **Pull Request** de cette branche vers `main`, puis fusionnez-la (ou dites-moi de le faire pour vous).
- Vous aurez alors tout le code sur `main`, prêt à déployer.

## Étape 3 — Déployer sur Vercel

1. Allez sur **https://vercel.com** et connectez-vous **avec votre compte GitHub** (celui de `gummybarrefamily`).
2. Cliquez **Add New… → Project**, puis importez le dépôt **sauvemonbulletin**.
3. Vercel détecte Next.js automatiquement. Avant de cliquer *Deploy*, ouvrez **Environment Variables** et ajoutez :

   | Nom | Valeur |
   |---|---|
   | `DATABASE_URL` | la chaîne Neon de l'étape 1 |
   | `NEXTAUTH_SECRET` | une valeur secrète (générez-la avec `openssl rand -base64 32`) |
   | `NEXTAUTH_URL` | `https://votre-domaine.com` (mettez d'abord l'URL Vercel, voir étape 5) |
   | `ANTHROPIC_API_KEY` | votre clé depuis https://console.anthropic.com (pour le tuteur IA) |
   | `ANTHROPIC_MODEL` | `claude-sonnet-5` (optionnel) |
   | `RESEND_API_KEY` | votre clé depuis https://resend.com (pour les emails parents) |
   | `EMAIL_FROM` | `SauveMonBulletin <rapports@votre-domaine.com>` |
   | `CRON_SECRET` | une autre valeur secrète (protège l'envoi des emails) |

4. Cliquez **Deploy**. Au bout de 1–2 minutes, le site est en ligne sur une URL du type `https://sauvemonbulletin.vercel.app`.

## Étape 4 — Initialiser la base de données

Une fois déployé, il faut créer les tables. Le plus simple :

- Sur votre ordinateur, avec le code cloné : créez un fichier `.env` avec votre `DATABASE_URL`, puis lancez :
  ```bash
  npm install
  npm run db:push
  ```
  Cela crée les tables `User`, `Activite`, `RevisionProgrammee` dans Neon.
- (Alternative : utilisez le SQL editor de Neon, ou demandez-moi de vous guider.)

## Étape 5 — Brancher votre domaine GoDaddy

1. Dans Vercel : **Project → Settings → Domains → Add**, saisissez votre domaine (ex. `sauvemonbulletin.com`).
2. Vercel vous affiche les enregistrements DNS à créer. Généralement :
   - un enregistrement **A** `@` → `76.76.21.21`
   - un enregistrement **CNAME** `www` → `cname.vercel-dns.com`
3. Allez sur **GoDaddy → My Products → votre domaine → DNS → Manage DNS** et créez/modifiez ces enregistrements avec les valeurs exactes fournies par Vercel.
4. Attendez la propagation DNS (quelques minutes à quelques heures). Vercel active automatiquement le **HTTPS**.
5. Retournez dans Vercel et mettez `NEXTAUTH_URL` = `https://votre-domaine.com`, puis redéployez (**Deployments → … → Redeploy**).

## Étape 6 — Emails hebdomadaires aux parents (déjà automatisés)

- Le fichier `vercel.json` programme un **cron** tous les dimanches à 18h qui appelle `/api/cron/rapport-hebdo`.
- Vérifiez dans **Vercel → Settings → Cron Jobs** qu'il est actif.
- Assurez-vous d'avoir renseigné `RESEND_API_KEY` et vérifié votre domaine d'envoi sur Resend (sinon les emails partent depuis l'adresse de test `onboarding@resend.dev`).

---

## 🖥️ Lancer le site en local (développement)

```bash
npm install
cp .env.example .env      # puis remplissez les valeurs
npm run db:push           # crée les tables
npm run dev               # http://localhost:3000
```

## 📚 Ajouter / enrichir le contenu

Tout le contenu vit dans `content/` :

- `content/curriculum.ts` : la liste des chapitres par matière et niveau (mettez `disponible: true` quand un chapitre est rédigé).
- `content/chapitres/` : un fichier par chapitre (cours, fiche, cartes mémo, exercices, examens). Copiez `maths--5eme--fractions.ts` comme modèle, puis ajoutez l'import dans `content/chapitres/index.ts`.
- `content/methodes.ts` : les fiches méthodes.
- `content/brevet.ts` : les sujets de brevet blanc.
- `content/hebdo.ts` : les séries hebdomadaires de fondamentaux.

Le site couvre aujourd'hui un chapitre complet par matière et par niveau (24 chapitres modèles), 6 brevets blancs et 10 fiches méthodes. La structure est prête pour compléter tout le programme.

## 🔐 Notes

- Le tuteur IA fonctionne dès que `ANTHROPIC_API_KEY` est renseignée. Sinon, il affiche un message invitant à la configurer.
- La synthèse vocale (voix off, fiches audio) utilise la **Web Speech API** du navigateur : gratuite, sans fichier audio à héberger, et disponible en français, chinois et russe selon les voix installées sur l'appareil.

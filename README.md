pinglue.org website
==========================

A bootstrapped template based on GatsbyJS to generate doc site based on md/mdx content (found in `/docs-src` folder)

Pre-req
-------------
* Npm version **8.3.0** (make sure you use the same npm version, otherwise problem with package-lock.json ...)
* Node version 14.18.0 or higher


Project
--------------
* Project link: https://github.com/orgs/pinglue/projects/1
* MVP milestone: https://github.com/pinglue/pg-site/milestone/1

General Help
---------------
* Git quick start: https://pinglue.github.io/dev-guides/git/quick-start

* we are following git branch model similar to [git flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) - and for branch names, the format is `type/name-in-kebab-case`, for example if your issue/task title is "Add left sidebar -2x" then your branch could be called feature/add-left-sidebar ... note that the name is the kebab-case of the issue title (dropping the story value 2x) which makes the branch even more related to the issue you are working with. We can use the same name as branch for the corresponding PR.

Design system:
----------------
* Desginers should follow the conventions laid out at: https://appers-lab.com/guides/design-system
* CSS variable: https://appers-lab.com/guides/css-variables


Installation and running
--------------------------
### To run:
1. clone the repo

2. install:

*from repo root:*
```bash
npm install
```

3. run Gatsby dev server:

```bash
npm run develop
```

4. Open in browser `localhost:8000`

5. To see the list of all available pages, type a non-existent address like `localhost:8000/abc` - the error page shows a list of available pages. The main pages we are dealing with are those in `/docs` route.

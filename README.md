# Monorepo Starter Template

This template provides a structured setup for a monorepo project, featuring Next.js 14 for frontend development, PostgreSQL initialization for database management, and OAuth integration for seamless authentication with Google and GitHub. Additionally, it includes essential components such as Shadcn, login, logout, navbar, and footer for building a complete web application.


![image](https://github.com/skushagra9/Turbo-Starter-Tempalate/assets/120712705/4c0756da-88c4-4397-9b56-e77611863770)
![image](https://github.com/skushagra9/Turbo-Starter-Tempalate/assets/120712705/6ea0a195-b9df-40c9-8cbe-e39fba3b96dd)

## Next.js 14 Setup
- Initialize a Next.js project.
- Configure Next.js 14 features and optimizations.

## PostgreSQL Initialization
- Include scripts for initializing and managing a PostgreSQL database.
- Add migration and seeding functionality for database setup.

## OAuth Integration
- Integrate OAuth authentication with Google and GitHub.
- Utilize Passport.js or similar libraries for OAuth handling.

## Components
- **Shadcn Component**: Include the Shadcn component with its functionalities.
- **Login and Logout Components**: Implement authentication components for user management.
- **Navbar Component**: Create a reusable navigation bar component.
- **Footer Component**: Implement a footer component to remain at the bottom of the page.

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

### Utilities

This Turborepo has some additional tools already setup for you:
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
npm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
npm dev
```

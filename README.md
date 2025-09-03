# shadcn/ui monorepo template

This template is for creating a monorepo with shadcn/ui.

## Usage

```bash
pnpm dlx shadcn@latest init
```

## Adding components

To add components to your app, run the following command at the root of your `web` app:

```bash
pnpm dlx shadcn@latest add button -c apps/web
```

This will place the ui components in the `packages/ui/src/components` directory.

## Tailwind

Your `tailwind.config.ts` and `globals.css` are already set up to use the components from the `ui` package.

## Using components

To use the components in your app, import them from the `ui` package.

```tsx
import { Button } from "@workspace/ui/components/button"
```
---Prisma config---
1. env copy
cp .env.example ./.env
cp .env.example ./packages/database/.env
cp .env.example ./apps/web/.env
cp .env.example ./apps/api/.env

2. Docker database
BASH: 
docker-compose up -d

3. Migrate
pnpm run db:migrate:dev

4. seed
npm run db:seed

NEXTJS Config

- main ts port 3001

- Package.json / copy to devdep 

"@workspace/typescript-config": "workspace:*",

BASH: pnpm i

api/tsconfig.json 
+ "extends": "@workspace/typescript-config/base.json",

+ api/eslintrc.js
CODE:->
    module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};


**SHARED TYPES**

+ packages/types/package.json

CODE:->
{
    "name": "@workspace/types",
    "version": "0.0.0",
    "private":true,
    "scripts":{
        "build":"tsc",
        "dev":"tsc -w",
        "lint": "eslint . --max-warnings 0"
    },
    "exports":{
        ".":{
            "types": "./src/index.ts",
            "default":"./dist/index.js"
        }
    },
    "devDependencies": {
        "@workspace/eslint-config": "workspace:^",
        "@workspace/typescript-config": "workspace:*",
        "@types/node": "22.8.2",
        "@types/eslint": "9.6.1",
        "eslint": "9.13.0",
        "typescript": "5.6.3"
    }
}

+ packages/types/src/index.ts

BASH: pnpm i

+ packages/types/tsconfig.json
CODE: 
{
    "extends": "@workspace/typescript-config/base.json",
    "compilerOptions": {
        "outDir": "dist",
        "strict": false
    },
    "include": ["src"],
    "exclude": ["node_modules", "dist"]
}

+ packages/types/.eslintrc.js

CODE:

module.exports = {
    root: true,
    extends: ["@workspace/eslint-config/library.js"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        tsconfigRootDir: __dirname,
    },
};

Check: pnpm run build --filter=@workspace/types

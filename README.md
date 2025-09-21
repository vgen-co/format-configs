# @vgen-co/format-configs

> VGen's shared linting and formatting configs

## Getting Started

```sh
npm install --save-dev @vgen-co/format-configs
```

## Code quality and style

### [ESLint](https://eslint.org/)

Follow [the instructions in the ESLint docs](https://eslint.org/docs/developer-guide/shareable-configs#using-a-shareable-config) with `@vgen-co/format-configs/eslint`.

### [Prettier](https://prettier.io/)

Follow [the instructions in the Prettier docs](https://prettier.io/docs/en/configuration.html#sharing-configurations) with `@vgen-co/format-configs/prettier`.

### Scripts

Add the following scripts:

```json
"format:check": "prettier . --check --cache",
"format": "prettier . --write --cache",
"lint:check": "eslint . --max-warnings=0 --cache",
"lint": "npm run lint:check -- --fix",
```

If you ever need to manually run the linter or formatter, you can do so with the following command:

```sh
# To manually run ESLint, including attempting auto-fixes
npm run lint

# To manually run Prettier, including attempting auto-fixes
npm run format
```

We typically use the `:check` script variants as part of CI workflows.

### Integration with local development

Recommended VSCode extensions for better integration:

- [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) to highlight warnings and errors in your code as you write it
- [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Other popular IDEs typically have similar extensions/plugins.

## Pre-commit hook

We use [Lefthook](https://lefthook.dev/) to help execute the above scripts automatically when creating a commit, as well as running the `test` script if present.

To reuse the common pre-commit hook:

```sh
npm install --save-dev lefthook
```

Then create a `lefthook.yml` file in the root of the target repository with:

```yaml
extends:
    - node_modules/@vgen-co/format-configs/hooks/pre-commit.yml
```

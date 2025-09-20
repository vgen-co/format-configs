# @vgen-co/format-configs

> VGen's shared linting and formatting configs

## Getting Started

```sh
npm install --save-dev @vgen-co/format-configs
```

### [ESLint](https://eslint.org/)

Follow [the instructions in the ESLint docs](https://eslint.org/docs/developer-guide/shareable-configs#using-a-shareable-config) with `@vgen-co/format-configs/eslint`.

### [Prettier](https://prettier.io/)

Follow [the instructions in the Prettier docs](https://prettier.io/docs/en/configuration.html#sharing-configurations) with `@vgen-co/format-configs/prettier`.

### [Lefthook](https://lefthook.dev/)

Create a `lefthook.yml` file in the root of the target repository with:

```yaml
extends:
    - node_modules/@vgen-co/format-configs/hooks/pre-commit.yml
```

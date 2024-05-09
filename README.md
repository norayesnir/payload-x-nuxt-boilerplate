# Payload x Nuxt Boilerplate
> [!IMPORTANT]
> Work in progress!

### Disclaimer
Currenly there is no real way to integrate Nuxt directly into Payload. So for now its a workaround with `server` / `client` directories.

## Instalation
You will need to install the `node_modules` for the `server` and `client` seperately. When in the root directory you can run the following:
```shell
cd client && yarn && cd ../server && yarn
```
> This command will install the `node_modules` for both the `client` and `server` directory.

After that you can also run the following **inside of your root directory** to start `dev` on both `client` and `server`.
```shell
cd client && yarn dev && ../server && yarn dev
```

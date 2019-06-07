# twilson63 App Template

This is a starter template for twilson63 apps, 
it comes ready with an application framework,
css design based on the bulma framework.

And livereload built in for dev mode.

## Usage

```
npx degit twilson63/template [appname]
cd [appname]
yarn
yarn dev
```

> Open browser to localhost:5000

## Deploy

This template comes built in with a deploy
script for nowjs.

```
now 
```

## About the App Template

The app template comes with:

* bulma - with twilson63 theme - https://bulma.io
* svelte - a framework that compiles to vanilajs - https://svelte.dev
* redux-bundler - bundle your actions, reducers and selectors by domain, which makes it easy to attach apis, auth, etc to you application. https://reduxbundler.com and https://reduxbook.com/

## Some things you need to know

Routing - routing is handled by redux-bundler, there is a routes.js bundle in the `src/bundles` folder, you can place all of your routes in this file and use the `doUpdateUrl` action to route to your pages, or use an `anchor tag`. Routing is managed as state, no extra libraries required.

Redux Bundles - Take time and read https://reduxbundler.com also if you are not familiar with redux, you may want to read about redux here: https://redux.js.org/basics/basic-tutorial, with redux bundler, you get a light abstraction that makes working with redux very straight forward.

### about actions

You define your action in the bundle an prefix them with `do` like `doXXXX` this makes it easy to find in your code. For example, the `doUpdateUrl` action, it can be imported from the actions in your store.

```
import { reduxBundler } from '../store'

const { doUpdateUrl } = reduxBundler
```

Every action you create in a bundle will be appended to your actions object in the store.

### about selectors

Selectors allow you to create computed values from your raw state to make it easy for your application get the right state.

``` 
import { reduxBundler } from '../store'

const { selectRoute } = reduxBundler
```


### Common bundles 

You may want to include some common bundle packages for your 
application:

#### auth 

the `auth` bundle comes with all the actions and selectors you need to perform citibot authentication in your application.

install instructions

`yarn add @twilson63/auth`



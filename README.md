# Vizor

A component library for Vue.js

> Note: This package is not on NPM (yet)

To get started using this component library, pull it down to your local machine:

```
git clone https://github.com/cdterry87/vizor.git vizor
```

In the same directory, at the same level as `vizor`, create your Vue project:

```
vue create myprojectname
```

When you have created your project, cd into your project and add Vizor to the project:

```
cd myprojectname
npm add ../vizor
```

Then, in your app's `main.js` file, add the following above the `new Vue` instance:

```
import vizor from 'vizor'
import 'vizor/dist/vizor.css'
Vue.use(vizor)
```

Finally, create a `vue.config.js` if one does not already exist and add the following:

```
module.exports = {
  chainWebpack: (config) => {
    config.resolve.symlinks(false)
  }
}
```

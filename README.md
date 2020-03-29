# vue-site

> My personal vue.js web site

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## Development process
 Start by merging changes into develop. run the below commands on develop

1) Run the run build command. This will generate js script and css tags in the dist/index.html.
2) Copy these tags to the index.html in the root and prefix the hrefs with dist. This is so that github pages can find the files which have been generated on build. 

3) Commit these changes and then merge these changes into master and the push the branch.


For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

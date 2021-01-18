# Personal Website

## Local

### Start
1. `yarn ` ( install dependencies )
2. `yarn start` ( hosts app at 3000 )

### Build
1. `yarn build` ( hosts app at 5000 )

## Dockerize App

### Start
1. `yarn docker:run` ( hosts app at 4000 )

### Build
1. `yarn docker:build` ( build/rebuild app )

### Coding guides
1. Branch from **develop**, name your new branch feature or ticket name related. Upon finishing the feature create MR to develop.
2. Organize folder structure in the following way
```
    -> Component
        -> Component
        -> Component
            -> Component.js
            -> Component.module.css
            
```
3. Import defaults as you name them
```js
    //Do
    import MenuHeader from './MenuHeader/MenuHeader'
    
    //Don't
    import H from './MenuHeader/MenuHeader'
    import Header from './MenuHeader/MenuHeader'
```
4. Import styles in the following way
```js
    import styles from './Component.module.css'
```
5. Combine classes using classnames, import in the following way
```js 
    import cn from "classnames"
```
6. Name your classes and ids in the following way
```css
.class-name {
    ...
```
7. Organize imports. First import modules, utility functions, other components, than styles
```js
    import React from 'react'
    import cn from 'classnames'

    import { helperFunction } from '@/util/helper'

    import Component1 from '@/components/Component1/Component1'
    import Component2 from '@/components/Component2/Component2'

    import styles from './Component.module.css'

    const Component = props => {
        ....
```
8. Please do not have files (dummy, test, alex, peter, john...) in your MRs. Make your work readable to others and your future self.

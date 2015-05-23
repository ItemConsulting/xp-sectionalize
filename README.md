# Enonic Skeleton Module

This module can be used as a base for building modules for Enonic XP. It contains a recommended module structure, file structure and naming conventions.

Please note that this module is an ongoing project. It will be continuously updated in order to utilize the current functionality of Enonic XP at all times. Work in progress is listed at the end of this document.

## Building and deploying module

### Building module
The module is built by running "gradle build" in your terminal.

### Deploying module
The module is deployed to your Enonic XP installation by running "gradle deploy" ("gradle watch" does this, also).
Make sure that XP_HOME is set to wherever your XP home folder is.

```
export XP_HOME=/Users/tlo/Development/enonic-xp-5.0.1/home`
```

## Naming convention

### CSS
CSS is built with SCSS and follows the BEM (Block, Element, Modifier) methodology for naming and structuring CSS classes.

 - .component-name {}
 - .component-name--modifier-name {}
 - .component-name__descendant {}
 - .component-name__descendant--modifier-name {}
 - .component-name.is-behavioural-state {}

Classes that are meant to be used by JavaScript should be for that purpose only, and prefixed with js-.
Don't ever apply styling to a js-class.

A rule of thumb is that you should avoid nesting rules beyond 3 levels.

Each module part should be wrapped in a container with the part name as the class name, prefixed with 'p_', in order to distinguish between potential similar named components in different parts.

A rule of thumb is that a part should be self contained, it should not depend on other parts.

#### Examples

- .menu {} (.component-name {})
- .menu__item (.component-name__descendant {})
- .menu__item--special (.component-name__descendant--modifier-name {})
- .menu__item.is-selected (.component-name__descendant.is-behavioural-state {})

## Modularity

### CSS

The CSS is structured in folders and files based on their use. The purpose of this is to increase maintainability and to keep structure consistent across projects.

All partial SCSS files should be prefixed with underscore (_), this tells the SCSS compiler that the files are partial and there is no need to compile separate CSS files for these.

 - framework
 - helpers
 - parts
 - vendor

#### Framework
Contains framework specific CSS. Base elements styling, structure and general layout.

#### Helpers
Contains variables, mixins, functions, placeholders and other that does not directly output CSS.

#### Parts
The CSS for a part should be kept in its own CSS file, to keep things lean and to make sure the files don't grow too large.
Make sure that the naming makes sense, related files should use the same names.

#### Vendor
All third party CSS is placed here.

#### main.scss
This is the main SCSS file that joins everything together.

#### _shame.scss
This file is reserved just for your temporary hacky code. It should normally / optimally be empty. Make sure that all code in this file is well documented.



### JavaScript
The JavaScript for a part should be kept in its JS file, similar to CSS modularity.

## CSS Class structure

- List @extends first
- List @includes next
- List "regular" styles next
- List nested pseudo classes and pseudo elements next
- List nested selectors last

### Avoiding CSS cascade and specificity problems

In Enonic XP, multiple modules with multiple parts can be installed for the same site. This can potentially lead
to a range of CSS cascade and specificity problems. In order to avoid this, it is recommended that all module specific CSS
is encapsulated in a module name class. In the CSS files, this is handled in the Gradle build step, where a placeholder in the generated CSS
is replaced with the module name (prefixed with "m_"). This class should be added to the body element in the page templates.

Part specific CSS is handled in a similar way. The root element in a part should have a class named after the part, prefixed with "p_", for example "p_my-part".
The CSS file for the part should nest everything in this class.

This means that a typical CSS selector for an element in a part will look like this

```
.m_my-module .p_my-part .component__element
```


## Controller structure

The controller.js should be structured in the following way, using a renderView() function to render the view, and a createModel() function to create the model for the view.
Each part of the model should be created with self contained functions. This pattern ensures a quick overview of what the controller does.
Common / shared variables and data should be placed in the "me" object.

```javascript
var UTIL = require('/cms/lib/util/js/util.js');

// Handle GET request
exports.get = handleGet;

function handleGet(req) {
    var me = this;

    function renderView() {
        var view = resolve('view-name.html');
        var model = createModel();
        return UTIL.view.render(view, model);
    }

    function createModel() {
        me.site = execute('portal.getSite');
        me.content = execute('portal.getContent');

        var model = {};
        model.test = 'Fish and cheese';
        return model;
    }

    return renderView();
}
```

## Comments

### JavaScript
JSDoc

### CSS


## Work in progress
- Documentation
- Clean up build script
- Progressive images (Thymeleaf mixin bug)
- Modular Javascript (currently breaks XP live edit mode)
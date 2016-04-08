# Fidelity Card - simple Moblet example
This is a simple Moblet example created for Universo. Developers can use this Moblet to better understand how to create a Moblet.

For more advanced Moblets, please access [Universo's GitHub page](https://github.com/universo).

## Moblets
Moblets are the components of Universo. This name comes from _Mobile_ + _Widgets_.

They can be used in Universo's open source project or added to our CMS.

## Structure
As Universo is based on Apache's Cordova, Moblets are made of HTML, CSS and JavaScrips. Universo's apps have a base prepared to receive a predefined structure and work with it.

This is the folders' structure of this Moblet:

```
fidelity-card                   0
└── moblet                      1
|   └── lang                    1.1
|   |   └── en-US.json          1.1.1
|   |   └── pt-BR.json          1.1.1
|   └── u-fidelity-card.html    1.2
|   └── u-fidelity-card.js      1.3
|   └── u-fidelity-card.scss    1.4
└── server                      2
|   └── changelog               2.1
|   |   └── en-US.md            2.1.1
|   └── helper                  2.2
|   |   └── pt-BR.md            2.2.1
|   |   └── example-image.gif   2.2.2
|   └── lang                    2.3
|   |   └── en-US.json          2.3.1
|   |   └── pt-BR.json          2.3.1
|   └── ApperConfig.json        2.4
|   └── feed.js                 2.5
|   └── icon.svg                2.6
└── spec                        3
|   └── support                 3.1
|   |   └── jasmine.json        3.1.1
|   └── FeedSpec.js             3.2
└── package.json                4
└── readme.md                   5
```
Now we'll go through each file and folder to explain them. Names inside brackets (e.g. [moblet]) need to have this exact name so the Moblet is validated.

### 0. fidelity-card folder
This is your root directory. This folder name is not validated and doesn't need to be unique, so, you can call your Moblet whatever you want.

### 1. [moblet]
This folder is where you'll store the app frontend files. These files will be injected into the app.

### 1.1 [lang]
This is the folder where you store the app localization files. You need at least one locale so the Moblet is validated.

### 1.1.1 pt-BR.json and en-US.json
These are the localization JSON files used by the Moblet to display the content in distinct languages.

The name of these JSONs follow the convention "language" in lower case, followed by an hyphen and, finally, the country code in uppercase.

Inside these JSON files, we have each string that needs translation.

**The keys must use [snake case](https://en.wikipedia.org/wiki/Snake_case) format.**

 These strings are called from the Moblet JavaScript using the $filter function:

e.g.

```
$filter('translate')("reward_confirm")
```

### 1.2 u-fidelity-card.html
This is the Moblet HTML used to display the moblet content in the app.

This file name must match the name passed through the Moblet Upload System and **must be unique** inside Universo.

This is an [AngularJS directive](https://docs.angularjs.org/guide/directive) HTML.

### 1.3 u-fidelity-card.js
This is the Moblet JavaScript used for the Moblet's business logic.

This file name must match the name passed through the Moblet Upload System and **must be unique** inside Universo.

This is an [AngularJS directive](https://docs.angularjs.org/guide/directive) JavaScript.

This file must use the ```restrict: 'E'``` convention so it will create an **element**.

### 1.4 u-fidelity-card.scss
This is the Moblet CSS used for the Moblet's business logic. You can use CSS, SCSS or SASS for this.

This file name must match the name passed through the Moblet Upload System and **must be unique** inside Universo.

The styles used in the Moblet can overwrite Universo's styles, but they will only affect the Moblet context.

### 2. [server]
This folder is where you'll store the app backend files. These files will be used into the FabApp CMS when some app creator insert the Moblet into their app.

### 2.1 [changelog]
This folder is where you'll store the changes made for each Moblet version you create, so app creators can see what's new in each version and decide if they want to update their app with a new version.

In this folder you can store localized Markdown files and images.

### 2.1.1 pt-BR.md
This is an Markdown file describing each version that will display a rendered HTML when an app creator clicks (ver.) in the FabApp CMS.

The name of these Markdowns follow the convention "language" in lower case, followed by an hyphen and, finally, the country code in uppercase.

### 2.2 [helper]
This folder is where you'll store the helper of your Moblet, so app creators can better use your Moblet.

In this folder you can store localized Markdown files and images.

### 2.2.1 pt-BR.md
This is an Markdown file that will display a rendered HTML when the app creator clicks on the (?) in the FabApp CMS.

The name of these Markdowns follow the convention "language" in lower case, followed by an hyphen and, finally, the country code in uppercase.

### 2.2.2 example-image.gif
This is an image used in the helper Markdown. It's used by a relative path.

### 2.3 [lang]
### 1.1 [lang]
This is the folder where you store the app localization files. You need at least one locale so the Moblet is validated.

### 1.1.1 pt-BR.json and en-US.json
These are the localization JSON files used by the FabApp CMS to display the Moblet configuration content in distinct languages.

The name of these JSONs follow the convention "language" in lower case, followed by an hyphen and, finally, the country code in uppercase.

Inside these JSON files, we have a structure of objects for each data of the Moblet.

The first object, ```moblet```, is mandatory and must use this name and have all these fields:

```
"moblet": {
    "label": "Fidelity Card",
    "hint": "Create a fidelity card to your customers",
    "description": "Fill out the form below to create the fidelity card"
}
```
These fields are used by the FabApp CMS to display 

**The keys must use [snake case](https://en.wikipedia.org/wiki/Snake_case) format.**

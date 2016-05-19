# Fidelity Card - simple moblet example
This is a simple moblet example created for Moblets. Developers can use this moblet to better understand how to create their own.

For more advanced moblets, please access [Moblets' GitHub page](https://github.com/moblets/).

## Moblets
Moblets' name comes from _Mobile_ + _Widgets_. It's a project created to simplify the creation of mobile apllications. Apps created with Moblets structure are used in [FabApp](http://fabapp.com) CMS.

## Structure
As Moblets is based on Apache Cordova, it's moblets are created with HTML, CSS and JavaScript. Moblets' apps have a base prepared to receive a predefined structure and work with it.

This is the folder structure of Fidelity Card moblet:

```
0      m-fidelity-card
1      ├── moblet
1.1    |   ├── lang
1.1.1  |   |   ├── en-US.json
1.1.1  |   |   └── pt-BR.json
1.2    |   ├── m-fidelity-card.html
1.3    |   ├── m-fidelity-card.js
1.4    |   └── m-fidelity-card.scss
2      ├── server
2.1    |   ├── changelog
2.1.1  |   |   └── en-US.md
2.2    |   ├── helper
2.2.1  |   |   ├── pt-BR.md
2.2.2  |   |   └── example-image.gif
2.3    |   ├── lang
2.3.1  |   |   ├── en-US.json
2.3.1  |   |   └── pt-BR.json
2.4    |   ├── form.json
2.5    |   ├── feed.js
2.6    |   └── icon.svg
3      ├── spec
3.1    |   ├── support
3.1.1  |   |   └── jasmine.json
3.2    |   └── feed-spec.js
4      ├── .gitignore
5      ├── package.json
6      └── readme.md
```
Now we'll go through each file and folder to explain them. Names inside brackets (e.g. [moblet]) need to have this exact name so the moblet is validated in our backend.

### 0. m-fidelity-card folder
This is your root directory. This folder name is not validated and doesn't need to be unique, so, you can call your Moblet whatever you want.

### 1. [moblet]
This folder is where you'll store the app frontend files. These files will be injected into the app.

### 1.1 [lang]
This is the folder where you store the app localization files. You need at least one locale so the moblet is validated.

### 1.1.1 pt-BR.json and en-US.json
These are the localization JSON files used by the moblet to display the content in distinct languages.

The name of these JSONs follow the convention "language" in lower case, followed by an hyphen and, finally, the country code in uppercase.

Inside these JSON files, we have each string that needs translation.

**The keys must use [snake case] format.**

 These strings are called from the moblet JavaScript using the $filter function:

e.g.

```
$filter('translate')("reward_confirm")
```

### 1.2 u-fidelity-card.html
This is the moblet HTML used to display the moblet content in the app.

This file name must match the name passed through the Moblet Upload System and **must be unique** inside Moblets.

This is an [AngularJS directive](https://docs.angularjs.org/guide/directive) HTML.

### 1.3 u-fidelity-card.js
This is the moblet JavaScript used for the Moblet's business logic.

This file name must match the name passed through the Moblet Upload System and **must be unique** inside Moblets.

This is an [AngularJS directive](https://docs.angularjs.org/guide/directive) JavaScript.

This file must use the ```restrict: 'E'``` convention so it will create an **element**.

### 1.4 u-fidelity-card.scss
This is the moblet CSS used for the Moblet's business logic. You can use CSS, SCSS or SASS for this.

This file name must match the name passed through the Moblet Upload System and **must be unique** inside Moblets.

The styles used in the moblet can overwrite Moblets's styles, but they will only affect the moblet context.

### 2. [server]
This folder is where you'll store the app backend files. These files will be used into the FabApp CMS when some app creator insert the moblet into their app.

### 2.1 [changelog]
This folder is where you'll store the changes made for each moblet version you create, so app creators can see what's new in each version and decide if they want to update their app with a new version.

In this folder you can store localized Markdown files and images.

### 2.1.1 pt-BR.md
This is an Markdown file describing each version that will display a rendered HTML when an app creator clicks (ver.) in the FabApp CMS.

The name of these Markdowns follow the convention "language" in lower case, followed by an hyphen and, finally, the country code in uppercase.

### 2.2 [helper]
This folder is where you'll store the helper of your moblet, so app creators can better use it.

In this folder you can store localized Markdown files and images.

### 2.2.1 pt-BR.md
This is an Markdown file that will display a rendered HTML when the app creator clicks on the (?) in the FabApp CMS.

The name of these Markdowns follow the convention "language" in lower case, followed by an hyphen and, finally, the country code in uppercase.

### 2.2.2 example-image.gif
This is an image used in the helper Markdown. It's used by a relative path.

### 2.3 [lang]
This is the folder where you store the app localization files. You need at least one locale so the moblet is validated.

### 2.3.1 pt-BR.json and en-US.json
These are the localization JSON files used by the FabApp CMS to display the moblet configuration content in distinct languages.

The name of these JSONs follow the convention "language" in lower case, followed by an hyphen and, finally, the country code in uppercase.

Inside these JSON files, we have a structure of objects for each data of the moblet.

The first object, ```moblet```, is mandatory and must use this name and have all these fields:

```
"moblet": {
    "label": "Fidelity Card",
    "hint": "Create a fidelity card to your customers",
    "description": "Fill out the form below to create the fidelity card"
}
```
These fields are used by the FabApp CMS to display the basic moblet informations as shown in the image below:

**Moblet label, hint and icon in the Moblets list**<br>
![Moblet label, hint and icon](https://i.imgur.com/1TkTq3J.png "Moblet label, hint and icon")

**Moblet label, icon and description in the Moblet configuration pannel**<br>
![Moblet label, icon and description](https://i.imgur.com/iCaFaZ0.png "Moblet label, icon and description")

The other fields are directly related to the **form.json** file. Each field in this file has an object in the JSON.

For instance, in the form.json, we have this field:

```
{
    "name": "description",
    "type": "text-area"
},
```

In the translation file, we have a label, a hint and a placeholder for this field:

```
"description": {
    "label": "Card description",
    "hint": "This is the text that will be in the top of your card",
    "placeholder": "Lunch 9 times and the 10th is free!!!"
}
```

**Field label, placeholder and description**<br>
![Field label, placeholder and description](https://i.imgur.com/Z5j3SGZ.png "Field label, placeholder and description")

**The keys must use [snake case] format.**

//TODO: describe each possibility in this translation file

### 2.4 [form.json]
This JSON is used by the FabApp CSM to build the moblet configurations an data form.

It's a group of objects inside the _fields_ object. Each object describes a moblet field.

It's mandatory for each field to have a **name** and a **type**.

The **name** must be a [snake case] string that will be used as key to the localization JSONs.

The **type** must be one of the followig HTML input types:

| Text type fields  | Other type of fields      | Date type fields      |
| ----------------- | ------------------------- | --------------------- |
| text              | file                      | date                  |
| text-area         | image                     | time                  |
| number            | checkbox                  |                       |
| password          | radio                     |                       |
| email             | color                     |                       |
| tel               |                           |                       |


Some types need specific data that are better explained in the Moblets development documentation. All the fields have automatic validation to check if the filled content matches the expected type. For instance, you can't upload a text in an image field or, a text in an email field.

The other data in this JSON are relative to the field validation. You can use the following validations and, to better understand them, check the Moblets development documentation.

You can check all possible validation types in [m-validate](https://github.com/moblets/m-validate) project, that is used to create FabApp validations.

### 2.5 [feed.js]
This file is used by the server to serve the feed for the moblet. Moblets App-API and NorMA use this [NodeJs] file to get the data needed by the moblet.

The ```feed``` function is mandatory and receive as param the stored config in the DB.

This function must return a JSON with the content used by the app module of the moblet.

You can use any [NodeJs] module. Just use ```npm install --save```so the module is added to the ```package.json``` file.

### 2.6 [icon.svg]
This is the icon used in the FabApp CMS to display the moblet. It's also the default moblet icon, if the app creator don't choose a specific icon.

### 3 [spec]
This folder and it's structure is created by [Jasmine] test framework. To create this structure, you'll have to install [Jasmine] with ```npm install -g jasmine``` and run ```jasmine init``` in your moblet root folder.

### 3.1 [support]
Mandatory folder containing the [Jasmine] configuration files.

### 3.1.1 [jasmine.json]
This is [Jasmine] configuration file. You don't have to change this file.

### 3.2 [feed-spec.js]
This is where the [Jasmine] test code is created.

### 5. [gitignore]
You must add ```node_modules``` to gitignore, so, when submiting your moblet do FabApp the modules are not in your Git repository.

### 5. package.json
This is the file created by [NodeJs]. You only need this file if you are using a Node module in your moblet.

### 6. readme.md
This file is where you'll describe your moblet. It's very important if your moblet is Open Source, so other developers can betther understand it and contribute.

[MIME types]: https://www.iana.org/assignments/media-types/media-types.xhtml
[snake case]: https://en.wikipedia.org/wiki/Snake_case
[NodeJs]: https://nodejs.org/en/
[Jasmine]: http://jasmine.github.io/2.4/introduction.html

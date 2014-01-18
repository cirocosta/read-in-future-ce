Read In Future!
=====
![Imgur](http://i.imgur.com/LFRQ1mG.png)

[Get it on Chrome Webstore](https://chrome.google.com/webstore/category/apps)


What's this about?
----
A simple way of adding URLs or simple notes for seeing in the future. 
This is the Chrome Extension of the whole package (WebApp, Extension, Android).



What it does?
----
Lets you add the current page plus an comment (optional) for further reading
and syncs it to your account on the cloud (if you have one). If it is not the
current page that you want to save it, just override the name.

Latter you can check the links you have to and just have read. Simple like that.

If reading a page that has been add to the Database and is not set as *read* 
then At the top it'll show an action button for marking it as *read*.
(Will be possible to be deactivated on the settings).


How to run it?
----
There's minimum headache for running it from the repo. The steps are:

1. Go to chrome://extensions 
2. Turn Developer Mode on
3. Click Load Unpacked extension and select the directory

*as described [here](http://developer.chrome.com/extensions/getstarted.html).*

If everything went OK than you'll see a new icon just right to the navigation
bar.

---------

For the full development environment it will also be required to install NodeJS.

-	Install NodeJS 0.4+	

-	Install the packages that the project depends on:

```
$ npm install
```

-	Run the task runner to build the minified files that the htmls depends on:

```
$ grunt build
```

-	Check if the linting is ok and test passes:

```
$  npm test
``` 

*ps: the project lacks of unit tests and ui tests yet :( I'm aiming to remake a lot of stuff doing TDD*

Considerations
----
* It is beeing used some tools for automating things here: testing, minifying 
and linting are being done automatically on [Grunt](http://gruntjs.com/), which 
is an amazing tool that you **should** consider using (task runner rules!). It 
runs on [NodeJS](http://nodejs.org/) which is also awesome. 

* As i'll say at *contributing*, this project is about learning. That's why
i tried to use some cool stuff that are being used in big projects. These cool
stuff that i refer to are: **grunt**(automation
with tasks) and **nodejs**(for the [server-side](http://github.com/cirocosta) 
and also instalation of packages).

* Yes, this will be heavily commented


Contributing
----
I'll be really pleased if you contribute to the project. Just a note:

- From the conception i want to make things simple and self-taught, that is,
keep it as an application that its purpose is more for learning than for being
a killer one.

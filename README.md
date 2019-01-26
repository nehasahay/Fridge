# What's In Your Fridge

What’s in your fridge is an application where you can input the ingredients found in your fridge and you are provided with recipes for home fine dining. The application will (via recipe API) find recipes that encompass those ingredients with a visual of the dish on the side. You can save recipes under a category (breakfast, lunch, dinner) and recall it when logging in again. List can be retrieved to determine meals for that day. Meals are also paired up with the perfect wine (from wine API) 


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

- visit URL
- git clone URL what's in your fridge
- run sql DB
- 

### Prerequisites

What things you need to install the software and how to install them

```
Give examples
```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc

├── config
│   ├── connection.js -> Establish DB Connection
│   └── orm.js -> object for all of our SQL statement functions (CRUD)
│ 
├── controllers
│   └── burgers_controller.js -> Routing for our app that uses the model to decide which action to take
│
├── db
│   ├── schema.sql -> DB Table definition
│   └── seeds.sql -> Initial data for the table
│
├── models
│   └── burger.js -> Model that calls ORM (to perform CRUD) and receives input from controller
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css -> CSS Style Sheet
│       └── img
│           └── burger.jpg -> Background image
│       └── js
│           └── app.js -> JS to perform button operations
│
├── server.js -> Configuration for server and application
│
└── views -> Handlebars Functionality
    ├── index.handlebars
    └── layouts
        └── main.handlebars
    └── partials
        └── foods
            └── burger-block.handlebars
# Interactive Digital Library

## 1.	Introduction 

### Project Overview

> *Project Name:* Interactive Digital Library

> *Version:* 2.0.0

> *Date:* December 7, 2023

> *Authors:* 
> * Ángeles Estrada Ricardo
> * Chávez Vázquez Ernesto
> * Cornejo Aguilar Clara Luz
> * Cruz Hipólito Michel
> * Mejía Valdiviezo Eduardo Javier
> * Mendoza de los Santos Lirio Aketzalli
> * Ortiz Camacho Jessica Elizabeth


### Purpose and Scope

Our project is the creation of an Interactive Digital Library that can offers e-books, magazines, and educational resources. Each resource will be a separate micro frontend, and users will be able to read, annotate, and share content. It is built using the React framework, leverages the Material-UI (MUI) library for UI components, and utilizes Docker for containerization and deployment, as well this project has the purpose to let us practice the content learnt in the course Distributed Systems. 

### Project Goals. 

Create an intuitive and user-friendly application, so the navigation between the different modules allows the user to interact within. Furthermore, it should be able to provide a responsive and appealing user experience, between every module so it is attractive visually.


###  [LINK FOR OUR PROJECT PRESENTATION:](https://www.canva.com/design/DAF2SHB9nEs/dlYBGSVMUHGJGuE2MYMWrg/view?utm_content=DAF2SHB9nEs&utm_campaign=designshare&utm_medium=link&utm_source=editor)


## Branching Strategy

For our project we decided to use braching strategy since it will allows us to work on the different funcionalities without cause problems to works on other things and it was necessary communication on our work team to allows us know who will work on every branch and activity.


![Alt text](image-1.png)

## Technical Stack

**1. npm (Node Package Manager):** is a package manager for Node.js that we use for managing project dependencies, scripts, and package installations. It allows us to easily install and update libraries and tools necessary for our project.

**2. React:** Front-End Framework, is a JavaScript library for building user interfaces. It provides a component-based architecture for creadting dynamic, interactive and responsive UIs.

**3. Git:** Distributed version control system that we used for source code management. It allowed an efficient collaboration among team members, version control, and tracking changes in our project's source code.

**4. Next.js:** React framework that enhanced our application's development by offering automatic code splitting, and routing. It optimizes performance and provides an excellent developer experience.

**5. Next Auth:** Authentication library designed for Next.js applications. It enables user authentication and authorization in our app, especifically using Discord Provider. 

**6. Material-UI (MUI):** React UI framework that we used for styling our application. It offers a wide range of pre-designed and responsive components and a theming system for creating a modern and visually appealing user interface.  allowing for a consistent and aesthetically pleasing user interface.

**7. Jest:** JavaScript testing framework that we used for unit and integration testing of our application. It provides tools for writing and running tests, ensuring code quality and reliability.

**8. Docker:** Containerization platform that we utilized for packaging our application and its dependencies into portable containers. This approach provides consistency in deployment across various environments and simplifies the distribution process.


## Installation 

### Prerequisites. 

You should ensure that you have installed npm (Node Package Manager), to checked this you can use the command: npm -v 

Also we should already have installed mongodb Compass and Python 3

### Configuration. 

Since you will need to realize the authentication, you will need to configure environment variables so you need to create a .env file, in this you should put 4 variables:
NEXTAUTH_URL
NEXTAUTH_SECRET
DISCORD_CLIENT_ID
DISCORD_CLIENT_SECRET

### Installation Steps.

#### For front-end

On the terminal, you navigate to the directory where you want to store the project, there you will clone it from the repository from GitHub: https://github.com/LirioMendoza/InteractiveDigitalLibrary

Once you have done that, Navigate to the Project Directory and inside the Navigation_routing folder install the dependencies using the following command:

```
npm install -i
```

```
npm install axios
```

That should install all the dependencies necessaries for the project and u can now run with the next command:

```
npm run dev
```


#### For back-end

##### Steps to install and run the server

On the terminal, you navigate to the directory where you want to store the project, there you will clone it from the repository from GitHub: https://github.com/LirioMendoza/DigitalLibraryAPI

We should have a virtual enviroment, if we don't have one we can create one with the following command:

```
python3.12 -m venv venv
```

Then we activate it with:

```
source venv/bin/activate
```

and install all the necessary with:

```
pip3 install -r requirements.txt
```

To run it we use the command:

```
flask run
```

##### Steps for database

First we run docker with:

```
sudo systemctl start docker
```

For the container we use the next command:

```
docker run -d -p 27017:27017 --name mongodb -v ~/mongodb_data:/data/db -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=pass1234 mongo:4.4
```

We open mongo with:

```
mongodb-compass
```

to connect to the docker on mongo db we put the next: 

mongodb://admin:pass1234@localhost:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false



### Testing 

To be able to execute our tests, you need to be inside the test folder and use the following command:

```
npm test
```

---
---

## Architecture.

### High Level Overview

The project can be divided into the following 6 modules:

* **Login module:** For user authentication and access to library resources 

* **Resource catalog module:** To display a list of available e-books, magazines, and resources.

* **Online reading module:** To allow users to read and explore online resources.

* **Annotations and comments module:** For users to make interactive annotations on resources and collaborate in the discussion.

* **Downloads module:** For users to download resources for offline use if allowed.

* **Navigation and Routing:** Implement a central routing layer in Next.js to manage navigation between different micro frontends.


---
---

## Code Structure

### Directory Structure 

The structure that follows is a general visual description that we used within every module created for our application.

    |--FEATURE MODULE
    |   |--node_modules
    |   |--app/
    |       |--layout.js
    |       |--page.jsx
    |   |--public
    |   |--components
    |   |--tests
    |       |--index.test.js
    |--.gitignore
    |--Dockerfile
    |--deployment.yml
    |--service.yml
    |--next.config.js
    |--jest.config.js
    |--jsconfig.json
    |--package-lock.json
    |--package.json
    |--README.md


### **Components and Features.**

### Components

* banner: 
    * Description: Encapsulates banner for information of the page

* card-media
    Description: Gives the format for every book that will be showing in the catalog. Data for the books will be taken from the data base.


* Carousel
    Description: Shows and image carousel so users can see some of the books available at the library, as well to access to the catalog when the click on to one of them 

* Comment-Forn
    * Description: Handles every part of the comment Form.


* Comment-Update-Form
    * Description: Handles every part of the comment Form.

* Comment-List
    * Description: Gives the format that will be used for the comments.

* Comments
    * Description: Encapsulates the main section for comments section.

* Rating-Stars
    * Description: Handles rating Stars between Filled and Empty

* Select-Stars
    * Description: Handles a new rating, verifies the array, and depending on the user's click, selects the stars for the rating

* Submit-Button
    * Description: Button for submiting a new comment

* downloads
    * Description: Encapsulates the download section, handling the link for each book from the catalog

* navbar
    * Description: Component for the navigation on the page, responsive and validates there's a session and user has authenticated to access different pages when logged in

* promotions
    * Description: Shows dinamic text for user visual appealing

* portada
    * Description: Creates a banner that shows the page name

* signin-btn
    * Description: Encapsulates main login section 

* type-writer
    * Description: Handles text created by Javascript

* user-info
    * Description: When user is authenticated show the user information


## Pages

* Books
    * Description: Main section that encapsulates the catalog to show it.

* Home 
    * Description: Home Page for the Library

* Login
    * Description: Login Page for Library

* Profile
    * Description: User Profile Page for Library


## Styles

* Banner
    * Description: Styles for banner of the page

* Promotions:
    * Description: Styles for the promotions of the page

* theme
    * Description: General Styles for the page


---
---
## Front-End Best Practices
For the deployment it was crucial to follow front-end best practices to ensure optimal performance, and user experience. 

### Responsive Design:
**Description:** Ensure that our application's user interface is responsive and adaptable, with that in mind we implemented techniques to provide a user-kindly experience on both desktop and mobile devices. We focused on mobile devices, for that reason in navigation module we implement a dinamic navigation bar, so its adaptable to various screen sizes and devices. 


### Code Splitting:
**Description:** We split the code on differents components so the page for the module could be more organized and to reduce somo data transfer and optimizate resource utilization.

### Version Control

**Description:** We used Git to manage the source code, that allows us to tracked and documented all changes in a version control system. Futhermore, this help to a more organized collaborative work. 

### Documentation:

**Description:** Maintain comprehensive documentation for our application, including all the neccesary tools needed to run correctly our application.

### Guidelines and consistency

**Description:** Maintain consistency and follow guidelines when realizing commits to our repository, when decide to use a format like the following:

*[ FIX / FEAT ] ( BranchName ) :  Commit Message.*

For our logging we tried following similar format as follows:

*[ TYPE ]* : Logging Message*


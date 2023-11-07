# Interactive Digital Library

## 1.	Introduction 

### Project Overview

> *Project Name:* Interactive Digital Library

> *Version:* 1.0.0

> *Date:* October 30, 2023

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


###  [LINK FOR OUR PROJECT PRESENTATION:](https://www.canva.com/design/DAFyy8hQf5o/OJtoaENLgPHcJVtFxQ_t1w/view?utm_content=DAFyy8hQf5o&utm_campaign=designshare&utm_medium=link&utm_source=editor)

## Technical Stack

**1. npm (Node Package Manager):** is a package manager for Node.js that we use for managing project dependencies, scripts, and package installations. It allows us to easily install and update libraries and tools necessary for our project.

**2. React:** Front-End Framework, is a JavaScript library for building user interfaces. It provides a component-based architecture for creadting dynamic, interactive and responsive UIs.

**3. Git:** Distributed version control system that we used for source code management. It allowed an efficient collaboration among team members, version control, and tracking changes in our project's source code.

**4. Next.js:** React framework that enhanced our application's development by offering automatic code splitting, and routing. It optimizes performance and provides an excellent developer experience.

**5. Next Auth:** Authentication library designed for Next.js applications. It enables user authentication and authorization in our app, especifically using Discord Provider. 

**6. Material-UI (MUI):** React UI framework that we used for styling our application. It offers a wide range of pre-designed and responsive components and a theming system for creating a modern and visually appealing user interface.  allowing for a consistent and aesthetically pleasing user interface.

**7. Jest:** JavaScript testing framework that we used for unit and integration testing of our application. It provides tools for writing and running tests, ensuring code quality and reliability.

**8. Docker:** Containerization platform that we utilized for packaging our application and its dependencies into portable containers. This approach provides consistency in deployment across various environments and simplifies the distribution process.

**9. Docker Hub:** Cloud-based container repository where we stored and managed our Docker container images.

## Installation 

### Prerequisites. 

You should ensure that you have installed npm (Node Package Manager), to checked this you can use the command: npm -v 

### Installation Steps.

On the terminal, you navigate to the directory where you want to store the project, there you will clone it from the repository from GitHub: https://github.com/LirioMendoza/InteractiveDigitalLibrary
Once you have done that, Navigate to the Project Directory and install the dependencies.

### Configuration. 

Since you will need to realize the authentication, you will need to configure environment variables so you need to create a .env file, in this you should put 4 variables:
NEXTAUTH_URL
NEXTAUTH_SECRET
DISCORD_CLIENT_ID
DISCORD_CLIENT_SECRET

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

#### 1. For the login module:

<!-- * Footer: 
    * Description: Footer for the app
    * Functionality: Shows the footer information -->

<!-- * Navbar
    * Description: Default navigation bar for the login section
    * Functionality: Shows the icons at the navigation bar and the sign out button when the user has logged in. -->


* Signin
    * Description: Encapsulates main section for sign in section.
    * Functionality: Contains a button that redirectionates to the discord authentication so the user can access with an account already created.

<!-- Modify this section when the app integrates correctly login to access. -->

* user-info
    * Description: Shows the account user information.
    * Functionality: Allows the user to see their user information, their email address, avatar, and user.


#### 2. For resource catalog module:

* Portada
    * Description: Element designed as a banner.
    * Functionality: Shows a more visual appealing for users.


<!-- *Quitar el app bar del codigo* -->

* basic-app-grid 
    * Description: Main section that encapsulates the catalog.
    * Functionality: Contains all the elements to show the catalog.


* books
    * Description: File that contains all the information for the catalog 
    * Functionality: Allows to extract every book data that Will be showing on the catalog. 


* card-media 
    * Description: Main section that shows book data
    * Functionality: Allows to see every book data in a format defined, the data includes title, author, and book cover.


#### 3. For online reading module:

* Books: 
    * Description: File that contains all the information for reading module
    * Functionality: Allows to extract book URL that will show the book for reading.
 
* PDFViewer
    * Description: Allows to do various actions for reading
    * Functionality: Creates all the buttons that allows the user to be able to navigate between pages and zooming. 

* pdf-viewer 
    * Description: Interface for reading books
    * Functionality: Allows users to see the interface where they will be reading the book selected.

* buttonPDF 
    * Description: Button applied to catalog
    * Functionality: Depending the book title the button will compare and get book URL to access to reading interface



#### 4.  For annotations and comments module:

* commentForm
    * Description: Main section for the comments form
    * Functionality: Allows users to fill the comment form that includes Rating, Title of the comment and the comment itself.

* commentsList
    * Description: Main section to show the comments realized
    * Functionality: Allows the users to see the comments lists realized about the resource, apart from the information they provided in the comment form it also shows a date.

* ratingStars
    * Description: It allows to handle the rating
    * Functionality: Handles the rating with filled and empty stars depending on the selection.

* selectStars	
    * Description: Handles the rating depending on the selection
    * Functionality: When the user clicks on the star it will be filled with a star and it will be used an empty star (border star) for the others as a default array

* submitButton
    * Description: Section for submit button
    * Functionality: Allows the user to send the information provided on the comment form to the comments list

#### 5. For resource downloads module:

* Page
    * Description: encapsulates main section that allows downloads
    * Functionality: Handles downloads using a button.

#### 6. For navigation and routing:

* Page
    * Description: Main section on charge to carry out the navigation
    * Functionality: Handles downloads redirecting to the different sections on our application.

*  Carrousel 
    * Description: main section for the home.
    * Functionality: User visual appealing ? Shows an ismgencarrousel with the portada of some books.

* Item    
    * Description: Section for the imagen of the portada of the book showing.
    * Functionality: Gives a format for the image that Will show on the carrousel.

* Slider
    * Description: File that contains all the information for the catalog 
    * Functionality: Allows to extract every book data that Will be showing on the slider.

* Navbar
    * Description: File that contains all the information for the catalog 
    * Functionality: Allows to extract every book data that Will be showing on the slider.

* NavListDrawer
    * Description: File that contains all the information for the catalog 
    * Functionality: Allows to extract every book data that Will be showing on the slider.


---
---

## Docker Containers

We containerize to ensure consistency across various environments. Docker containers package the entire runtime environment, including the application code, dependencies, and system libraries. This isolation prevents conflicts and ensures a reliable execution environment.

#### Configuration

First we modified next.config.js with the next lines:

```
/** @type {import('next').NextConfig} */
    const nextConfig = {
        output: 'export',
    }
```
   
We also created a Docker file on the module's directory. This file defines the steps to build the Docker image.

```Dockerfile
FROM nginx:1.25.2-alpine3.18-slim

WORKDIR /usr/share/nginx/html

RUN rm /usr/share/nginx/html/*
COPY ./out .

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

```

Then we run the following commands in every module's directory:

```
sudo systemctl start docker

sudo npm install

sudo npm i -g next

sudo npm run build
```

For **building the container image** we used the command below, in which we used the module name as the image name, and for the tag v1.0

```
sudo docker build . -t imageName:tag
```

To run the container we used the next command:

```
docker run -p 80:80 -d imageName:tag
```

To verify the image container was correctly we enter to the url: 

```
http://localhost:80
```

We also decide to use Docker Hub for uploading our images, for that 

```
docker tag imageName:tag liriomendoza/imageName:tag 
```

Then we login to an account that we created to load every container image, with the next command. That after than it will request the username and password to log in. 

```
docker login
```

Then we did the following command for the container images created.

```
docker push liriomendoza/imageName:tag
```

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


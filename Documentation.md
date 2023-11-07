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

## Technical Stack

1.	React: Front-End Framework
2.	Material UI (MUI) 
3.	Next.js
4.	NextAuth
5.	Docker
6.	Git
7.	Jest
8.	Npm

## Installation 

### Prerequisites. 

You should ensure that you have installed npm (Node Package Manager), to checked this tou can use the command: npm -v 

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

#### For the login module:

* Footer: 
    * Description: Footer for the app
    * Functionality: Shows the footer information

* Navbar
    * Description: Default navigation bar for the login section
    * Functionality: Shows the icons at the navigation bar and the sign out button when the user has logged in.


* SignInBtn
    * Description: Sign In Button that allows the user to log in.
    * Functionality: Component that encapsulates the sign in button to access with a discord account.

* Signin
    * Description: Main section that encapsulates the sign in section.
    * Functionality: Section that allows to show the sign in section.

* user-info
    * Description: Shows the account user information
    * Functionality: Allows the user to see their user information, their email address, avatar, and user.

#### For annotations and comments module:

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


# E-Store

# How To Run It

!!! In order to run this project locally follow theese steps:
1. Download the project locally in your computer
2. Create a database using the scripts from the queries.sql file
3. Run npm init in your terminal
4. Run npm install - g @angular/cli in your terminal
5. Run ng build in your terminal
6. Run the project with ng serve

Disclaimer: on this branch there's the frontend, and on the branch named "backend" you can find the backend files(including the sql script)

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Description

This is a simple online store made with angular and springboot. The project is still ongoing so it is not finished, there are a couple of functionalities which are missing currently.

# Functionalities

The user can view on the main component a list of products coming from the database.
The user can select different product categories
The user can search products by keywords
The user has access to pagination, and can set the number of items he can see on one page
The user can click on a product to view further details about it
The user can add products to cart
The user can enter the cart and remove products from it, and see his current total price and quantity of products.

## Languages / Frameworks used

Frontend framework : angular

Frontend programming languages: html, css, typescript

Backend framwork: springboot

Backend programming languases used : java, sql

# Angular folder structure

<img src="https://github.com/alexmihai33/E-Store/assets/127803655/4fe2e4e6-d8e4-40cf-9ec7-ff47317e3d49" width="400"/>

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

-In the common folder there's classes created for product, category and cart.

-In the components folder there are the different angular components I used.

-In services there is the communication with the backend.

-Then we have the app html,css,ts, routing and module.

-Assets is where I have pictures.

-The index.html is where the app-root is.

-The styles.css is the global css file.

# Springboot folder structure

<img src="https://github.com/alexmihai33/E-Store/assets/127803655/e8fc805c-dab5-4d2c-b970-cd46da08a32e" alt="Description of the image" width="400"/>

-In the DataRestConfig I disable post,put and delete and expose entity ids.

-In controller there's the controller for Product and the controller for ProductCategory (where there's requests)

-In dao there's the repositories for the entities mentioned above. (used for data access)

-In entity there's the classes created for Product and ProductCategory.

-In the resources, the application properties sets different properties used to connect to the database.


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
         
## Application Walkthrough


![image](https://github.com/alexmihai33/E-Store/assets/127803655/0d46709a-0728-42c5-8107-ce6738bcc4c7)


-This is where the user opens the app. 

-There's a list of products that defaults to the category books. 

-In the left there is a product category menu, where the user can select a different category of products.

-In the example down below, the user selects mugs:



![image](https://github.com/alexmihai33/E-Store/assets/127803655/9115f7b6-6947-4a5e-b0ad-786bbfde05df)


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------


-In the upper part of the page there's a search bar alongside a button.

-The user can insert a keyword in order to list specific products.

-In the example down below, the user enters Aspire:



![image](https://github.com/alexmihai33/E-Store/assets/127803655/77ba4c38-c2a1-4ca8-bacb-0bd8b25418f3)


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------


-In the bottom of the page, there's the pagination.

-The user can navigate through the pages. 

-In the database there's a total of 100 items (25 each category).

-The user can select the ammount of items he wants to view on a page.

-Down below you can see the pagination:



![image](https://github.com/alexmihai33/E-Store/assets/127803655/9efe93cc-000d-48a9-ae77-36c09f55104a)


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------


-The user can press the Add to Cart button on different items.

-On the upper right corner he can see his cart, with the total ammount of money and quantity he has added to it

-Down below you can see the cart:



![image](https://github.com/alexmihai33/E-Store/assets/127803655/b94fe499-a804-4da3-a5ae-72aeb52f8ea5)



-------------------------------------------------------------------------------------------------------------------------------------------------------------------------


-The user can click on the cart and he will be welcomed with the cart-details.

-He can see the different products he added, and the quantity in which he added them.

-He can edit the quantity or remove the product, and see the quantity and price total.

-Down below you can see the cart details:



![image](https://github.com/alexmihai33/E-Store/assets/127803655/cd499fe5-8117-478b-b2d8-22099d2dc2f9)


# Future Improvements

-I will make a checkout form.

-I will have registration/login, and there'll be 2 types of accounts: admin and user.

-I will add orders to database.

-I will add order history.

-I will go into the security of the app.










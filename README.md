# E-Store

# How To Run It

!!! In order to run this project locally follow theese steps:
1. Download the project locally in your computer
2. Create a database using the scripts from the queries.sql file
3. Run npm init in your terminal
4. Run npm install - g @angular/cli in your terminal
5. Run ng build in your terminal
6. Run the project with ng serve

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

<img src="https://github.com/alexmihai33/E-Store/assets/127803655/e6a3b495-0eb2-4a46-aa6f-271b5d28eefe"  width="400"/>

In the common folder there's classes created for product, category and cart.
In the components folder there are the different angular components I used.
In services there is the communication with the backend.
Then we have the app html,css,ts, routing and module.
Assets is where I have pictures.
The index.html is where the app-root is.
The styles.css is the global css file.

# Springboot folder structure

<img src="https://github.com/alexmihai33/E-Store/assets/127803655/f31068cb-85f6-4f75-a9f4-87d5cb6efae7" alt="Description of the image" width="400"/>


In the DataRestConfig I disable post,put and delete and expose entity ids.
In controller there's the controller for Product and the controller for ProductCategory (where there's requests)
In dao there's the repositories for the entities mentioned above. (used for data access)
In entity there's the classes created for Product and ProductCategory.
In the resources, the application properties sets different properties used to connect to the database.

         
## Application Walkthrough

![image](https://github.com/alexmihai33/E-Store/assets/127803655/e59ad379-843c-41bf-bf79-fc4c0e7b743a)

This is where the user opens the app. 
There's a list of products that defaults to the category books. 
In the left there is a product category menu, where the user can select a different category of products.
In the example down below, the user selects mugs:

![image](https://github.com/alexmihai33/E-Store/assets/127803655/b8e98db1-4d58-4bb8-b175-437d3c2e0557)

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

In the upper part of the page there's a search bar alongside a button.
The user can insert a keyword in order to list specific products.
In the example down below, the user enters Aspire:

![image](https://github.com/alexmihai33/E-Store/assets/127803655/4e0b9a80-3b64-4248-8b5a-a7620d0db414)

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

In the bottom of the page, there's the pagination.
The user can navigate through the pages. 
In the database there's a total of 100 items (25 each category).
The user can select the ammount of items he wants to view on a page.
Down below you can see the pagination:

![image](https://github.com/alexmihai33/E-Store/assets/127803655/8dd1789b-34c4-48db-8e41-dc29717e48e1)

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The user can press the Add to Cart button on different items.
On the upper right corner he can see his cart, with the total ammount of money and quantity he has added to it
Down below you can see the cart:

![image](https://github.com/alexmihai33/E-Store/assets/127803655/1feaf5f3-f4c0-4927-be0a-86524cd233d0)

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The user can click on the cart and he will be welcomed with the cart-details.
He can see the different products he added, and the quantity in which he added them.
He can edit the quantity or remove the product, and see the quantity and price total.
Down below you can see the cart details:

![image](https://github.com/alexmihai33/E-Store/assets/127803655/95accab7-38be-47e1-b6be-c9440c349cba)

# Future Improvements

I will make a checkout form.
I will have registration/login, and there'll be 2 types of accounts: admin and user.
I will add orders to database.
I will add order history.
I will go into the security of the app.










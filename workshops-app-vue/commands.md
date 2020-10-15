# Commands to create and work with Vue app

1. Install Vue CLI - helps create projects in Vue
npm i -g @vue/cli

2. Navigate to folder where you want to create a Vue app and use Vue CLI to create the project
vue create workshops-app-vue

Make sure to select the first option for preset 

3. Navigate inside the application folder
cd workshops-app-vue

4. Start the app
npm run serve

5. Add Bootstrap CSS library and Fontawesome
npm i bootstrap @fortawesome/fontawesome-free
__NOTE__: Please use Vue Bootstrap if you plan to use the JS components of Bootstrap

6. Add Vue router
npm i vue-router

7. Add axios
npm i axios

-------

Exercise
========
- Create components/WorkshopDetails.vue that is shown on route workshop-details (add route in router, and link in navbar)
- In supplied files you will find workshops-app-vue/components/WorkshopDetails.vue
- Load the details of this workshop in that page - http://workshops-server.herokuapp.com/workshops/1
- Make sure to display loading and error messages
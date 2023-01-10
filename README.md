# mongoose-flights
# Exercises

1. Use e-gen-replacement to create a `mongoose-flights` project. Be sure to install the node modules after you cd into the project.
2. Create a **`config/database.js`** module that connects to a database named `flights`. Be sure to import the module in **`server.js`**.
3. Create a `Flight` Model with the following properties:
    
    [Properties of the Flight Model  ](https://www.notion.so/d8d57b4b82ba421ba6f0f3913cbe05b7)
    4. Implement the following User Stories:
    - AAU, I want to view a list of all flights (index view) that displays each flight’s airline, airport, flight no., and departure date/time.
    - AAU, I want to create a flight by entering the information on a `new` view that has a form. When I submit the form I should be taken back to all the flights.
    - AAU, I want to be able to access each view via a navigation bar at the top of the page with links to:
        - `ALL FLIGHTS`, and
        - `ADD FLIGHT`
    - AAU, I want to be able to delete a flight from the list on the `index` view.
    - AAU, I want to be able to click on a flight to view its details on a `show` view.
    - AAU, I want to be able to click a button WITHIN the `show` view that brings me to an `edit` view where I can adjust a flight’s details.  When I save these changes, they should persist to the database and redirect me back to the flight’s `show` view.
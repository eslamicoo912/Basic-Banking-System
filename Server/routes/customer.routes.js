import { Router } from "express";
import * as controllers from "../controllers/customer.controller.js";

const routes = Router();

// route for creating a new customer
routes.post("/", controllers.createCustomer);

// route for creating new transfer
routes.post("/transfer", controllers.transfer);

// route for getting all jappened transactions
routes.get("/transfers", controllers.getTransfers);

// route for getting all customers
routes.get("/", controllers.viewAllCustomers);

// route for getting a spicific customer
routes.get("/:email", controllers.viewOneCustomer);

export default routes;

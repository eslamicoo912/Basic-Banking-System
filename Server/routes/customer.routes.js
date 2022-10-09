import { Router } from "express";
import * as controllers from "../controllers/customer.controller.js";

const routes = Router();

routes.post("/", controllers.createCustomer);
routes.post("/transfer", controllers.transfer);
routes.get("/transfers", controllers.getTransfers);
routes.get("/", controllers.viewAllCustomers);
routes.get("/:email", controllers.viewOneCustomer);

export default routes;

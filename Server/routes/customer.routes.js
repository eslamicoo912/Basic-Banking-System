import { Router } from "express";
import * as controllers from "../controllers/customer.controller.js";

const routes = Router();

routes.post("/", controllers.createCustomer);
routes.get("/", controllers.viewAllCustomers);
routes.get("/:name", controllers.viewOneCustomer);

export default routes;

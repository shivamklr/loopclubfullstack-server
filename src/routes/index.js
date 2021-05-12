const { Router } = require("express");
const usersRoute = require("./users");
const userRoute = require("./user");
const router = Router();

const defaultRoutes = [
    {
        path: "/users",
        route: usersRoute,
    },
    {
        path: "/user",
        route: userRoute,
    },
];
defaultRoutes.forEach((route) => router.use(route.path, route.route));
module.exports = router;

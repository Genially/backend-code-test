import errorHandler from "errorhandler";
import app from "./app";
import mongoose from "./mongoose";
import config from "../config/vars";

/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());

/**
 * Open mongoose connection
 */
 mongoose(config.MONGO_URI);

/**
 * Start Express server.
 */
const server = app.listen(app.get("port"), () => {
  console.log(
    "  App is running at http://localhost:%d in %s mode",
    app.get("port"),
    app.get("env")
  );
  console.log("  Press CTRL-C to stop\n");
});

export default server;

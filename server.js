const express = require("express");
const path = require("path");
const { getReportJSConfig} = require('./config');
const _activeReportServer = async () => {
 const { activeReportPort } = getReportJSConfig()
 const app = express();
 app.use(express.static(path.join(__dirname, "resources")));
 app.use("/scripts", express.static(path.join(__dirname, "../", "@grapecity" , "activereports" ,"dist")));
 return app.listen(activeReportPort);
}

module.exports = {
 _activeReportServer
};

let config = {
 activeReportPort: 5000
};

function setReportJSConfig(newConfig) {
 config = { ...config, ...newConfig };
}
function getReportJSConfig() {
 return config;
}

module.exports = {
 setReportJSConfig,
 getReportJSConfig,
};

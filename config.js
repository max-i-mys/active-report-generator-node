let config = {
 activeReportPort: 5000,
 licenseKey: ''
};

function _setReportJSConfig(newConfig) {
 config = { ...config, ...newConfig };
}
function _getReportJSConfig() {
 return config;
}

module.exports = {
 _setReportJSConfig,
 _getReportJSConfig,
};

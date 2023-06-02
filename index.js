const { _setReportJSConfig } = require( './config')
const { _render } = require('./generateReport');

module.exports = {
 setGeneratorConfig: _setReportJSConfig,
 renderPdf: _render
}

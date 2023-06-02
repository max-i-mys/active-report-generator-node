const { _activeReportServer } = require('./server');
const chromium = require("playwright").chromium;
const { _getReportJSConfig } = require('./config');

const _render = async (template, subTemplate = null) => {
 const { activeReportPort, licenseKey } = _getReportJSConfig()
 const server = await _activeReportServer()
 let browser = null;
 try {
  browser = await chromium.launch({
   headless: true,
   args: ["--font-render-hinting=none"],
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(`http://localhost:${activeReportPort}/index.html`);
  const pdfString = await page.evaluate(
   ({template, subTemplate}) => {
    return new Promise(async (resolve, reject) => {
     GC.ActiveReports.Core.setLicenseKey(licenseKey)
     await GC.ActiveReports.Core.FontStore.registerFonts('fontsConfig.json');
     const report = new GC.ActiveReports.Core.PageReport();
     await report.load("template", {
       resourceLocator: {
        getResource: (resourceId) => {
         switch (resourceId) {
          case "template":
           return template;
          default:
           return subTemplate
         }
        }
       }
      }
     );
     const doc = await report.run();
     const result = await GC.ActiveReports.PdfExport.exportDocument(doc);
     const reader = new FileReader();
     reader.readAsBinaryString(result.data);
     reader.onload = () => resolve(reader.result);
     reader.onerror = () =>
      reject("Error occurred while reading binary string");
    })
   },
   {template, subTemplate}
  );
  return Buffer.from(String(pdfString), "binary")
 } catch (err) {
  console.log(err)
 } finally {
  server.close()
 }
}

module.exports = {
 _render
};

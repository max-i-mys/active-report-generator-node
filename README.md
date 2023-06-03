# active-report-generator-node
___
## Package for generating pdf reports using [ActiveReportJS](https://www.grapecity.com/activereportsjs) library in the node.js

### _Installation_

```bash
npm i active-report-generator-node
```

To pass the settings, you need to import the "setGeneratorConfig" function from the    
active-report-generator-node package
which takes the port number and license key as arguments.

The port number is the port on which chromium is running.

_Example:_

```js
setGeneratorConfig({ activeReportPort: 5000, licenseKey: "your license key" });
```

To generate a PDF report, you need to import the renderPdf function from the active-report-generator-node package   
and pass two arguments to it:

1. The template in JSON or RDLX-JSON format (required).
2. The subreport template in JSON or RDLX-JSON format, if a subreport is used (optional).

_Example:_  
Async function

```js
const pdfData = await renderPdf(template, subTemplate);
```

Promise

```js
renderPdf(template, subTemplate).then((pdfData) => {
	console.log(pdfData);
});
```

Please note that this approach requires a [single domain license](https://www.grapecity.com/activereportsjs/pricing)

The package uses [GrapeCity](https://www.grapecity.com/activereportsjs) products.

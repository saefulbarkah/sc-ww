
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.DescTextCsv=exports.DescTextCsvLoader=void 0;const CsvLoader_1=require("./CsvLoader"),descTextCsvFields=[(0,CsvLoader_1.createCsvField)({Name:"Id",CnName:"Id",Type:"Int",Filter:"1",Condition:"notEmpty && unique",RenderType:18}),(0,CsvLoader_1.createCsvField)({Name:"Text",CnName:"文本",Localization:"1"})];class DescTextCsvLoader extends CsvLoader_1.CsvLoader{constructor(){super("DescTextCsvLoader",descTextCsvFields)}}exports.DescTextCsvLoader=DescTextCsvLoader;class DescTextCsv extends CsvLoader_1.GlobalCsv{}exports.DescTextCsv=DescTextCsv;
//# sourceMappingURL=DescTextCsv.js.map
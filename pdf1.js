const hummus=require("hummus");
const path=require("path")
let pdfReader=hummus.createReader(path.join(__dirname,"r.pdf"));
let pages =pdfReader.getPagesCount();
for(var i=0;i<pages;i++){
    pdfWriter=hummus.createWriter('output ' + i+ '.pdf')
    pdfWriter.createPDFCopyingContext(pdfReader).appendPDFPageFromPDF(i);
    pdfWriter.end()

}
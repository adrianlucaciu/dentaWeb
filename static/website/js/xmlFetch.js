// var strXml = '<?xml version="1.0" encoding="UTF-8"?><news><newsItem id="1"><title>Title</title><body>text body</body></new><new id="2"><title>Title</title><body>text body</body></new></news>';
// var doc;
//
// var parser = new DOMParser();
// doc = parser.parseFromString(strXml, 'C:\\Proiecte\\dentaweb\\website\\templates\\news.xml');
//
// var x = doc.getElementById("id");
// for (let i = 0; i < x.length; i++){
//     alert(x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue);
//     alert(x[i].getElementsByTagName("body")[0].childNodes[0].nodeValue);
// }


var strXML = '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<news>\n' +
    '    <newsItem id="1">\n' +
    '        <title>Title</title>\n' +
    '        <body>text body</body>\n' +
    '    </newsItem>\n' +
    '\n' +
    '    <newsItem id="2">\n' +
    '        <title>Title</title>\n' +
    '        <body>text body</body>\n' +
    '    </newsItem>\n' +
    '</news>\n' +
    '\n'

var doc;
if(window.ActiveXObject)
{
    doc = new ActiveXObject('Microsoft.XMLDOM'); // For IE6, IE5
    doc.async = 'false';
    doc.loadXML(strXML);
}
else
{
    var parser = new DOMParser();
    doc = parser.parseFromString(strXML, 'text/html'); // For Firefox, Chrrome
}

var x = doc.getElementsByTagName("newsItem");
for (i = 0; i <x.length; i++)
{
    alert(x[i].getElementsByTagName("title")
        [0].childNodes[0].nodeValue)
    alert(x[i].getElementsByTagName("body")
    [0].getAttribute('body'));

}
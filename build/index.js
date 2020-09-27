"use strict";

var _express = _interopRequireDefault(require("express"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _HomeRoot = _interopRequireDefault(require("./roots/HomeRoot"));

var _styledComponents = require("styled-components");

var _fs = _interopRequireDefault(require("fs"));

var _compression = _interopRequireDefault(require("compression"));

var _cors = _interopRequireDefault(require("cors"));

var _path = _interopRequireDefault(require("path"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PORT = process.env.PORT || 3003;
var app = (0, _express["default"])();
app.use((0, _compression["default"])());
app.use((0, _cors["default"])());
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded());
var dataObj = {},
    homeBundle = "";

_fs["default"].readFile('./dist/js/home.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  homeBundle = data || "";
});

app.get('/', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, homeBundle, _HomeRoot["default"], "home"));
});
app.get('/images/:id', function (req, res) {
  res.set('Cache-Control', 'public, max-age=31557600');
  res.sendFile(_path["default"].join(__dirname, '../images/' + req.params.id));
});
app.listen(PORT, function () {
  console.log('Running on http://localhost:' + PORT);
}); // functions!!!!!!!!!!!!!

function getQueries(req, res) {
  var qOb = {};
  var queries = req && req._parsedUrl && req._parsedUrl.query && req._parsedUrl.query.split('&') ? req._parsedUrl.query.split('&') : [];

  if (queries.length) {
    queries.forEach(function (x) {
      var y = x.split('=');
      qOb[y[0]] = y[1];
    });
  }

  return qOb;
}

function fetcher(url) {
  return (0, _nodeFetch["default"])(url).then(function (response) {
    if (response.status !== 200) throw Error(response.statusText);
    return response.json();
  }).then(function (json) {
    return json;
  })["catch"](errHandle);
}

function returnHTML(data, bundle, Page, title) {
  var dataString = JSON.stringify(data);
  var sheet = new _styledComponents.ServerStyleSheet();
  var body = (0, _server.renderToString)(sheet.collectStyles( /*#__PURE__*/_react["default"].createElement(Page, {
    data: data
  })));
  var styles = sheet.getStyleTags();
  return "\n      <html lang=\"en\">\n        <head>\n          <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n          <title>".concat(title, "</title>\n          <meta name=\"Description\" content=\"").concat(title, "\">\n          <link rel=\"stylesheet\" href=\"https://use.typekit.net/mno0keq.css\">\n          <style>\n            body {\n              margin: 0;\n              font-family: diazo-mvb-ex-cond, sans-serif;\n              font-weight: 400;\n              font-style: normal;\n              overflow-x: hidden;\n              font-size: 14px;\n            }\n            th, h1 { font-weight: 700; font-size: 16px; }\n            p { font-weight: 100; font-size: 12px; }\n            @media (min-width: 700px){\n              body, th, h1, td { font-size: 30px; }\n              p { font-size: 18px; }\n            }\n            @media (min-device-width: 700px){\n              body, th, h1, td { font-size: 30px; }\n              p { font-size: 18px; }\n            }\n          </style>\n          ").concat(styles, "\n        </head>\n        <body>\n          <script>window.os = window.os || {};</script>\n          <script>window.__DATA__=").concat(dataString, "</script>\n          <div id=\"app\" role=\"main\">").concat(body, "</div>\n          <script>").concat(bundle, "</script>\n        </body>\n      </html>\n    ");
}

function errHandle(err) {
  console.log(err);
}
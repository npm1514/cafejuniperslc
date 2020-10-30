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

var _config = _interopRequireDefault(require("./config"));

var _nodemailer = _interopRequireDefault(require("nodemailer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Cryptr = require('cryptr');

var cryptr = new Cryptr(_config["default"].key);

var cron = require('node-cron');

var PORT = process.env.PORT || 3003;
var app = (0, _express["default"])();
app.use((0, _compression["default"])());
app.use((0, _cors["default"])());
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded());
cron.schedule('* * 1 * *', function () {
  (0, _nodeFetch["default"])('http://www.cafejuniperslc.com/').then(function (res) {
    return console.log("requested at " + new Date());
  });
});
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
app.post('/emailer', function (req, res) {
  var transporter = _nodemailer["default"].createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: cryptr.decrypt(_config["default"].email),
      pass: cryptr.decrypt(_config["default"].gmPass)
    }
  });

  transporter.sendMail({
    from: req.body.email,
    to: cryptr.decrypt(_config["default"].email),
    subject: 'Cafe Juniper: Online Message',
    html: "\n      <h3>Hi Cafe Juniper!</h3>\n      <h3>The following person has submitted a message.<h3/>\n      <h4>Name: ".concat(req.body.name, "</h4>\n      <h4>Email: ").concat(req.body.email, "</h4>\n      <h4>Message: ").concat(req.body.message, "</h4>\n    ")
  }, function (error, info) {
    if (error) res.send({
      error: error
    });else res.send({
      response: info
    });
  });
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
  return "\n      <html lang=\"en\">\n        <head>\n          <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n          <title>Cafe Juniper | Salt Lake City Premier Coffee Shop and Toast</title>\n          <meta name=\"Description\" content=\"Cafe Juniper | Salt Lake City Premier Coffee Shop and Toast\">\n          <link rel=\"stylesheet\" href=\"https://use.typekit.net/mno0keq.css\">\n          <script src=\"https://kit.fontawesome.com/7fa747235e.js\" crossorigin=\"anonymous\"></script>\n          <style>\n            body {\n              margin: 0;\n              font-family: diazo-mvb-ex-cond, sans-serif;\n              font-weight: 400; font-style: normal;\n              overflow-x: hidden; font-size: 14px;\n              width: 100%; max-width: 100%; height: auto;\n            }\n            th, h1, h2 { font-weight: 700; font-size: 16px; }\n            p { font-weight: 100; font-size: 12px; }\n            a { text-decoration: none;}\n            @media (min-width: 700px){\n              body, th, h1, h2, td { font-size: 30px; }\n              p { font-size: 18px; }\n            }\n          </style>\n          ".concat(styles, "\n        </head>\n        <body>\n          <script>window.os = window.os || {};</script>\n          <script>window.__DATA__=").concat(dataString, "</script>\n          <div id=\"app\" role=\"main\">").concat(body, "</div>\n          <script>").concat(bundle, "</script>\n          <script defer>\n            fetch('https://npm-data-storage.herokuapp.com/addData', {\n              method:\"POST\",\n              headers: { 'Content-Type': 'application/json' },\n              body: JSON.stringify({\n                type: \"pageload\",\n                date: new Date(),\n                url: window.origin,\n                device: window.navigator.appVersion,\n                referrer: document.referrer,\n                performance: window.performance.timing\n              })\n            })\n            .then((res) => res.text())\n            .then((data) => console.log(\"page load\"))\n            window.addEventListener('click', (e) => {\n              fetch('https://npm-data-storage.herokuapp.com/addData', {\n                method:\"POST\",\n                headers: { 'Content-Type': 'application/json' },\n                body: JSON.stringify({\n                  type: \"click\",\n                  date: new Date(),\n                  url: window.origin,\n                  device: window.navigator.appVersion,\n                  referrer: document.referrer,\n                  performance: window.performance.timing,\n                  clickthing: e.target.outerHTML\n                })\n              })\n              .then((res) => res.text())\n              .then((data) => console.log(\"click\"))\n            })\n          </script>\n        </body>\n      </html>\n    ");
}

function errHandle(err) {
  console.log(err);
}
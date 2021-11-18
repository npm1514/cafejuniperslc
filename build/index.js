"use strict";

var _express = _interopRequireDefault(require("express"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _fs = _interopRequireDefault(require("fs"));

var _cors = _interopRequireDefault(require("cors"));

var _path = _interopRequireDefault(require("path"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _nodeCron = _interopRequireDefault(require("node-cron"));

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _roots = require("./roots");

var _styledComponents = require("styled-components");

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Cryptr = require('cryptr');

var cryptr = new Cryptr(_config["default"].key);
var PORT = process.env.PORT || 3003;
var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded());

_nodeCron["default"].schedule('* * 1 * *', function () {
  (0, _nodeFetch["default"])('http://www.cafejuniperslc.com/').then(function (res) {
    return console.log("requested at " + new Date());
  });
});

var dataObj = {},
    homeBundle = "",
    jobsBundle = "",
    cateringBundle = "",
    fourohfourBundle = "",
    sitemapBundle = "",
    termsBundle = "";

_fs["default"].readFile('./dist/js/home.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  homeBundle = data || "";
});

_fs["default"].readFile('./dist/js/jobs.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  jobsBundle = data || "";
});

_fs["default"].readFile('./dist/js/catering.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  cateringBundle = data || "";
});

_fs["default"].readFile('./dist/js/terms.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  termsBundle = data || "";
});

_fs["default"].readFile('./dist/js/fourohfour.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  fourohfourBundle = data || "";
});

_fs["default"].readFile('./dist/js/sitemap.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  sitemapBundle = data || "";
});

app.get('/terms', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, termsBundle, _roots.TermsRoot, "terms and conditions"));
});
app.get('/jobs', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, jobsBundle, _roots.JobsRoot, "jobs"));
});
app.get('/jobs/:id', function (req, res) {
  var data = {
    id: req.params.id
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, jobsBundle, _roots.JobsRoot, "jobs"));
});
app.get('/catering', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, cateringBundle, _roots.CateringRoot, "catering"));
});
app.get('/subscriptions', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, cateringBundle, _roots.CateringRoot, "subscriptions"));
});
app.get('/sitemap', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, sitemapBundle, _roots.SitemapRoot, "sitemap"));
});
app.get('/images/:id', function (req, res) {
  res.set('Cache-Control', 'public, max-age=31557600');
  res.sendFile(_path["default"].join(__dirname, '../images/' + req.params.id));
});
app.get('/html/:id', function (req, res) {
  res.set('Cache-Control', 'public, max-age=31557600');
  res.sendFile(_path["default"].join(__dirname, '../html/' + req.params.id));
});
app.get('/css/:id', function (req, res) {
  res.set('Cache-Control', 'public, max-age=31557600');
  res.sendFile(_path["default"].join(__dirname, '../css/' + req.params.id));
});
app.get('/js/:id', function (req, res) {
  res.set('Cache-Control', 'public, max-age=31557600');
  res.sendFile(_path["default"].join(__dirname, '../js/' + req.params.id));
});
app.post('/subscriber', function (req, res) {
  var _req$body = req.body,
      email = _req$body.email,
      name = _req$body.name,
      message = _req$body.message,
      business = _req$body.business,
      address = _req$body.address,
      zip = _req$body.zip,
      phone = _req$body.phone;

  var transporter = _nodemailer["default"].createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: cryptr.decrypt(_config["default"].nodemailerEmail),
      pass: cryptr.decrypt(_config["default"].nodemailerPW)
    }
  });

  var products = req.body.products.map(function (a) {
    return "<div>".concat(a.product, " - ").concat(a.quantity, " - ").concat(a.frequency, "</div>");
  }).join('');
  transporter.sendMail({
    from: email,
    to: cryptr.decrypt(_config["default"].nodemailerEmail),
    subject: 'Cafe Juniper: Subscribe Message',
    html: "\n      <h3>Hi Cafe Juniper!</h3>\n      <h3>The following person has submitted a subscription request.<h3/>\n      <h4>Name: ".concat(name, "</h4>\n      <h4>Business: ").concat(business, "</h4>\n      <h4>Address: ").concat(address, "</h4>\n      <h4>Zip Code: ").concat(zip, "</h4>\n      <h4>Phone: ").concat(phone, "</h4>\n      <h4>Email: ").concat(email, "</h4>\n      <h4>Products: ").concat(products, "</h4>\n      <h4>Message: ").concat(message, "</h4>\n    ")
  }, function (error, info) {
    if (error) res.send({
      error: error
    });else res.send({
      response: info
    });
  });
});
app.post('/emailer', function (req, res) {
  var _req$body2 = req.body,
      email = _req$body2.email,
      name = _req$body2.name,
      message = _req$body2.message;

  var transporter = _nodemailer["default"].createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: cryptr.decrypt(_config["default"].nodemailerEmail),
      pass: cryptr.decrypt(_config["default"].nodemailerPW)
    }
  });

  transporter.sendMail({
    from: email,
    to: cryptr.decrypt(_config["default"].nodemailerEmail),
    subject: 'Cafe Juniper: Online Message',
    html: "\n      <h3>Hi Cafe Juniper!</h3>\n      <h3>The following person has submitted a message.<h3/>\n      <h4>Name: ".concat(name, "</h4>\n      <h4>Email: ").concat(email, "</h4>\n      <h4>Message: ").concat(message, "</h4>\n    ")
  }, function (error, info) {
    if (error) res.send({
      error: error
    });else res.send({
      response: info
    });
  });
});
app.get('/home', function (req, res) {
  var data = {
    path: "home"
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, homeBundle, _roots.HomeRoot, "home"));
});
app.get('/about', function (req, res) {
  var data = {
    path: "about"
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, homeBundle, _roots.HomeRoot, "about"));
});
app.get('/map', function (req, res) {
  var data = {
    path: "map"
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, homeBundle, _roots.HomeRoot, "map"));
});
app.get('/order', function (req, res) {
  var data = {
    path: "order"
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, homeBundle, _roots.HomeRoot, "order"));
});
app.get('/contact', function (req, res) {
  var data = {
    path: "contact"
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, homeBundle, _roots.HomeRoot, "contact"));
});
app.get('/', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, homeBundle, _roots.HomeRoot, "home"));
});
app.get('/health', function (req, res) {
  res.send("healthy");
});
app.get('/*', function (req, res) {
  var data = {};
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, fourohfourBundle, _roots.FourOhFourRoot, "error"));
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
  return "\n      <html lang=\"en\">\n        <head>\n          <link data-default-icon=\"/images/cj_icon.ico\" data-badged-icon=\"/images/cj_icon.ico\" rel=\"shortcut icon\" href=\"/images/cj_icon.ico\">\n          <meta name=\"google-site-verification\" content=\"hzAIEHsN0e84-jcUhXzS7ahusAox1Ha14-sfJyMoq2w\" />\n          <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n          <title>Cafe Juniper | Salt Lake City Premier Coffee Shop and Toast</title>\n          <meta name=\"Description\" content=\"Welcome to downtown Salt Lake's newest coffee shop destination! Offering coffee and espresso drinks, baked goods, and our very own artisanal toast selection prepared daily. Stop by today!\">\n          <link rel=\"stylesheet\" href=\"https://use.typekit.net/mno0keq.css\">\n          <script src=\"https://kit.fontawesome.com/7fa747235e.js\" crossorigin=\"anonymous\"></script>\n          <script data-ad-client=\"ca-pub-6867043285236947\" async src=\"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>\n          <style>\n            body {\n              margin: 0;\n              font-family: diazo-mvb-ex-cond, sans-serif;\n              font-weight: 400; font-style: normal;\n              overflow-x: hidden; font-size: 14px;\n              width: 100%; max-width: 100%; height: auto;\n            }\n            h1, h2 { font-weight: 700; font-size: 16px; }\n            th { font-weight: 700; font-size: 21px; }\n            td { font-size: 20px; }\n            p { font-weight: 100; font-size: 12px; }\n            a { text-decoration: none;}\n            i { font-size: 30px;}\n            @media (min-width: 700px){\n              body, th, h1, h2, td { font-size: 30px; }\n              p { font-size: 18px; }\n            }\n          </style>\n          ".concat(styles, "\n        </head>\n        <body>\n          <script>window.os = window.os || {};</script>\n          <script>window.__DATA__=").concat(dataString, "</script>\n          <div id=\"app\" role=\"main\">").concat(body, "</div>\n          <script>").concat(bundle, "</script>\n          <!-- Global site tag (gtag.js) - Google Analytics -->\n          <script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-182243768-1\">\n          </script>\n          <script>\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', 'UA-182243768-1');\n          </script>\n        </body>\n      </html>\n    ");
}

function errHandle(err) {
  console.log(err);
}
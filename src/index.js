import express from "express";
import fetch from "node-fetch";
import React from "react";
import { renderToString } from "react-dom/server";
import fs from 'fs';
import cors from 'cors';
import path from 'path'
import bodyParser from 'body-parser';
import cron from 'node-cron';
import nodemailer from 'nodemailer';

import { HomeRoot, CateringRoot, TermsRoot } from "./roots";
import { ServerStyleSheet } from 'styled-components';

import config from './config';

const Cryptr = require('cryptr');
const cryptr = new Cryptr(config.key);

var PORT = process.env.PORT || 3003;

const app = express();
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

cron.schedule('* * 1 * *', () => {
  fetch('http://www.cafejuniperslc.com/')
  .then(res => console.log("requested at " + new Date()));
});

var dataObj = {},
homeBundle = "",
cateringBundle = "",
termsBundle = "";

fs.readFile('./dist/js/home.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  homeBundle = data || "";
})
fs.readFile('./dist/js/catering.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  cateringBundle = data || "";
})
fs.readFile('./dist/js/terms.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  termsBundle = data || "";
})

app.get('/terms', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, termsBundle, TermsRoot, "terms and conditions"));
});

app.get('/catering', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, cateringBundle, CateringRoot, "catering"));
});

app.get('/subscriptions', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, cateringBundle, CateringRoot, "subscriptions"));
});

app.get('/images/:id', (req, res) => {
  res.set('Cache-Control', 'public, max-age=31557600');
  res.sendFile(path.join(__dirname, '../images/' + req.params.id));
});

app.post('/subscriber', (req, res) => {
  let { email, name, message, business, address, zip, phone } = req.body;
  var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: cryptr.decrypt(config.nodemailerEmail),
      pass: cryptr.decrypt(config.nodemailerPW)
    }
  });
  let products = req.body.products.map(a => {
    return `<div>${a.product} - ${a.quantity} - ${a.frequency}</div>`
  }).join('');

  transporter.sendMail({
    from: email,
    to: cryptr.decrypt(config.nodemailerEmail),
    subject: 'Cafe Juniper: Subscribe Message',
    html: `
      <h3>Hi Cafe Juniper!</h3>
      <h3>The following person has submitted a subscription request.<h3/>
      <h4>Name: ${name}</h4>
      <h4>Business: ${business}</h4>
      <h4>Address: ${address}</h4>
      <h4>Zip Code: ${zip}</h4>
      <h4>Phone: ${phone}</h4>
      <h4>Email: ${email}</h4>
      <h4>Products: ${products}</h4>
      <h4>Message: ${message}</h4>
    `
  }, (error, info) => {
    if (error) res.send({error: error});
    else res.send({response: info});
  });
})

app.post('/emailer', (req, res) => {
  let { email, name, message} = req.body;
  var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: cryptr.decrypt(config.nodemailerEmail),
      pass: cryptr.decrypt(config.nodemailerPW)
    }
  });

  transporter.sendMail({
    from: email,
    to: cryptr.decrypt(config.nodemailerEmail),
    subject: 'Cafe Juniper: Online Message',
    html: `
      <h3>Hi Cafe Juniper!</h3>
      <h3>The following person has submitted a message.<h3/>
      <h4>Name: ${name}</h4>
      <h4>Email: ${email}</h4>
      <h4>Message: ${message}</h4>
    `
  }, (error, info) => {
    if (error) res.send({error: error});
    else res.send({response: info});
  });
})

app.get('/:id', (req, res) => {
  let data = {
    path: req.params.id
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, homeBundle, HomeRoot, req.params.id));
});

app.get('/', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, homeBundle, HomeRoot, "home"));
});

app.listen( PORT, () => {
  console.log('Running on http://localhost:' + PORT)
});


// functions!!!!!!!!!!!!!

function getQueries(req, res){
  const qOb = {};
  const queries = req && req._parsedUrl && req._parsedUrl.query && req._parsedUrl.query.split('&') ? req._parsedUrl.query.split('&') : [];
  if(queries.length){
    queries.forEach((x) => {
        var y = x.split('=');
        qOb[y[0]] = y[1];
    });
  }
  return qOb;
}

function fetcher(url){
	return fetch(url)
    .then((response) => {
        if(response.status !== 200) throw Error(response.statusText);
        return response.json();
    }).then((json) => {
        return json;
    }).catch(errHandle)
}

function returnHTML(data, bundle, Page, title){
    const dataString = JSON.stringify(data);
    const sheet = new ServerStyleSheet();
    const body = renderToString(sheet.collectStyles(<Page data={data}/>));
    const styles = sheet.getStyleTags();

    return `
      <html lang="en">
        <head>
          <link data-default-icon="/images/cj_icon.ico" data-badged-icon="/images/cj_icon.ico" rel="shortcut icon" href="/images/cj_icon.ico">
          <meta name="google-site-verification" content="hzAIEHsN0e84-jcUhXzS7ahusAox1Ha14-sfJyMoq2w" />
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>Cafe Juniper | Salt Lake City Premier Coffee Shop and Toast</title>
          <meta name="Description" content="Welcome to downtown Salt Lake's newest coffee shop destination! Offering coffee and espresso drinks, baked goods, and our very own artisanal toast selection prepared daily. Stop by today!">
          <link rel="stylesheet" href="https://use.typekit.net/mno0keq.css">
          <script src="https://kit.fontawesome.com/7fa747235e.js" crossorigin="anonymous"></script>
          <style>
            body {
              margin: 0;
              font-family: diazo-mvb-ex-cond, sans-serif;
              font-weight: 400; font-style: normal;
              overflow-x: hidden; font-size: 14px;
              width: 100%; max-width: 100%; height: auto;
            }
            h1, h2 { font-weight: 700; font-size: 16px; }
            th { font-weight: 700; font-size: 14px; }
            td { font-size: 12px; }
            p { font-weight: 100; font-size: 12px; }
            a { text-decoration: none;}
            i { font-size: 30px;}
            @media (min-width: 700px){
              body, th, h1, h2, td { font-size: 30px; }
              p { font-size: 18px; }
            }
          </style>
          ${styles}
        </head>
        <body>
          <script>window.os = window.os || {};</script>
          <script>window.__DATA__=${dataString}</script>
          <div id="app" role="main">${body}</div>
          <script>${bundle}</script>
          <script defer>
            fetch('https://npm-data-storage.herokuapp.com/addData', {
              method:"POST",
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                type: "pageload",
                date: new Date(),
                url: window.origin,
                device: window.navigator.appVersion,
                referrer: document.referrer,
                performance: window.performance.timing
              })
            })
            .then((res) => res.text())
            .then((data) => console.log("page load"))
            window.addEventListener('click', (e) => {
              fetch('https://npm-data-storage.herokuapp.com/addData', {
                method:"POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  type: "click",
                  date: new Date(),
                  url: window.origin,
                  device: window.navigator.appVersion,
                  referrer: document.referrer,
                  performance: window.performance.timing,
                  clickThing: e.target.outerHTML
                })
              })
              .then((res) => res.text())
              .then((data) => console.log("click"))
            })
          </script>
          <!-- Global site tag (gtag.js) - Google Analytics -->
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-182243768-1">
          </script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-182243768-1');
          </script>
        </body>
      </html>
    `;
}

function errHandle(err){
    console.log(err);
}

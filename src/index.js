import express from "express";
import fetch from "node-fetch";
import React from "react";
import { renderToString } from "react-dom/server";

import HomeRoot from "./roots/HomeRoot";

import { ServerStyleSheet } from 'styled-components';

import fs from 'fs';
import compression from 'compression';
import cors from 'cors';
import path from 'path'
import bodyParser from 'body-parser';

var PORT = process.env.PORT || 3003;

const app = express();
app.use(compression());
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

var dataObj = {},
homeBundle = "";

fs.readFile('./dist/js/home.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  homeBundle = data || "";
})

app.get('/', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, homeBundle, HomeRoot, "home"));
});

app.get('/images/:id', (req, res) => {
  res.set('Cache-Control', 'public, max-age=31557600');
  res.sendFile(path.join(__dirname, '../images/' + req.params.id));
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
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>${title}</title>
          <meta name="Description" content="${title}">
          <link rel="stylesheet" href="https://use.typekit.net/mno0keq.css">
          <style>
            body {
              margin: 0;
              font-family: diazo-mvb-ex-cond, sans-serif;
              font-weight: 400;
              font-style: normal;
              overflow-x: hidden;
              font-size: 14px;
            }
            th, h1 { font-weight: 700; font-size: 16px; }
            p { font-weight: 100; font-size: 12px; }
            @media (min-width: 700px){
              body, th, h1, td { font-size: 30px; }
              p { font-size: 18px; }
            }
            @media (min-device-width: 700px){
              body, th, h1, td { font-size: 30px; }
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
        </body>
      </html>
    `;
}

function errHandle(err){
    console.log(err);
}

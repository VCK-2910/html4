const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const html = `
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Check_mail</title>
<style>
  /* Reset */
  * {
    margin: 0;
    padding: 0;
  }
  ul {
    list-style: none;
  }
  body {
    color: #231f20;
    font-family: Helvetica,sans-serif;
    font-size: 16px;
  }
  
  /* Layout */
  .invite {
    background-color: #f2f2f2;
    margin: 20px auto;
    padding: 30px 0 100px;
    text-align: center;
    width: 870px;
  }
  .invite .icon {
    border: 2px solid #5ac6d0;
    border-radius: 50%;
    display: inline-block;
    height: 56px;
    margin-bottom: 35px;
    line-height: 64px;
    text-align: center;
    width: 56px;
  }
  .invite .icon i {
    color: #5ac6d0;
    font-size: 24px;
  }
  .invite h2 {
    font-size: 40px;
    margin-bottom: 30px;
  }
  .invite .info {
    margin-bottom: 25px;
  }
  .invite form .email {
    margin-bottom: 16px;
  }
  .invite form input[type=email] {
    background-color: #fff;
    border: 1px solid #eee;
    border-radius: 4px;
    font-size: 17px;
    padding: 20px 10px;
    width: 360px;
  }
  .invite form button {
    background-color: #70cbce;
    border: 1px solid #70cbce;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    height: 60px;
    min-height: 60px;
    padding: 0 30px;
    transition: 0.3s all;
  }
  .invite form button:hover {
    background-color: #de4a1e;
    border: 1px solid #de4a1e;
  }
</style>
</head>
<body>
  <section class="invite">
    <p class="icon"><i class="far fa-envelope"></i></p>
    <h2>Get the invite</h2>
    <p class="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit varius malesuada nisi ut lobortis.</p>
    <form action="/" method="">
      <p class="email"><input type="email" value="" placeholder="Enter Email"></p>
      <p class="btn"><button type="submit">REQUEST INVITE</button></p>
    </form>
  </section>
</body>
</html>
`

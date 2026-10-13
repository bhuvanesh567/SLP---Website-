const http = require('http');
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 8000;
http.createServer((req, res) => {
  try {
    let p = path.join(process.cwd(), decodeURIComponent(req.url.split('?')[0] || '/'));
    if (p.endsWith(path.sep)) p = path.join(p, 'index.html');
    fs.readFile(p, (err, data) => {
      if (err) { res.statusCode = 404; res.end('Not found'); }
      else {
        const ext = path.extname(p).toLowerCase();
        const map = { '.html':'text/html', '.css':'text/css', '.js':'application/javascript', '.png':'image/png', '.jpg':'image/jpeg', '.jpeg':'image/jpeg', '.svg':'image/svg+xml', '.json':'application/json' };
        if (map[ext]) res.setHeader('Content-Type', map[ext]);
        res.end(data);
      }
    });
  } catch (e) { res.statusCode=500; res.end('Error'); }
}).listen(port, ()=> console.log('Serving', process.cwd(), 'on', port));

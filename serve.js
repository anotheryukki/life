const http=require('http'),fs=require('fs'),path=require('path');
const root='D:/life'; const types={'.html':'text/html','.mp4':'video/mp4','.jpg':'image/jpeg','.png':'image/png','.js':'text/javascript','.css':'text/css'};
http.createServer((req,res)=>{
  let p=decodeURIComponent(req.url.split('?')[0]); if(p==='/')p='/index.html';
  const f=path.join(root,p); fs.stat(f,(e,st)=>{ if(e||!st.isFile()){res.writeHead(404);return res.end('nf');}
    const range=req.headers.range; const type=types[path.extname(f)]||'application/octet-stream';
    if(range){const m=/bytes=(\d+)-(\d*)/.exec(range);const s=+m[1],en=m[2]?+m[2]:st.size-1;res.writeHead(206,{'Content-Type':type,'Content-Range':`bytes ${s}-${en}/${st.size}`,'Accept-Ranges':'bytes','Content-Length':en-s+1});fs.createReadStream(f,{start:s,end:en}).pipe(res);}
    else{res.writeHead(200,{'Content-Type':type,'Content-Length':st.size,'Accept-Ranges':'bytes'});fs.createReadStream(f).pipe(res);}
  });
}).listen(3001,()=>console.log("serving on 3001"));

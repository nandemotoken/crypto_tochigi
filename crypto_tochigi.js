const http = require('http');
const fs = require('fs');
const url = require('url');

const ichigo = fs.readFileSync('./ichigo.jpg');
const gyoza = fs.readFileSync('./gyoza.jpg');
const index = fs.readFileSync('./index.html' , 'utf8');
const readerjs = fs.readFileSync('./reader.js' , 'utf8');
const writerjs =  fs.readFileSync('./writer.js' , 'utf8');
const abijs = fs.readFileSync('./abi.js' , 'utf8');

var server = http.createServer(crypto_tochigi);
server.listen(80);
console.log('server start');


function crypto_tochigi(request , response){
	var url_parts = url.parse(request.url , true );
	switch(url_parts.pathname) {

		//取得ファイルがichigo.jpgの場合
	case '/ichigo.jpg':
		response.writeHead(200,{'Content-Type': 'image/jpeg'});
		response.write(ichigo);
		response.end();
	break;

		//取得ファイルがgyoza.jpgの場合
	case '/gyoza.jpg':
		response.writeHead(200,{'Content-Type': 'image/jpeg'});
		response.write(gyoza);
		response.end();
	break;

		//取得ファイルがreader.jsの場合
	case '/reader.js':
		response.writeHead(200,{'Content-Type': 'text/javascript'});
		response.write(readerjs);
		response.end();
	break;

		//取得ファイルがwriter.jsの場合
	case '/writer.js':
		response.writeHead(200,{'Content-Type': 'text/javascript'});
		response.write(writerjs);
		response.end();
	break;

		//取得ページがabi.jsの場合
	case '/abi.js':
		response.writeHead(200,{'Content-Type': 'text/javascript'});
		response.write(abijs);
		response.end();
	break;

		//メインページの描画処理
	case '/':
		response.writeHead(200,{'Content-Type': 'text/html'});
		response.write(index);
		response.end();
	break;

		//トランザクション送信用ページの描画処理
	case '/tx_sender':
		response.writeHead(200,{'Content-Type': 'text/html'});
		response.write('<!DOCTYPE html><html><head><meta charset="utf-8"><title>crypto tochigi</title><script src="https://cdn.jsdelivr.net/gh/ethereum/web3.js@1.0.0-beta.36/dist/web3.min.js"></script><script src="./abi.js"></script><script src="./writer.js"></script></head>');
		response.write("<body><h1>クリプトとちぎ</h1>");
		response.write("<p>トランザクションを送信します。ウォレットを操作してください。</p><p>その後、ウォレットからの完了処理が出るまでお待ちください。</p><p>処理が完了したら、元ページにお戻りください。</p></body>");
		//ユーザのブラウザ上のmetamaskからトランザクションを送るためのhtml文
		if ( url_parts.query.ichigo != undefined ){ response.write( "<script> tochiotome('" +  url_parts.query.ichigo + " ')</script>" );  }
		if ( url_parts.query.gyoza != undefined ){ response.write( "<script> gyoza('" +  url_parts.query.gyoza + " ')</script>" );  }
		response.end();
	break;


	default:
		response.writeHead(200,{'Content-Type': 'text/html'});
		response.write("404");
		response.end();
	break;
	}

}





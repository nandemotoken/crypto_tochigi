//環境設定
var Address = "0x9a149be6f00afb18978f3065a8a24e833a726f3e";

//metamaskの準備
web3js = new Web3(web3.currentProvider);	
//スマートコントラクト読み込み
mycontract = new web3js.eth.Contract(ABI , Address);

//1.00-beta.36と表示されるのが正しい
console.log( Web3.version );

//---------------------start---------------------------
window.onload = function(){
        renew_id_tochiotome();
        renew_id_gyoza();
}

//---------------------read--------------------------
//コントラクトのread処理は次の書式に統一します。
//定義
//function r_functionN( r_resultN ){ javascriptの処理内容...console.log(read_resultN)など }
//
//利用
//mycontract.methods.getnumber().call().then(r_functionN);
//...solidityの関数呼出の結果が、r_functionNで処理される。
//---------------------------------------------------

function r_function1( r_result1 ){ console.log(r_result1); }
mycontract.methods.get3().call().then(r_function1);
mycontract.methods.read_tochiotome().call().then(r_function1);


function r_function2( r_result2 ){  document.querySelector('#tochiotome').textContent = 'とちおとめ：' + r_result2;   }
function renew_id_tochiotome(){ mycontract.methods.read_tochiotome().call().then(r_function2);  }


function r_function3( r_result3 ){  document.querySelector('#gyoza').textContent = '餃子：' + r_result3;   }
function renew_id_gyoza(){ mycontract.methods.read_gyoza().call().then(r_function3);  }



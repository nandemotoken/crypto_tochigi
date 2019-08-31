//環境設定
var Address = "0x9a149be6f00afb18978f3065a8a24e833a726f3e";

//metamaskの準備
web3js = new Web3(web3.currentProvider);	
//スマートコントラクト読み込み
mycontract = new web3js.eth.Contract(ABI , Address);

//1.00-beta.36と表示されるのが正しい
console.log( Web3.version );


//---------------------write-------------------------
//コントラクトのwrite処理は次の書式に統一します。
//定義
//function w_functionN( hidari , migi ){ mycontract.methods.setnumber(setnum).send({from: migi[0] });}
//
//利用
//web3js.eth.getAccounts( w_functionN );
//...metamaskの準備が出来たらw_functionNを実行する
//--------------------------------------------------

//書き込みテスト用関数↓
function w_function1( hidari , migi ){ mycontract.methods.write_tochiotome("this is simple test").send({from: migi[0] });}
function simple_test(){ web3js.eth.getAccounts( w_function1 ); }

//とちおとめへの書き込み
var tochiotome_mes;
function w_function2( hidari , migi ){ mycontract.methods.write_tochiotome( tochiotome_mes ).send({from: migi[0] });}
function tochiotome( message ){
	tochiotome_mes = message;
        web3js.eth.getAccounts( w_function2 );
}
//テスト用のコード↓
//tochiotome("function test");


//餃子への書き込み
var gyoza_mes;
function w_function3( hidari , migi ){ mycontract.methods.write_gyoza( gyoza_mes ).send({from: migi[0] });}
function gyoza( message ){
        gyoza_mes = message;
        web3js.eth.getAccounts( w_function3 );
}
//テスト用のコード↓
//gyoza("function test2");



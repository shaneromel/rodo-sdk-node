// var socket = require('socket.io-client')('http://localhost:4200');

var io=require("socket.io-client");

function RodoClass(merchantId, secretKey){
    this.merchantId=merchantId;
    this.socket=io("http://13.233.145.213:4200");

    this.socket.on("connect", ()=>{
        console.log("connected");

        this.socket.emit("authentication", {merchant_id:merchantId, secret_key:secretKey});
        this.socket.on('authenticated', function() {
            console.log("successfully authenticated")
        });

    })

}

RodoClass.prototype.nfc=function(callback){
    this.socket.on(`nfc/${this.merchantId}`, data=>{
        callback(data);
    })
}

RodoClass.prototype.location=function(imei, callback){
    this.socket.on(`location/${imei}/${this.merchantId}`, data=>{
        callback(data);
    })
}

RodoClass.prototype.locations=function(callback){
    this.socket.on(`locations/${this.merchantId}`, data=>{
        callback(data);
    })
}

RodoClass.prototype.statuses=function(callback){
    this.socket.on(`statuses/${this.merchantId}`, data=>{
        callback(data);
    });
}

RodoClass.prototype.status=function(imei, callback){
    this.socket.on(`status/${imei}/${this.merchantId}`, data=>{
        callback(data);
    });
}

RodoClass.prototype.individualStatus=function(callback){
    this.socket.on(`individual-status/${this.merchantId}`, data=>{
        callback(data);
    })
}

module.exports=RodoClass;
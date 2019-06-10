var io=require("socket.io-client");

function RodoClass(merchantId, secretKey){
    this.merchantId=merchantId;
    this.socket=io("https://merchantsocket.rodoindia.com");

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

RodoClass.prototype.batteryStatuses=function(callback){
    this.socket.on(`battery_status/${this.merchantId}`, data=>{
        callback(data);
    })
}

RodoClass.prototype.removeBatteryStatusesListener=function(){
    this.socket.removeListener(`battery_status/${this.merchantId}`);
}

RodoClass.prototype.removeLocationListener=function(imei){
    this.socket.removeListener(`location/${imei}/${this.merchantId}`);
}

RodoClass.prototype.removeLocationsListener=function(){
    this.socket.removeListener(`locations/${this.merchantId}`);
}

RodoClass.prototype.removeStatusListener=function(imei){
    this.socket.removeListener(`status/${imei}/${this.merchantId}`);
}

RodoClass.prototype.removeStatusesListener=function(){
    this.socket.removeListener(`statuses/${this.merchantId}`);
}

RodoClass.prototype.removeIndividualStatusListener=function(){
    this.socket.removeListener(`individual-status/${this.merchantId}`);
}

RodoClass.prototype.removeNfcListener=function(){
    this.socket.removeListener(`nfc/${this.merchantId}`);
}

module.exports=RodoClass;
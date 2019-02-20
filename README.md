# RODO merchant SDK
Rodo SDK is a client library for the MERCHANTS USING RODO’S LOCK SERVICES TO KEEP A TRACK OF THEIR LOCKS. THIS LIBRARY IS WRITTEN IN NODE JS.

## Installation
```console
npm install rodo-sdk-node
```
## Example

```javascript
var Rodo=require("rodo-sdk-node");
var rodo=new Rodo("<merchant_id>");

rodo.location("<imei>", data=>{
    console.log(data);
})
```

## API

* [rodo.location()](#rodolocationimei-callback)
* [rodo.locations()](#rodolocationscallback)
* [rodo.nfc()](#rodonfccallback)
* [rodo.status()](#rodostatusimei-callback)
* [rodo.statuses()](#rodostatusescallback)
* [rodo.individualStatus()](#rodoindividualstatuscallback)

### rodo.location(imei, [callback])

Fetches the realtime location of the lock with a particular IMEI number.

* __imei__ is the IMEI number of the lock you want to track.
* __callback - function(data)__ gives you the location on a realtime basis.

### rodo.locations([callback])

Fetches the realtime location of all locks under your merchant ID.

* __callback - function(data)__ fires an array of realtime locations of all locks belonging to the particular merchant.

### rodo.nfc([callback])

* __callback - function(data)__ fires whenever a lock is intended to be unlocked using an NFC card.
`   
### rodo.status(imei, [callback])

Listens for changes in a particular lock's status(locked/unlocked);

* __imei__ is the IMEI number of the lock.
* __callback - function(data)__ fires when the particular lock gets locked or unlocked. 

### rodo.statuses([callback])

Listens for changes in all lock statuses and returns status of all locks.(locked/unlocked);

* __callback - function(data)__ fires whenenver a lock gets locked or unlocked.

### rodo.individualStatus([callback])

Listens for changes in all lock statuses and returns the status of the lock which was affected individually.(locked/unlocked);

* __callback - function(data)__ fires whenenver a lock gets locked or unlocked.
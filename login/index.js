var app = require('http').createServer()
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(8010,function(){
    console.log('port is listen in the 8010')
});

io.on('connection', function (socket) {
    console.log('已连接')
    socket.on('message',function(data){
       console.log(data)
    })
    socket.on('sendLogin', function (data) {
        console.log('收到客户端消息:' + data)
        io.emit('login'+data,{login:'ok'});
    });   
});
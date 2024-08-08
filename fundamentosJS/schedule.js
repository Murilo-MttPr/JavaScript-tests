//É uma funcao de temporizador ( segundo, minuto, hora, dia,...)
//Instalar node-shcedule

const schedule = require('node-schedule');

//Os parametros sao padrao 'crom', nao sei oque é e o professor nao explicou
const tarefa1 = schedule.scheduleJob('*/5 * * * * *', function () {
    console.log('Executando tarefa 1', new Date().getSeconds()); //Cada vez que der o tempo que esta ali nos parametros, executará a funcao que coloquei
});


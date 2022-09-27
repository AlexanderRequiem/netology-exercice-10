class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(alarmTime, alarmAction, alarmId) {
        if (isNaN(alarmId)) {
            throw new Error('error text');
        }

        if (this.alarmCollection.find(item => item.id === alarmId) !== undefined) {
            console.error();
            return;
        }
        this.alarmCollection.push({
            id : alarmId,
            time : alarmTime,
            callback : alarmAction
        });
    }

    removeClock(alarmId) {
        const index = this.alarmCollection.findIndex(item => item.id === alarmId);
        if (index === -1) {
            return false;
        } else {
            this.alarmCollection.splice(index, 1);
            return true;
        }
    }

    getCurrentFormattedTime() {
        const currentDate = new Date();
        const hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;
        const minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`;

        return `${hours}:${minutes}`;
    }

    start() {
        if (this.timerId === null) {

            let handler = function checkClock(arrayOfAlarms, fnGetCurrentTime){
                return function () {
                    const timesUp = arrayOfAlarms.filter(item => item.time === fnGetCurrentTime());
                    timesUp.forEach(item => item.callback());
                };
            }

            let tmp = handler(this.alarmCollection, this.getCurrentFormattedTime);
             this.timerId = setInterval(tmp , 1000);
            //this.timerId = setInterval(() => alert('tick'), 60000);
        }
    }

    stop() {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(item => console.log(`id:${item.id} time: ${item.time}` ));
    }

    clearAlarms() {
        //TODO: Тормознуть активные алармы
        this.stop();
        
        //DONE: Зачистить массив
        this.alarmCollection.splice(0, this.alarmCollection.length);
    }    
}

//Код для проверки
function testCase() {
    const theAlarmClock = new AlarmClock();

    let alarmTime1 = new Date();
    
    let alarmTime2 = new Date();
    alarmTime2.setTime(alarmTime2.getTime()+60000);

    let alarmTime3 = new Date();
    alarmTime3.setTime(alarmTime3.getTime()+120000);
    
    let countAlarm1 = 0;
    theAlarmClock.addClock(getFormattedTime(alarmTime1), () => { 
        console.log('Звонок №1'); 
    }, 1);

    theAlarmClock.addClock(getFormattedTime(alarmTime2), () => {
        console.log('Звонок №2'); 
        theAlarmClock.removeClock(2);
    }, 2);

    theAlarmClock.addClock(getFormattedTime(alarmTime3), () => {
        console.log('Звонок №3'); 
        theAlarmClock.stop(); 
        theAlarmClock.clearAlarms();
    }, 3);

    theAlarmClock.printAlarms();
    theAlarmClock.start();
}

function getFormattedTime(time) {
    const hours = time.getHours() < 10 ? `0${time.getHours()}` : `${time.getHours()}`;
    const minutes = time.getMinutes() < 10 ? `0${time.getMinutes()}` : `${time.getMinutes()}`;
    return `${hours}:${minutes}`;
}



// * Добавьте ещё один звонок со временем +2 минут от текущего времени и колбеком: вывода текста на консоль, 
//   а так же остановки всех звонков, очистки всех звонков и выводом всех звонков. Так, чтобы после запуска функция 
//   вывода *выполнилась один раз, потом остановился интервал, все звонки очистились, и ничего не вывелось*.

testCase();
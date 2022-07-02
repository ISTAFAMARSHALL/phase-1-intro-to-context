// Your code here
function createEmployeeRecord(array) {

    const newEmployee = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: [],
    };

    return newEmployee;

};

function createEmployeeRecords(array) {

    return array.map((row) => createEmployeeRecord(row))

    // const employeerecords = [];

    // for (const items of array) {

    //     const newEmployeeRecord = createEmployeeRecord(items);

    //     employeerecords.push(newEmployeeRecord);

    // };

    // return employeerecords;



};

function createTimeInEvent(employeeRecord, dateStamp) {

    let [date, hour] = dateStamp.split(" ")
    
    // const indate = dateStamp.split(" ")[0];

    const timeIn = {
        type: "TimeIn",
        hour: parseInt(hour),
        date,
    }

    employeeRecord.timeInEvents.push(timeIn);
    // employeeRecord.timeInEvents["type"] = "TimeIn";
    // employeeRecord.timeInEvents["hour"] = `${dateStamp.split(" ")[1]}`;
    // employeeRecord.timeInEvents["date"] = `${dateStamp.split(" ")[0]}`;


    // console.log(employeeRecord.timeInEvents);
    // console.log(dateStamp);


    return employeeRecord;

}

function createTimeOutEvent(employeeRecord, dateStamp) {

    // const outhour = dateStamp.split(" ")[1];
    // const outdate = dateStamp.split(" ")[0];

    // const obj = {
    //     type: "",
    //     hour: "",
    //     date: "",
    // }

    // employeeRecord.timeOutEvents.push(obj);

    //     // console.log(employeeRecord.timeOutEvents[0])
    //   const t = employeeRecord.timeOutEvents[0];
    //     t.type = `${'TimeOut'}`
    //     t.hour = parseInt(dateStamp.split(" ")[1]),
    //     t.date = dateStamp.split(" ")[0]
        
    //     // console.log(employeeRecord)


    const timeOut = {
        type: "TimeOut",
        hour: parseInt(dateStamp.split(" ")[1]),
        date: dateStamp.split(" ")[0],
    }

    employeeRecord.timeOutEvents.push(timeOut);

    return employeeRecord;

}


// let bpRecord = createEmployeeRecord(["Byron", "Poodle", "Mascot", 3])
// createTimeOutEvent(bpRecord, "2014-02-28 1400")


function hoursWorkedOnDate(obj,date) {

    const startobj = obj.timeInEvents[0]
    const endobj = obj.timeOutEvents[0]
    const starttime = startobj.hour
    const startdate = startobj.date
    const stoptime = endobj.hour
    const stopdate = endobj.date

    // if (date === startdate && stopdate) {

        // console.log(startobj.hour)
        // console.log(endobj.hour)

        let hours = (startobj.hour - endobj.hour) / -100

        return hours
    // }

// creat a var for time in event and uses find on time in evetn 

    // item.date need to match the date that is being passed in 
    // need to do the same with the out event 
    


}

// cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 1000])
// createTimeInEvent(cRecord, "0044-03-15 0900")
// createTimeOutEvent(cRecord, "0044-03-15 1100")
// hoursWorkedOnDate(cRecord, "0044-03-15")

function wagesEarnedOnDate(obj,date){

    const payobj = obj.payPerHour
    // const startobj = obj.timeInEvents[0]
    // const endobj = obj.timeOutEvents[0]
    // const startdate = startobj.date
    // const stopdate = endobj.date

    // if (date === startdate && stopdate) {

        const earnings = (hoursWorkedOnDate(obj,date) * payobj)
   
        console.log(parseFloat(earnings.toString()))

        return parseFloat(earnings.toString())

        
    // }

}


// let allWagesFor = function(employee){
//     let eligibleDates = employee.timeInEvents.map(function(e){
//         return e.date
//     })

//     let payable = eligibleDates.reduce(function(memo, d){
//         return memo + wagesEarnedOnDate(employee, d)
//     }, 0)

//     return payable
// }


function allWagesFor (obj) {

    const startobj = obj.timeOutEvents
    let pay 
    // let startobj = obj.timeInEvents.map((item) => item.date) 
    // console.log(startobj)
    // // let pay = startobj.reduce((previousValue, date) => previousValue + wagesEarnedOnDate(obj,date),0);

    // // console.log(pay)

    for (const items of startobj) {

        pay =+ (wagesEarnedOnDate(obj, items.date))

        console.log(items.date)

        console.log(startobj)

        console.log(pay)

        
    }
    console.log(pay)

}


// cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 27])
// // // Earns 324
// createTimeInEvent(cRecord, "0044-03-14 0900")
// createTimeOutEvent(cRecord, "0044-03-14 2100")
// // // Earns 54
// createTimeInEvent(cRecord, "0044-03-15 0900")
// createTimeOutEvent(cRecord, "0044-03-15 1100")
// // // 324 + 54
// allWagesFor(cRecord)


// wagesEarnedOnDate(cRecord,"0044-03-15 0900")


function calculatePayroll(array) {

}
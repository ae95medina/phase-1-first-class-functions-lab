const returnFirstTwoDrivers = (function(drivers){
   return drivers.slice(0, 2)
    });

const returnLastTwoDrivers = (function(drivers){
    return drivers.slice(2, 4)
});

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(i){
    return function (number){
       return i * number
    }}

    const fareDoubler = createFareMultiplier(2)

    const fareTripler = createFareMultiplier(3)

    function selectDifferentDrivers(drivers, func){
        return func(drivers)
    }
   
displayDate = $('#currentDay')
saveBtn = $('.saveBtn')
currentHour = Number(moment().format('HH'))

$(document).ready(function () {
    var currentDay = moment().format('dddd, MMMM Do YYYY')
    displayDate.html(currentDay);

    var useLocalStorage = function () {
        $('input[name="hour-9"]').val(localStorage.getItem('9'));
        $('input[name="hour-10"]').val(localStorage.getItem('10'));
        $('input[name="hour-11"]').val(localStorage.getItem('11'));
        $('input[name="hour-12"]').val(localStorage.getItem('12'));
        $('input[name="hour-13"]').val(localStorage.getItem('13'));
        $('input[name="hour-14"]').val(localStorage.getItem('14'));
        $('input[name="hour-15"]').val(localStorage.getItem('15'));
        $('input[name="hour-16"]').val(localStorage.getItem('16'));
        $('input[name="hour-17"]').val(localStorage.getItem('17'));
    }

    useLocalStorage();
    
    $('.row').each(function(){
        var hour = Number($(this).children()[0].getAttribute('id'))
        var time = $(this).children()[1]

        if (currentHour === hour) {
            $(time).addClass('present')
        } else if (currentHour > hour) {
            $(time).addClass('past')
        } else if (currentHour < hour) {
            $(time).addClass('future')
        }    

    })

    saveBtn.on('click', function (event) {
        userInput = ($(this).siblings('input').val())
        event.preventDefault();
        var liveTime = $(this).siblings('class').attr('id')
        localStorage.setItem(liveTime, userInput)
    })

})
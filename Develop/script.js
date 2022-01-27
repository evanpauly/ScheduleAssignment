displayDate = $('#currentDay')
saveBtn = $('.saveBtn')
currentHour = Number(moment().format('LT'))

$(document).ready(function () {
    var currentDay = moment().format('dddd, MMMM Do YYYY')
    displayDate.html(currentDay);

    var localStorage = function () {

    }

    localStorage();
    
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

})
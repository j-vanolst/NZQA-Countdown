function Countdown(hours, minutes, seconds) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    Countdown.prototype.tick = function() {
        x = setInterval(function() {
            $time_in_seconds = 3600 * hours + 60 * minutes + seconds;
            if (String(hours).length == 1) {
                $("#hours_label").text("0".concat(hours));
            }
            else {
                $("#hours_label").text(hours);
            }
            if (String(minutes).length == 1) {
                $("#minutes_label").text("0".concat(minutes));
            }
            else {
                $("#minutes_label").text(minutes);
            }
            if (seconds < 10) {
                $("#seconds_label").text("0".concat(seconds));
            }
            else {
                $("#seconds_label").text(seconds);
            }
            if ($time_in_seconds == 0) {
                clearInterval(x);
            }
            else {
                if (seconds == 0) {
                    if (minutes == 0) {
                        hours = hours - 1;
                        minutes = 59;
                        seconds = 59;
                    }
                    else {
                        minutes = minutes - 1;
                        seconds = 59;
                    }
                }
                else {
                    seconds = seconds - 1;
                }
            }
        }, 1000)
    }
}
$(document).ready(function() {
    $("#set").click(function() {
        $hours = $("#hours_set").val();
        $minutes = $("#minutes_set").val();
        $seconds = $("#seconds_set").val();
        if ($hours == "") {
            $hours = 0;
        }
        if ($minutes == "") {
            $minutes = 0;
        }
        if ($seconds == "") {
            $seconds = 0;
        }
        if (String($hours).length == 1) {
            $("#hours_label").text("0".concat($hours));
        }
        else {
            $("#hours_label").text($hours);
        }
        if (String($minutes).length == 1) {
            $("#minutes_label").text("0".concat($minutes));
        }
        else {
            $("#minutes_label").text($minutes);
        }
        if (String($seconds.length == 1)) {
            $("#seconds_label").text("0".concat($seconds));
        }
        else {
            $("#seconds_label").text($seconds);
        }
        $countdown = new Countdown($hours, $minutes, $seconds);
        $("#set_countdown").addClass("hidden");
        $("#countdown").removeClass("hidden");
    });
    $("#start").click(function() {
        $countdown.tick();
    });
    $("#pause").click(function() {
        clearInterval(x);
    });
    $("#reset").click(function() {
        clearInterval(x);
        $countdown = null;
        $("#set_countdown").removeClass("hidden");
        $("#countdown").addClass("hidden");
    })
});
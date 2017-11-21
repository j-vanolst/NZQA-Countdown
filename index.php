<link rel="stylesheet" type="text/css" href="style.css">
<script src="jquery-3.2.1.min.js"></script>
<script src="countdown.js"></script>
<div id="header">
NZQA Examination Countdown Timer
</div>
<div id="container">
<div id="set_countdown">
    <b>H:</b>
    <input class="countdown_input" type="number" id="hours_set" placeholder="00" min="0" max="99">
    <b>M:</b>
    <input class="countdown_input" type="number" id="minutes_set" placeholder="00" min="0" max="59">
    <b>S:</b>
    <input class="countdown_input" type="number" id="seconds_set" placeholder="00" min="0" max="59">
    <br>
    <button id="set">Set</button>
</div>
<div id="countdown" class="hidden">
    <label id="hours_label"></label>
    <b class="colon">:</b>
    <label id="minutes_label"></label>
    <b class="colon">:</b>
    <label id="seconds_label"></label>
    <br>
    <button id="start">Start</button>
    <button id="pause">Pause</button>
    <button id="reset">Reset</button>
    <br>
    <textarea rows="4" cols="50" name="information" placeholder="Text goes here..."></textarea>
</div>
</div>
<div id="footer">
Designed by Jos van Olst
</div>
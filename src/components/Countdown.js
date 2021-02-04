var Timer = () =>{
    var template =`
    <div class="container-countdown">
  
        <div class=container-outer>
                    <h1>COUNTDOWN</h1>
                
                <form>
                <input type="date" id="searchDate"  value="" required placeholder="28 Sep 2020"></input>
                <button type="button" id="search" >SUBMIT</button>
                </form>
                <div class=" container-countdown-inner">
                
                    <div class="days-c">
                    <p class="big-text" id="days">0</p>
                    <span>Days</span>
                    </div>

                    <div class="hours-c">
                    <p class="big-text" id="hours">0</p>
                    <span>Hours</span>
                    </div>

                    <div class="minutes-c">
                    <p class="big-text" id="minutes">0</p>
                    <span>Minutes</span>
                    </div>

                    <div class="seconds-c">
                    <p class="big-text" id="seconds">0</p>
                    <span>Seconds</span>
                    </div>
                    
                </div>
                
        </div>

    </div>
    
    `
    return template
}

export default Timer;



   





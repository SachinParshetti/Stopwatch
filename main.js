
        var milliSeconds = 0;
        var seconds = 0;
        var minutes = 0;
        var hours = 0;
        function LoadTime() {

            milliSeconds++;
            if (milliSeconds === 100) {
                milliSeconds = 0;
                seconds++;
            }
            if (seconds === 59) {
                seconds = 1;
                minutes++;
            }
            if (minutes === 59) {
                minutes = 1;
                hours++;
            }


            document.getElementById("hours").innerHTML = `${hours}<sub style="font-size:12px;">hrs</sub>`;
            document.getElementById("minutes").innerHTML = `${minutes}<sub style="font-size:12px;">min</sub>`
            document.getElementById("seconds").innerHTML = `${seconds}<sub style="font-size:12px;">sec</sub>`
            document.getElementById("milliSeconds").innerHTML =`${milliSeconds}<sub style="font-size:12px;">ms</sub>`

        }
      
        var thread = null;

        function StartClick() {
        
            if (thread===null)
        {
          thread = setInterval(LoadTime, 10);
          var start =  document.getElementById("start");
          start.textContent="Stop";
          start.className='btn btn-danger rounded rounded-start-pill';
          
        }
        else
        {

            clearInterval(thread);
            thread = null;
            var start =  document.getElementById("start");
            start.textContent = "Start";
            start.className ='btn btn-primary rounded rounded-start-pill';

        }

        }
        function ResetClick(){
          clearInterval(thread);
           thread = null;
            milliSeconds = 0;
            seconds = 0;
            minutes = 0;
            hours = 0;
           document.getElementById("hours").innerHTML = '00 <sub style="font-size:12px">hrs</sub>';
            document.getElementById("minutes").innerHTML = '00 <sub style="font-size:12px">min</sub>';
            document.getElementById("seconds").innerHTML = '00 <sub style="font-size:12px">sec</sub>';
            document.getElementById("milliSeconds").innerHTML = '00 <sub style="font-size:12px">ms</sub>';

        }

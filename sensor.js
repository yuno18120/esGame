let motionData = [];

/*function ClickRequestDeviceSensor(){
    DeviceOrientationEvent.requestPermission().then(function(responce){
        if(responce == 'granted'){
            window.addEventListener("device")
        }

    })
}*/

window.addEventListener("deviceorientation",deviceOrientation,true);

function deviceOrientation(e){
    let bata = e.bata;
    let alpha = e.alpha;
    let gamma = e.gamma;

    document.getElementById("t0").innerText=bata;
    document.getElementById("t1").innerText=alpha;
    document.getElementById("t2").innerText=gamma;
}
window.addEventListener("devicemotion", devicemotion);
window.addEventListener("deviceorientation", deveceorientation,false);

function devicemotion(e) {
    let x = e.accelerationIncludingGravity.x;
    let y = e.accelerationIncludingGravity.y;
    let z = e.accelerationIncludingGravity.z;

    let result1 = document.getElementById("t0");
    result1.innerHTML = "重力加速度<br />" +
        "X:" + x.toFixed(2) + "(m/s^2)<br />" +
        "Y:" + y.toFixed(2) + "(m/s^2)<br />" +
        "Z:" + z.toFixed(2) + "(m/s^2)<br />";
}

function deveceorientation() {
    var alpha = e.alpha;
    var beta = e.beta;
    var gamma = e.gamma;

    var result2 = document.getElementById("t1");
    result2.innerHTML = "ジャイロセンサー<br />" +
        "alpha:" + alpha.toFixed(2) + "°<br />" +
        "beta :" + beta.toFixed(2) + "°<br />" +
        "gamma:" + gamma.toFixed(2) + "°<br />";
}


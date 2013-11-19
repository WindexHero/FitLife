
// The watch id references the current `watchAcceleration`
var watchID = null;
var lastX, lastY, lastZ;
var moveCounter = 0;

// Start watching the acceleration
//
function startWatch() 
{

    // Update acceleration every 1 second
    var options = { frequency: 1000 };

    watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
}

function alertDismissed() 
{
    // do something
}

// Stop watching the acceleration
//
function stopWatch() {
    if (watchID) 
    {
        navigator.notification.alert(
            'You took '+ moveCounter +' steps and burned approximately '+ (moveCounter * 0.035) +'calories.',  // message
            alertDismissed,         // callback
            'Session Over',            // title
            'OK'                  // buttonName
        );
        
        navigator.accelerometer.clearWatch(watchID);
        watchID = null;
    }
}

// onSuccess: Get a snapshot of the current acceleration
//
function onSuccess(acceleration) 
{
    var clearText = document.getElementById('accelmessage');
    clearText.innerHTML = "Steps taken: ";
    
    var element = document.getElementById('accelerometer');
    element.innerHTML = moveCounter;

    
    if (!lastX)
    {
        lastX = acceleration.x;
        lastY = acceleration.y;
        lastZ = acceleration.z;
    }
    
    var deltaX, deltaY, deltaZ;
        deltaX = Math.abs(acceleration.x-lastX);
        deltaY = Math.abs(acceleration.y-lastY);
        deltaZ = Math.abs(acceleration.z-lastZ);
    
    if(deltaX + deltaY + deltaZ > 2) 
    {
        moveCounter++;
    }
}

// onError: Failed to get the acceleration
//
function onError() {
    alert('onError!');
}


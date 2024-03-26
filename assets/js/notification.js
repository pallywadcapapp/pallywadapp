function notifyMe(title, body) {
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }
    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === "granted") {
      // If it's okay let's create a notification
      //var notification = new Notification("Hi there!");
      createNotification(title, body);
    }
  
    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
          //var notification = new Notification("Hi there!");
          createNotification(title, body);
        }
      });
    }
    console.log(Notification.permission);
  

    // At last, if the user has denied notifications, and you 
    // want to be respectful there is no need to bother them any more.
  }

  function createNotification(title, body) {
    var notification = new Notification(title, {
      icon: 'https://app.pallywad.com/assets/img/padwally-ico.png',
      body: body,
    });
    // url that needs to be opened on clicking the notification
    // finally everything boils down to click and visits right
    notification.onclick = function() {
      window.open('https://app.pallywad.com/notifications');
    };
  }

  
function fetchNewNotifications() {
  let api_endpoint = "/api/notifications/new";
  $.ajax({
      type: 'get',
      url: loan_app_url + api_endpoint,
      headers: { 'Content-Type': 'application/json' },
      error: function (d) {
      },
      success: function (d) {
          for (let i = 0; i < d.length; i++) {
            notifyMe(d[i].subject, d[i].message.slice(0,40));
          }
      }
  })
}

  $(function(e){
    //notifyMe();
    fetchNewNotifications();
  });
  
function createPickel() {
  var win = window.open('about:blank#ff');
  win.document.body.style.margin = '0';
  win.document.body.style.height = '100vh';
  var iframe = win.document.createElement('iframe');
  iframe.style.border = 'none';
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.margin = '0';
  iframe.src = 'https://pixels-one.vercel.app/';
  win.document.body.appendChild(iframe);
  }

function createClassroom() {
  var win = window.open("http://classroom.google.com");
  win.document.body.style.margin = '0';
  win.document.body.style.height = '100vh';
  }
  

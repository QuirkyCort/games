function readGET(name, URL) {
  if (typeof URL == 'undefined') {
    URL = window.location.href;
  }
  var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(URL);
  if (results==null){
    return null;
  } else {
    return decodeURI(results[1]);
  }
}

// Post results:
function postResult(data = {}) {
  var name = readGET('name'); // Upload result
  if (name) {
    data.name = name;
    fetch('record.php', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    });
  }
}
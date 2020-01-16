

var evetSource = new EventSource("http://localhost:8080/server-send-event/test");

evetSource.onopen = event => {
    console.log("On Open:" + JSON.stringify(event))
}

evetSource.onmessage = event => {
    console.log("On Message:" + JSON.stringify(event))
    document.querySelector("#content").appendChild("<div>${JSON.stringify(event)}</div>")
}


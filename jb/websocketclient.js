
class WebSocketClient 
{
    constructor(host, port, endpoint)
    {
        this.host = host;
        this.port = port;
        this.endpoint = endpoint;
    }

    getUrl()
    {
        return `ws://${this.host}:${this.port}/${this.endpoint}`
    }

    connect()
    {
        try{
            this.websocket = new WebSocket(this.getUrl())
            this.websocket.onopen = event => console.log("on open", event);
            this.websocket.onmessage = event => console.log("Message:" + event.data)
            this.websocket.onclose = event => console.log("on close", JSON.stringify(event));
            this.websocket.onerror = event => console.log("on error", JSON.stringify(event));

        }
        catch(error)
        {
            console.error(error)
        }
    }

    disconnect()
    {
        this.websocket.close();
    }
}


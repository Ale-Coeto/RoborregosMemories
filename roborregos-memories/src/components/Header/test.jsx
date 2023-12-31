const mqtt = require('mqtt/dist/mqtt')
const client = mqtt.connect('ws://broker.hivemq.com:1883')

const Test = () => {
    const [client, setClient] = useState(null);

    const mqttConnect = (host, mqttOption) => {
        setConnectStatus('Connecting');
        setClient(mqtt.connect(host, mqttOption));
    };
    useEffect(() => {
        if (client) {
            console.log(client)
            client.on('connect', () => {
                setConnectStatus('Connected');
            });
            client.on('error', (err) => {
                console.error('Connection error: ', err);
                client.end();
            });
            client.on('reconnect', () => {
                setConnectStatus('Reconnecting');
            });
            client.on('message', (topic, message) => {
                const payload = { topic, message: message.toString() };
                setPayload(payload);
            });
        }
    }, [client]);

    return (
        <div>
            <h1>Test</h1>
        </div>
    )
}

export default Test;
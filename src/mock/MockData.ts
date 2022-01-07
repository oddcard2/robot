import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
var mock = new MockAdapter(axios, { delayResponse: 2000 });
 
 mock.onGet('/status').reply(200,
    {
        "a": {
            "mode": "forward",
            "speed": 50
        },
        "b": {
            "mode": "backward",
            "speed": 50
        }
    }
 )

 mock.onPost('/ab/mode/forward').reply(200, '')
 mock.onPost('/ab/mode/backward').reply(200, '')
 mock.onPost('/ab/mode/off').reply(200, '')
 mock.onPost(/\/ab\/speed\/\d+/).reply(200, '')
//  mock.onPost('/ab/speed/\d+').reply(200, '')
 mock.onPost('/ab/rotation/left').reply(200, '')
 mock.onPost('/ab/rotation/right').reply(200, '')

 export default axios
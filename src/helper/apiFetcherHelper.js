import axios from 'axios';

export default class ApiFetcherHelper {

    _action(url, method, headers = null, body = null, params = null) {
        const config = {
            method: method,
            url: url,
            params: params,
            data: body,
            headers: headers,
        };

        return axios(config);
    }
}

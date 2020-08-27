import ApiFetcherHelper from "../helper/apiFetcherHelper";


const api = new ApiFetcherHelper();

const testApiGet = async (url) => {
    return await api._action(url, "GET")
        .then((rep) =>{
        return rep
    })
        .catch((err) => {
            return err
        });
}
const testApiPost = async (url) => {
    return await api._action(url, "POST")
        .then((rep) =>{
        return rep
    })
        .catch((err) => {
            return err
        });
}

export { testApiGet, testApiPost }
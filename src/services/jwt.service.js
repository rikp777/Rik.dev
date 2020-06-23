//import Cookies from "js-cookie";
//var date = new Date(new Date().getTime() + 4 * 60 * 60 * 1000);

export const getToken = ID_TOKEN_KEY => {
    console.log(`[MyKoiPond-Jwt] getToken ${ID_TOKEN_KEY} `);

    //let token = Cookies.get(ID_TOKEN_KEY);
    let token = localStorage.getItem(ID_TOKEN_KEY);
    if (token) return token;
    else return false;
};

export const setToken = (ID_TOKEN_KEY, token) => {
    console.log(`[MyKoiPond-Jwt] saveToken ${ID_TOKEN_KEY} token ${token} `);

    if (ID_TOKEN_KEY == "") return false;
    //Cookies.set(ID_TOKEN_KEY, token, { expires: date, secure: false});
    localStorage.setItem(ID_TOKEN_KEY, token);
};

export const destroyToken = ID_TOKEN_KEY => {
    console.log(`[MyKoiPond-Jwt] destroyToken ${ID_TOKEN_KEY} `);

    //Cookies.remove(ID_TOKEN_KEY);
    localStorage.removeItem(ID_TOKEN_KEY);
};

export default {getToken, setToken, destroyToken};

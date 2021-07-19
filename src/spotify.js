
//Spotify API

// Click login-in button and takes you to the actual spotify site for LOGGING IN + authorization
export const authEndpoint = 
"https://accounts.spotify.com/authorize";

//Onced that is finished, page will then REDIRECT here to "my" spotify clone home page
const redirectUri = "http://localhost:3000/";

// 
const clientId = "7e3b91945d044e3793f5234f5ecb3a96";

// Scopes are needed to get permissions to do access these things on Spotify
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
];
// THIS IS A FUNCTION / I have the token, now lets take it from the real Spotify and apply the auth to our app
export const getTokenFromUrl = () => {
    // hash starts to the # in the url in browser
    return window.location.hash 
    // get first (1) substring (we are chopping the string)
    .substring(1)
    // dont go past this apmersand '&'
    .split('&')
    // #accessToken=mykey&nameisyou&abd&
    //accessToken mykey (this is what the below did to the above?)
    // initial value of the reduce and the item it will loop through (2 param meanings)
    .reduce((initial, item ) => { 
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1])

        return initial;
    }, {});
}

// This is the URL for the login page
// %20 this is the askie code for a "Space"
// "Token" is the authentication pass that proves to spitofy that you are who youbsay you are that's why token is used at the end
export const loginUrl = `${authEndpoint}
?client_id=${clientId}&redirect_uri=${redirectUri}&scope=
${scopes.join("%20")}
&response_type=token&show_dialog=true`;
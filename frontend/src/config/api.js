export const API_URL_BASE =
  "https://local-talent-server-dev-rqbs.3.us-1.fl0.io/api";

export const API_URL_TOKENLOGIN = API_URL_BASE + "/auth";

export const API_URL_LOGIN = API_URL_TOKENLOGIN + "/login";

export const API_URL_REGISTER = API_URL_TOKENLOGIN + "/register";

export const API_URL_RECOVER = API_URL_TOKENLOGIN + "/resend";

export const API_URL_VALIDATE = API_URL_TOKENLOGIN + "/validate";

export const API_URL_SERVICES = API_URL_BASE + "/service";

export const API_URL_USERIMAGE = API_URL_BASE + "/user/image";

//--------------------------------------------------------------------------------

export const API_URL_ALLSERVICES = API_URL_SERVICES + "/allservices";

export const API_URL_SEARCH = API_URL_SERVICES + "/search/";

//--------------------------------------------------------------------------------

export const API_URL_SILVERSUSCRIPTION =
  API_URL_BASE + "/pay/subscriptionsilver";

export const API_URL_GOLDSUSCRIPTION = API_URL_BASE + "/pay/subscriptiongold";

export const API_URL_CANCEL_SUSCRIPTION = API_URL_BASE + "/sales/cancel";

//--------------------------------------------------------------------------------

export const API_URL_MATCH = API_URL_BASE + "/match";

export const API_URL_ACCEPTMATCH = API_URL_MATCH + "/accept";

export const API_URL_CANCELMATCH = API_URL_MATCH + "/cencel";

export const API_URL_OWNMATCH = API_URL_MATCH + "/service";

export const API_URL_MYMATCH = API_URL_MATCH + "/user";

//---------------------------------------------------------------------------------

export const API_URL_NOTIFICATIONS = API_URL_BASE + "/notification";

export const API_URL_COUNT_NOTIFICATIONS = API_URL_NOTIFICATIONS + "/look";

export const API_URL_NEWS_NOTIFICATIONS = API_URL_NOTIFICATIONS + "/news";

export const API_URL_CREATE_NOTIFICATION = API_URL_NOTIFICATIONS + "/create";

//----------------------------------------------------------------------------------

export const API_URL_EDIT_PROFILE = API_URL_BASE + "/user";

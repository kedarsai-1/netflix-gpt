export const NETFLIX_LOGO ="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-01/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export const AVATAR_URL = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/"
export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_large.jpg";
export const API_OPTIONS= {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+import.meta.env.VITE_TMDB_KEY,
    }
  };
  export const SUPPORTED_LANGUAGES =[{identifier:'en',name:"English"},{identifier:'hindi',name:"Hindi"},{identifier:'spanish',name:"Spanish"}]
  export const GEMINI_KEY = import.meta.env.VITE_GEMINI_KEY
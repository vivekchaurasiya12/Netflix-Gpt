export const LOGO = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const BACKGROUND_IMAGE = "https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_large.jpg";

export const IMAGE = "https://cdn-icons-png.freepik.com/256/9837/9837925.png?ga=GA1.1.366570181.1732464887&semt=ais_hybrid";

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_APP_TMDB_KEY}`, // Ensure this is correct
  },
};

export const IMAGE_CDN_URL ="https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES = [
    {
        identifier: "en",
        label: "English"
    },
    {
      identifier: "hindi",
        label: "Hindi"
    },
    {
      identifier: "spanish",
        label: "Spanish"
    }
]

export const GEN_API = import.meta.env.VITE_APP_GEN_KEY


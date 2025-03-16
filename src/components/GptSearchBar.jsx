import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {    
    const langKey = useSelector(store => store.config.lang);
   console.log(langKey);
    
    return (
        <div className="flex justify-center pt-24 ">
            <form className="w-1/2 bg-black grid grid-cols-12">
            <input type="text" placeholder={lang[langKey].gptSearchPlaceholder} className="col-span-9 p-2 m-2"/>
            <button className="bg-red-600 text-white p-2 rounded-md col-span-3 m-2 px-2 py-2">{lang[langKey].search}</button>
            </form>
        </div>
    );
};
export default GptSearchBar;
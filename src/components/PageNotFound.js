import PageNotFoundTemplate from "../assets/page-not-found.png"

const PageNotFound = ()=> {
    return (
        <div className="w-full h-full flex justify-center items-center gap-4 mt-[20%] [@media(max-width:400px)]:flex-col">
            <img src={PageNotFoundTemplate} className=""/>  
            <p className="text-4xl font-bold text-[#abacae] text-center">Page Not Found</p>
        </div>
    )
}

export default PageNotFound;
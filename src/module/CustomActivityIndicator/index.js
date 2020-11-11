
var loaderRef = ""

const setLoaderRef = (Ref) => {
    loaderRef = Ref
}

const showLoader = (type, color) => {
    if (loaderRef !== null && loaderRef !== "") {
        loaderRef.showLoader(type, color)
    }
}

export default {
    setLoaderRef,
    showLoader
}
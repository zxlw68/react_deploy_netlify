const apiRequest = async (url ='',optionsObj =null, errMsg = null) => {
    try{
        const response = await fetch(url, optionsObj)
        if (!response.ok) throw Error('Please reload the app')
                  //response is not in 200 range, 404
    } catch(err) {
        errMsg = err.message
    } finally {
        return errMsg
    }
}

export default apiRequest
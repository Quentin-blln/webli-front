const Tools = (toolIndexOb) => {
    const toolIndex = toolIndexOb.toolIndex
    console.log(toolIndex)
    switch (toolIndex){
        case 1:
            return(
                <div>
                    TOOL 1
                </div>
            )
        case 2:
            return(
                <div>
                    TOOL 2
                </div>
            )
        case 3:
            return(
                <div>
                    TOOL 3
                </div>
            )
        default:
            return(
                null
            )
    }
}

export default Tools
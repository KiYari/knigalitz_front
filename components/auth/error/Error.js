import Box from "../../Box";


export default function Error({children}) {
    if(children == null) return <div></div>
    return <Box>
        {children}
    </Box>
}
import { useDispatch } from "react-redux"
import { loadCalls } from "../../store/calls"


const AppLoader = ({ children }) => {
    const dispatch = useDispatch()
    dispatch(loadCalls())
    return children
}

export default AppLoader

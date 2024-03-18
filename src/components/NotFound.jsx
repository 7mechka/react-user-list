import { useNavigate } from "react-router-dom"

function NotFound() {
    const navigate = useNavigate()
    function goBack() {
        navigate(-1)
    }
    return (
        <div className="NotFound">
            <h1>404 PAGE NOT FOUND</h1>
            <button onClick={() => goBack()}>GO BACK</button>
        </div>
    )
}
export {NotFound}
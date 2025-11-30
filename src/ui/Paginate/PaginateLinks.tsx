import TrialLink from "../TrialLink"
import PaginateButtons from "./PaginateButtons"

const PaginateLinks = () => {
    return (
        <div className="flex flex-col space-y-4 align-center">
            <PaginateButtons />
            <TrialLink />
            <PaginateButtons />
        </div>
    )
}

export default PaginateLinks
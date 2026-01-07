import { components } from "@/lib/api-types"
import TrialLink from "../TrialLink"
import PaginateButtons from "./PaginateButtons"
import data from '@/lib/dummy-trials.json'

type PagedTrials = components["schemas"]["PagedAnzctrTrialBrief"] | components["schemas"]["PagedClinTrialBrief"] | components["schemas"]["PagedGenTrialBrief"]

const PaginateLinks = ({links} : { links? : PagedTrials}) => {
    return (
        <div className="flex flex-col space-y-4 align-center">
            <PaginateButtons />
            <div className="flex flex-col space-y-2">
            {(links ?? data).items.map((item, index) => {
                return <TrialLink trial={item} key={'trial' + index} />
            })}
            </div>
            <PaginateButtons />
        </div>
    )
}

export default PaginateLinks
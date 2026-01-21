import { components } from "@/lib/api-types"
import TrialLink from "../TrialLink"
import PaginateButtons from "./PaginateButtons"
import data from '@/lib/dummy-trials.json'
import { PAGINATE_LIMIT } from "@/lib/utils"

type PagedTrials = components["schemas"]["PagedAnzctrTrialBrief"] | components["schemas"]["PagedClinTrialBrief"] | components["schemas"]["PagedGenTrialBrief"]

const PaginateLinks = ({links, page, loadTrials} : { links : PagedTrials, page: number, loadTrials: (page?: number) => Promise<void>}) => {
    return (
        <div className="flex flex-col space-y-4 align-center">
            <PaginateButtons page={page} loadTrials={loadTrials} pageCount={Math.ceil(links.count / PAGINATE_LIMIT)} />
            <div className="flex flex-col space-y-2">
            {(links ?? data).items.map((item, index) => {
                return <TrialLink trial={item} key={'trial' + index} />
            })}
            </div>
            <PaginateButtons page={page} loadTrials={loadTrials} pageCount={Math.ceil(links.count / PAGINATE_LIMIT)} />
        </div>
    )
}

export default PaginateLinks
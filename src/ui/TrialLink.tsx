import { components } from "@/lib/api-types"
import Link from "next/link"

type AnzctrTrialBrief = components["schemas"]["AnzctrTrialBrief"]
type ClinTrialBrief = components["schemas"]["ClinTrialBrief"]
type GenTrialBrief = components["schemas"]["GenTrialBrief"]

type TrialBrief = AnzctrTrialBrief | ClinTrialBrief | GenTrialBrief

const isClintrial = (trial: TrialBrief): trial is ClinTrialBrief => {
    return (trial as ClinTrialBrief).nct_id !== undefined
}
const isAnztrial = (trial: TrialBrief): trial is AnzctrTrialBrief => {
    return (trial as AnzctrTrialBrief).registration_number !== undefined
}

const TrialLink = ({trial} : { trial: TrialBrief }) => {
    return isClintrial(trial) ? (
        <Link href={`/trials/clintrials/${trial.nct_id}`}>
            <div className="h-24 rounded-md border border-white bg-green-200 p-4 flex gap-2 cursor-pointer hover:bg-green-100">
                <div className="w-[80%]">
                    <h1 className="truncate mb-2 text-lg font-bold">{trial.official_title}</h1>
                    <p className="truncate">{trial.brief_summary}</p>
                </div>
                <div className="w-[20%] text-right flex flex-col justify-between">
                    <p>{trial.overall_status}</p>
                    <p>{trial.last_update_post_date}</p>
                </div>
            </div>
        </Link>
    ) : isAnztrial(trial) ? (
        <Link href={`/trials/anzctr/${trial.registration_number}`}>
            <div className="h-24 rounded-md border border-white bg-green-200 p-4 flex gap-2 cursor-pointer hover:bg-green-100">
                <div className="w-[80%]">
                    <h1 className="truncate mb-2 text-lg font-bold">{trial.public_title}</h1>
                    <p className="truncate">{trial.description}</p>
                </div>
                <div className="w-[20%] text-right flex flex-col justify-between">
                    <p>{trial.recruitment_status}</p>
                    <p>{trial.date_last_updated}</p>
                </div>
            </div>
        </Link>
    ) : (
        <Link href={`/trials/${trial.tid}`}>
            <div className="h-24 rounded-md border border-white bg-green-200 p-4 flex gap-2 cursor-pointer hover:bg-green-100">
                <div className="w-[80%]">
                    <h1 className="truncate mb-2 text-lg font-bold">{trial.brief_title}</h1>
                    <p className="truncate">{trial.summary}</p>
                </div>
                <div className="w-[20%] text-right flex flex-col justify-between">
                    <p>{trial.status}</p>
                    <p>{trial.last_update_date}</p>
                </div>
            </div>
        </Link>
    )
}

export default TrialLink
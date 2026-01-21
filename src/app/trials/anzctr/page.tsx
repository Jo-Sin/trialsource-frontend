'use client'

import Container from "@/ui/Container"
import PaginateLinks from "@/ui/Paginate/PaginateLinks"
import type { components } from "@/lib/api-types"
import { api } from "@/lib/client"
import { useCallback, useEffect, useState } from "react"
import { PAGINATE_LIMIT } from "@/lib/utils"
import Link from "next/link"

type PagedTrials = components["schemas"]["PagedAnzctrTrialBrief"]

const TrialsPage = () => {
    const [trials, setTrials] = useState<PagedTrials>();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
    const [searchPage, setSearchPage] = useState(1);

    const loadTrials = useCallback(async (page = 1) => {
		try {
            setSearchPage(page);
			const { data } = await api.GET("/api/anzctr-trials", {params: {query: { limit: PAGINATE_LIMIT, offset: PAGINATE_LIMIT * (page - 1)}}});
			setTrials(data);
			setError(null);
		} catch (err) {
			setError(err instanceof Error ? err.message : "Failed to load trials");
		} finally {
			setLoading(false);
		}
	}, []);

    useEffect(() => { loadTrials() }, [loadTrials])

    return (
        <div>
            <Container>
                <h1 className="text-4xl my-8">Browse Trials</h1>
                
                <Link className="text-green-600 hover:text-green-700 focus:text-green-700" href="/find-trials">Find Trials</Link><br />
                <Link className="text-green-600 hover:text-green-700 focus:text-green-700" href="/trials">Generalized Trials</Link><br />
                <Link className="text-green-600 hover:text-green-700 focus:text-green-700" href="/trials/anzctr">ANZCTR Trials</Link><br />
                <Link className="text-green-600 hover:text-green-700 focus:text-green-700" href="/trials/clintrials">ClinicalTrials.gov Trials</Link>

                {loading ? (<p>Loading...</p>) :
                error ? (<p>{error}</p>) : trials?.items?.length ?
                (<PaginateLinks links={trials} page={searchPage} loadTrials={loadTrials} />) : null}
            </Container>
        </div>
    )
}

export default TrialsPage
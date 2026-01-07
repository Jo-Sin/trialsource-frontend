'use client'

import Container from "@/ui/Container"
import PaginateLinks from "@/ui/Paginate/PaginateLinks"
import type { components } from "@/lib/api-types"
import { api } from "@/lib/client"
import { useCallback, useEffect, useState } from "react"

type PagedTrials = components["schemas"]["PagedAnzctrTrialBrief"]

const TrialsPage = () => {
    const [trials, setTrials] = useState<PagedTrials>();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

    const loadTrials = useCallback(async () => {
		try {
			const { data } = await api.GET("/api/anzctr-trials", {params: {query: { limit: 20}}});
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

                {loading ? (<p>Loading...</p>) :
                error ? (<p>{error}</p>) :
                (<PaginateLinks links={trials} />)}
            </Container>
        </div>
    )
}

export default TrialsPage
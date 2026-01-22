'use client'

import Container from "@/ui/Container"
import PaginateLinks from "@/ui/Paginate/PaginateLinks"
import type { components } from "@/lib/api-types"
import { api } from "@/lib/client"
import { useCallback, useState } from "react"
// import tdata from '@/lib/dummy-trials.json'
import { PAGINATE_LIMIT } from "@/lib/utils"
import Link from "next/link"
// import '@n8n/chat/style.css';
// import { createChat } from '@n8n/chat';

type PagedTrials = components["schemas"]["PagedGenTrialBrief"]

const FindTrialsPage = () => {
    const [trials, setTrials] = useState<PagedTrials>();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
    const [searchText, setSearchText] = useState('');
    const [searchPage, setSearchPage] = useState(1);

    const loadTrials = useCallback(async (page = 1) => {
		try {
            setSearchPage(page);
            setLoading(true);
			const { data } = await api.POST("/api/find-trials", {body: { search: searchText}, params: {query: { limit: PAGINATE_LIMIT, offset: PAGINATE_LIMIT * (page - 1)}}});
			setTrials(data);
			setError(null);
		} catch (err) {
			setError(err instanceof Error ? err.message : "Failed to load trials");
		} finally {
			setLoading(false);
		}
	}, [searchText]);

    // useEffect(() => {
	// 	createChat({
	// 		webhookUrl: process.env.NEXT_PUBLIC_N8N_URL
	// 	});
	// }, []);

    return (
        <div>
            <Container>
                <h1 className="text-4xl my-8">Find Trials</h1>

                <Link className="text-green-600 hover:text-green-700 focus:text-green-700" href="/find-trials">Find Trials</Link><br />
                <Link className="text-green-600 hover:text-green-700 focus:text-green-700" href="/trials">Generalized Trials</Link><br />
                <Link className="text-green-600 hover:text-green-700 focus:text-green-700" href="/trials/anzctr">ANZCTR Trials</Link><br />
                <Link className="text-green-600 hover:text-green-700 focus:text-green-700" href="/trials/clintrials">ClinicalTrials.gov Trials</Link>

                <form className="h-10 my-8" onSubmit={(e) => {e.preventDefault(); setSearchPage(1); loadTrials();}}>
                    <input
                    type='search'
                    id='db-search'
                    name='db-search'
                    className="border-2 rounded-l-xl px-4 h-full border-green-600 focus:border-green-700 focus:outline-none"
                    onChange={e => setSearchText(e.target.value)}
                    />
                    <button type="submit" className="min-w-9 h-full rounded-r-md bg-emerald-600 py-2 px-3 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:shadow-none active:bg-emerald-400 hover:bg-emerald-500 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                        Search
                    </button>
                </form>

                {loading ? (<p>Loading...</p>) :
                // tdata?.items?.length ?
                error ? (<p>{error}</p>) : trials?.items?.length ?
                (<PaginateLinks links={trials} page={searchPage} loadTrials={loadTrials} />) : null}
            </Container>
        </div>
    )
}

export default FindTrialsPage
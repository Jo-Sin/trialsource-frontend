'use client'

import Container from "@/ui/Container"
import type { components } from "@/lib/api-types"
import { api } from "@/lib/client"
import { useCallback, useEffect, useState } from "react"
import { useParams } from "next/navigation"
import tdata from '@/lib/dummy-trial.json'

type Trial = components["schemas"]["GenTrialFull"]

const TrialPage = () => {
    const params = useParams();

    const [trial, setTrial] = useState<Trial>();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

    const loadTrial = useCallback(async () => {
		try {
			const { data } = await api.GET("/api/trials/{id}", {params: {path: {id: params.slug as string}}});
			setTrial(data);
			setError(null);
		} catch (err) {
			setError(err instanceof Error ? err.message : "Failed to load trials");
		} finally {
			setLoading(false);
		}
	}, []);

    useEffect(() => { loadTrial(); }, [loadTrial, params])
    // useEffect(() => { console.log('trial', trial) }, [trial])

    return (
        <div>
            <Container>
                <table className="border border-sm">
                    <thead>
                    <tr>
                        <th className="p-4">Key</th>
                        <th className="p-4">Value</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Object.entries(trial ?? tdata).map((keyValue, keyIndex) => {
                        return (
                            <tr key={keyIndex}>
                                <td className="p-4">{keyValue[0]}</td>
                                <td>{keyValue[1] as string}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </Container>
        </div>
    )
}

export default TrialPage
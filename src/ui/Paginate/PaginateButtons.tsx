const PaginateButtons = ({pageCount, page, loadTrials} : { pageCount : number, page: number, loadTrials: (page?: number) => Promise<void>}) => {
    const defaultClasses = "min-w-9 rounded-md border border-emerald-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-emerald-500 hover:border-emerald-500 focus:border-emerald-500 active:border-emerald-400 active:text-white active:bg-emerald-400 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2";
    const activeClasses = "min-w-9 rounded-md bg-emerald-600 py-2 px-3 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:shadow-none active:bg-emerald-400 hover:bg-emerald-500 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2";

    return (
        <div className="flex space-x-1 justify-center">
            <button className={defaultClasses} disabled={page == 1} onClick={() => loadTrials(1)}>
                First
            </button>
            <button className={defaultClasses} disabled={page <= 1} onClick={() => loadTrials(page - 1)}>
                Prev
            </button>
            {page > 2 ? (
                <button className={defaultClasses} onClick={() => loadTrials(page - 2)}>
                    {page - 2}
                </button>
            ) : null}
            {page > 1 ? (
                <button className={defaultClasses} onClick={() => loadTrials(page - 1)}>
                    {page - 1}
                </button>
            ) : null}
            <button className={activeClasses}>
                {page}
            </button>
            {page < pageCount ? (
                <button className={defaultClasses} onClick={() => loadTrials(page + 1)}>
                    {page + 1}
                </button>
            ) : null}
            {page < pageCount - 1 ? (
                <button className={defaultClasses} onClick={() => loadTrials(page + 2)}>
                    {page + 2}
                </button>
            ) : null}
            <button className={defaultClasses} disabled={page >= pageCount} onClick={() => loadTrials(page + 1)}>
                Next
            </button>
            <button className={defaultClasses} disabled={page == pageCount} onClick={() => loadTrials(pageCount)}>
                Last
            </button>
        </div>
    )
}

export default PaginateButtons
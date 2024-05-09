export function Categories ({
    categories
}: {
    categories: string[]
}) {
    return (
        <div className="w-100 m-5 flex overflow-x-scroll no-scrollbar">
            {
                categories.map((category) => (
                    <div className="w-max border mr-4 border-white transition-colors hover:bg-purple-700 rounded-lg px-4 py-2" key={category}>{'#' + category}</div>
                ))
            }
        </div>
    );
}
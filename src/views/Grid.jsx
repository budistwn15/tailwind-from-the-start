export default function Grid() {
    return (
        <div className="antialiased font-sans">
            <div className="container mx-auto py-10">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="bg-gray-500">&nbsp;</div>
                    <div className="bg-gray-500">&nbsp;</div>
                    <div className="bg-gray-500">&nbsp;</div>
                    <div className="bg-gray-500">&nbsp;</div>
                    <div className="bg-gray-500">&nbsp;</div>
                    <div className="bg-gray-500 lg:bg-teal-500">&nbsp;</div>
                </div>
            </div>
        </div>
    )
}

export default function Grid() {
    return (
        <div className="antialiased font-sans">
            <div className="container mx-auto py-10">
                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2">
                        <div className="bg-gray-800 text-white py-10">Column 1</div>
                    </div>
                    <div>
                        <div className="bg-gray-800 text-white py-10">Column 2</div>
                    </div>
                    <div>
                        <div className="bg-gray-800 text-white py-10">Column 3</div>
                    </div>
                    <div>
                        <div className="bg-gray-800 text-white py-10">Column 1</div>
                    </div>
                    <div>
                        <div className="bg-gray-800 text-white py-10">Column 2</div>
                    </div>
                    <div>
                        <div className="bg-gray-800 text-white py-10">Column 3</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

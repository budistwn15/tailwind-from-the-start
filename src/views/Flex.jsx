export default function Flex(){
    return (
        <div className="antialiased font-sans">
            <div className="container mx-auto py-10">
                <div className="flex flex-wrap">
                    <div className="w-1/3 p-4">
                        <div className="bg-gray-600">Column 1</div>
                    </div>
                    <div className="w-2/3 p-4">
                        <div className="bg-gray-600">Column 2</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

import { IconMenu2 } from "@tabler/icons-react";

export default function Navigation(){
    return(
        <div className="antialiased font-sans">
            <div className="bg-gray-900 text-white ">
                <div className="flex justify-between px-6 py-4">
                    <a href="#" className="text-lg font-medium">Oxygamint</a>
                    <button>
                        <IconMenu2/>
                    </button>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center"></div>
                <div className="flex items-center"></div>
            </div>
        </div>
    )
}

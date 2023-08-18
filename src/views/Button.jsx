import { IconLogout } from "@tabler/icons-react";

export default function Button(){
    return(
        <div className="antialiased font-sans">
            <div className="flex items-center justify-center h-screen">
                <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2.5 rounded text-white font-medium transition-colors duration-200 items-center inline-flex">
                    <IconLogout className="mr-2.5"/>
                    Logout
                </button>
            </div>
        </div>
    )
}

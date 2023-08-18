import { IconLogout } from "@tabler/icons-react";

export default function App() {

  return (
    <div className="antialiased font-sans">
        <div className="flex items-center justify-center h-screen">
            <button className="bg-blue-500 hover:bg-blue-600 font-medium px-4 py-2.5 rounded text-white inline-flex items-center transition-colors duration-200">
                <IconLogout className="mr-2"/>
                Button
            </button>
        </div>
    </div>
  )
}

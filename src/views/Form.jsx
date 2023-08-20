export default function Form(){
    return (
        <div className="antialiased font-sans bg-gray-100">
            <div className="container">
                <div className="h-screen flex items-center justify-center">
                    <div className="w-1/3 bg-white shadow p-6 rounded-lg">
                        <form autoComplete="off">
                            <div className="mb-4">
                                <label htmlFor="email" className="mb-1 text-sm text-gray-700 font-medium block">Email</label>
                                <input type="text" name="email" id="email" className="w-full"/>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="mb-1 text-sm text-gray-700 font-medium block">Password</label>
                                <input type="password" name="password" id="password" className="w-full"/>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="remember">
                                    <input type="checkbox" name="remember" id="remember" className="form-checkbox mr-2"/>
                                    Remember me
                                </label>
                            </div>
                            <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 transition-colors duration-200 text-white font-medium rounded">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

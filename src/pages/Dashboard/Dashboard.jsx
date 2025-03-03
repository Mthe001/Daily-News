import Sidebar from '@/components/Sidebar'
import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
    return (<div className='relative min-h-screen md:flex pt-6 bg-white'>
        <Helmet>
            <title>Dashboard ! News 240</title>
        </Helmet>
        {/* Left Side: Sidebar Component */}
        <Sidebar />
        {/* Right Side: Dashboard Dynamic Content */}
        <div className='flex-1  md:ml-64'>
            <div className='p-5'>
                {/* Outlet for dynamic contents */}
                <Outlet />
            </div>
        </div>
    </div>
    )
}

export default Dashboard
// project imports
import Dashboard from './dashboard/default';

// export meta
export const meta = () => ({
    title: 'Admin dashboard',
    description: ''
});

// ==============================|| DAFAULT PAGE ||============================== //

export default function Index() {
    return (
        <>
            <Dashboard />
        </>
    );
}

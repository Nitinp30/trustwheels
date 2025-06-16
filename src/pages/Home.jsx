import React, {useState, useMemo} from 'react';
import MOCK_VEHICLES from '../data/vehicles'
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import { isValidZip } from '../utils/validation';


const Home = () => {
    const [searchZip, setSearchZip] = useState('');
    const [error, setError] = useState('');
    const [currentZip, setCurrentZip] = useState('');

    const filteredVehicles = useMemo(() => {
        let vehicles = MOCK_VEHICLES;

        if (currentZip) {
            vehicles = vehicles.filter(v => v.zipCode === currentZip);
        }

        return vehicles;

    }, [currentZip]);


    const handleSearch = (e) => {
        if (e) e.preventDefault();
        setError('');
        if (!searchZip) return setError('Please enter a ZIP code');
        if (!isValidZip(searchZip)) return setError('Please enter a valid 5-digit ZIP code');
        setCurrentZip(searchZip);
    };

    return (
        <div className="min-h-screen bg-gray-50"><Header />
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Find your perfect Vehicle</h2>
                        <p className="text-xl text-gray-600">Search thousands of available vehicles in your area</p>
                    </div>
                    <SearchBar searchZip={searchZip} setSearchZip={setSearchZip} handleSearch={handleSearch} error={error} />
                </div>
            </div>
            {currentZip && (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                        <main className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900">
                                        {filteredVehicles.length} results
                                    </h2>
                                    <p className="text-gray-600">in {currentZip}</p>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            )}

        </div>
    )
}

export default Home;

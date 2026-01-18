import React, { useState, useEffect } from 'react';
import PropertyCard from '../components/features/PropertyCard';
import SkeletonCard from '../components/common/SkeletonCard';
import './Properties.css';

import { fetchPropertiesFromSheet } from '../services/googleSheetsService';

const Properties = () => {
    const [sheetProperties, setSheetProperties] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadProperties = async () => {
            try {
                const data = await fetchPropertiesFromSheet();
                if (data.length > 0) {
                    console.log("Data loaded successfully", data);
                    setSheetProperties(data);
                }
            } catch (error) {
                console.error("Failed to load properties", error);
            } finally {
                setLoading(false);
            }
        };
        loadProperties();
    }, []);

    return (
        <div className="properties-page">
            <div className="properties-header-bg">
                <div className="container">
                    <h1>Our Exclusive Properties</h1>
                    <p>Discover a curated selection of the finest homes.</p>
                </div>
            </div>

            <div className="container section">
                <div className="properties-grid-full">
                    {loading ? (
                        // Show Skeleton loaders when data is fetching
                        Array(6).fill(0).map((_, index) => (
                            <SkeletonCard key={`skeleton-${index}`} />
                        ))
                    ) : (
                        sheetProperties.length > 0 ? (
                            sheetProperties.map(property => (
                                <PropertyCard key={property.id} property={property} />
                            ))
                        ) : (
                            <div className="no-properties-message">
                                <h3>No properties found</h3>
                                <p>Please check back later for our latest listings.</p>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default Properties;

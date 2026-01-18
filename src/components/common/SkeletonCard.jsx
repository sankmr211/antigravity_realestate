import React from 'react';
import './SkeletonCard.css';

const SkeletonCard = () => {
    return (
        <div className="skeleton-card">
            <div className="skeleton-image skeleton-pulse"></div>
            <div className="skeleton-content">
                <div className="skeleton-title skeleton-pulse"></div>
                <div className="skeleton-location skeleton-pulse"></div>

                <div className="skeleton-features">
                    <div className="skeleton-feature skeleton-pulse"></div>
                    <div className="skeleton-feature skeleton-pulse"></div>
                    <div className="skeleton-feature skeleton-pulse"></div>
                </div>

                <div className="skeleton-footer">
                    <div className="skeleton-btn skeleton-pulse"></div>
                    <div className="skeleton-btn skeleton-pulse"></div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonCard;

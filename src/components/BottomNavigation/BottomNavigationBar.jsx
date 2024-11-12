import React from 'react';
import './BottomNavigationBar.css';

const profiles = [
    { name: 'Sarah Johnson', location: 'LA, California', image: 'path-to-image1.jpg' },
    { name: 'Hannah Baker', location: 'LA, California', image: 'path-to-image2.jpg' },
    { name: 'Diana', location: 'LA, California', image: 'path-to-image3.jpg' },
    { name: 'Grace', location: 'LA, California', image: 'path-to-image4.jpg' },
    { name: 'Lily', location: 'LA, California', image: 'path-to-image5.jpg' }
];

function BottomNavigationBar() {
    return (
        <div className="app-container">
            {/* Top Bar */}
            <div className="top-bar">
                <span>9:41</span>
                <div className="icon-settings">⚙️</div>
            </div>

            {/* Profile Cards */}
            <div className="profile-grid">
                {profiles.map((profile, index) => (
                    <div key={index} className="profile-card">
                        <img src={profile.image} alt={profile.name} className="profile-image" />
                        <div className="profile-overlay">
                            <h3>{profile.name}</h3>
                            <p>{profile.location}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Navigation */}
            <div className="bottom-nav">
                <div className="nav-icon">🏠</div>
                <div className="nav-icon">❤️</div>
                <div className="nav-icon">💬</div>
                <div className="nav-icon">👤</div>
            </div>
        </div>
    );
}

export default BottomNavigationBar;

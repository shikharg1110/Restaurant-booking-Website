import React, { useState } from 'react';

function Login() {
    const [activeTab, setActiveTab] = useState('login');

    const handleTabClick = (tab) => {
        if (tab === activeTab) {
            return;
        }
        setActiveTab(tab);
    };

    return (
        <div className="p-3 my-5 d-flex flex-column w-50">
            <div className="mb-3 d-flex flex-row justify-content-between">
                <button onClick={() => handleTabClick('login')} className={activeTab === 'login' ? 'active' : ''}>
                    Login
                </button>
                <button onClick={() => handleTabClick('register')} className={activeTab === 'register' ? 'active' : ''}>
                    Register
                </button>
            </div>

            {activeTab === 'login' &&
                <div>
                    {/* Login form */}
                    <form>
                        <input type="text" placeholder="Email address" />
                        <input type="password" placeholder="Password" />
                        <button type="submit">Sign in</button>
                    </form>
                </div>
            }

            {activeTab === 'register' &&
                <div>
                    {/* Registration form */}
                    <form>
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Username" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <label>
                            <input type="checkbox" /> I have read and agree to the terms
                        </label>
                        <button type="submit">Sign up</button>
                    </form>
                </div>
            }
        </div>
    );
}

export default Login;

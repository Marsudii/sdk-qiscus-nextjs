import React, { useEffect } from 'react';

function QiscusChat({ appId, baseUrl, brokerUrl }) {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/qiscus-sdk-core@latest';
        script.async = true;

        script.onload = () => {
            // Assuming that Qiscus SDK has been loaded
            const qiscus = new window.QiscusSDK({
                AppId: appId,
                options: {
                    baseURL: baseUrl,
                    brokerURL: brokerUrl,
                },
            });

            qiscus.render({
                target: '#qiscus-widget',
                roomId: 123456,
                username: 'demo_user',
                avatarUrl: 'https://image.url/avatar.jpg',
            });
        };

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, [appId, baseUrl, brokerUrl]);

    return (
        <div id="qiscus-widget" className="widget-container">
            <div className="title-bar">
                Qiscus Chat SDK Sample UI
                <button type="button" className="close-btn">
                    <i className="fas fa-chevron-down"></i>
                </button>
            </div>
            <input type="file" id="input-image" accept="image/*" style={{ display: 'none' }} />
            <input type="file" id="input-file" style={{ display: 'none' }} />
            <div className="widget-content" id="widget-content"></div>
        </div>
    );
}

export default QiscusChat;

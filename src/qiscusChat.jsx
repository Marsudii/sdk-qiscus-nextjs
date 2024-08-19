import React, { useEffect } from 'react';

function QiscusChat({ appId, baseUrl, brokerUrl, roomId, username, avatarUrl }) {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/qiscus-sdk-core@latest';
        script.async = true;

        script.onload = () => {
            const qiscus = new window.QiscusSDK({
                AppId: appId,
                options: {
                    baseURL: baseUrl,
                    brokerURL: brokerUrl,
                },
            });

            qiscus.render({
                target: '#qiscus-widget',
                roomId: roomId,
                username: username,
                avatarUrl: avatarUrl,
            });
        };

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, [appId, baseUrl, brokerUrl, roomId, username, avatarUrl]);

    return (
        <div id="qiscus-widget" className="widget-container">
            <div className="title-bar">Qiscus Chat SDK</div>
            <div className="widget-content"></div>
        </div>
    );
}

export default QiscusChat;

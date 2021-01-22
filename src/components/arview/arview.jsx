import React from 'react'
import { useEffect } from 'react'
import marker from '../../marker.patt'
import video from '../../move.mp4'
import './aframeconf'

const ArView = () => {
    useEffect(() => {
        const jsArr = [
            'https://aframe.io/releases/1.0.4/aframe.min.js',
            'https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js',
            'https://raw.githack.com/AR-js-org/studio-backend/master/src/modules/marker/tools/gesture-detector.js',
            'https://raw.githack.com/AR-js-org/studio-backend/master/src/modules/marker/tools/gesture-handler.js',
        ]
        jsArr.forEach(url => {
            const script = document.createElement('script')

            script.src = url
            script.async = true
            
            document.body.appendChild(script)
            return () => {
                document.removeChild(script)
            }
        })
    }, [])
    
    return (
        <a-scene
            vr-mode-ui="enabled: false"
            loading-screen="enabled: false;"
            arjs='sourceType: webcam; debugUIEnabled: false;'
            id="scene"
            embedded
            gesture-detector>
            <a-assets>
                <video
                    id="vid"
                    src={video}
                    preload="auto"
                    response-type="arraybuffer"
                    loop
                    crossorigin
                    webkit-playsinline
                    autoplay
                    muted
                    playsinline
                ></video>
            </a-assets>

            <a-marker
                type="pattern"
                preset="custom"
                url={marker}
                videohandler
                smooth="true"
                smoothCount="10"
                smoothTolerance="0.01"
                smoothThreshold="5"
                raycaster="objects: .clickable"
                emitevents="true"
                cursor="fuse: false; rayOrigin: mouse;"
                id="markerA">
                <a-video
                    src="#vid"
                    scale="1 1 1"
                    position="0 0.1 0"
                    rotation="-90 0 0"
                    class="clickable"
                    gesture-handler
                    width="2"
                ></a-video>
            </a-marker>

            <a-entity camera></a-entity>
        </a-scene>
    )
}

export default ArView
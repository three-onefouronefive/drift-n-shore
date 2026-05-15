import { useEffect, useRef } from "react";
import wavesCrashing from '../assets/sfx/waves_crash.mp3'

function AutoplayAudio() {
    const audioref = useRef(null);

    useEffect(() => {
        if (audioref.current) {
            audioref.current.volume = 0.3;

            audioref.current.muted = true;
            audioref.current.play().catch(err => console.log("Autoplay blocked: ", err));
        }

        const unmute = () => {
            if (audioref.current) {
                audioref.current.muted = false;
                audioref.current.play();
            }
            window.removeEventListener('click', unmute);
        };

        window.addEventListener('click', unmute);
        return () => window.removeEventListener('click', unmute);
    }, [])
    
    return <audio ref={audioref} src={wavesCrashing}/>;
}

export default AutoplayAudio
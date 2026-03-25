export function createAudioController(soundMap, logger = console) {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const buffers = new Map();
    let engineSource = null;

    // Load lydfiler
    async function loadSounds() {
        const entries = Object.entries(soundMap);
        for (let [key, url] of entries) {
            try {
                const resp = await fetch(url);
                const arrayBuffer = await resp.arrayBuffer();
                const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
                buffers.set(key, audioBuffer);
            } catch (err) {
                logger.warn(`[audio] Failed to load "${key}" from ${url}: ${err}`);
            }
        }
    }

    // Play lyd
    function playSound(key, loop = false) {
        if (!buffers.has(key)) {
            logger.warn(`[audio] Unknown sound key "${key}"`);
            return false;
        }

        if (key === "engine") {
            if (engineSource) return true; // allerede kørende
            const source = audioCtx.createBufferSource();
            source.buffer = buffers.get(key);
            source.loop = true;
            source.connect(audioCtx.destination);
            source.start(0);
            engineSource = source;
            return true;
        }

        const source = audioCtx.createBufferSource();
        source.buffer = buffers.get(key);
        source.loop = loop;
        source.connect(audioCtx.destination);
        source.start(0);
        return true;
    }

    function stopSound(key) {
        if (key === "engine" && engineSource) {
            engineSource.stop(0);
            engineSource.disconnect();
            engineSource = null;
            return true;
        }
        return false;
    }

    // Tastatur motorlyd
    function attachMotorKeys(keys = ["w","ArrowUp","a","ArrowLeft","s","ArrowDown","d","ArrowRight"]) {
        const pressed = new Set();

        window.addEventListener("keydown", (e) => {
            if (!keys.includes(e.key)) return;
            if (pressed.has(e.key)) return;
            pressed.add(e.key);

            // Resume context hvis pauset af browser autoplay policy
            if (audioCtx.state === "suspended") audioCtx.resume();
            playSound("engine");
        });

        window.addEventListener("keyup", (e) => {
            if (!keys.includes(e.key)) return;
            pressed.delete(e.key);

            if (pressed.size === 0) stopSound("engine");
        });
    }

    return {
        loadSounds,
        playSound,
        stopSound,
        attachMotorKeys
    };
}

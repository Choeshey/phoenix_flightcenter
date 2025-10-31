import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

const useSplitText = (ref, options = {}) => {
    const splitInstance = useRef(null);

    useEffect(() => {
        const initSplitText = async () => {
            // Wait for fonts to be loaded
            await document.fonts.ready;
            
            // Only initialize if the ref exists and hasn't been initialized yet
            if (ref.current && !splitInstance.current) {
                try {
                    splitInstance.current = new SplitText(ref.current, {
                        type: 'lines,words,chars',
                        linesClass: 'line',
                        wordsClass: 'word',
                        charsClass: 'char',
                        ...options
                    });
                } catch (error) {
                    console.warn('SplitText initialization failed:', error);
                }
            }

            // Cleanup function
            return () => {
                if (splitInstance.current) {
                    splitInstance.current.revert();
                    splitInstance.current = null;
                }
            };
        };

        initSplitText();
    }, [ref, options]);

    return splitInstance.current;
};

export default useSplitText;

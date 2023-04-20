import { useSpring } from '@react-spring/web';

export const initFadeConfig = {
  mass: 20,
  tension: 15,
  friction: 1,
  clamp: true,
  precision: 0.001,
};

export const fadeConfig = {
  mass: 19,
  tension: 50,
  friction: 5,
  clamp: true,
  precision: 0.001,
};

export function useFadeAnimations(
  onFadeOutAnimComplete?: () => void,
  onInitialAnimComplete?: () => void
) {
  const fadeInAnim = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: initFadeConfig,
  });

  const fadeOutAnim = useSpring({
    from: { opacity: 1 },
    to: { opacity: 0 },
    config: initFadeConfig,
    onRest: onFadeOutAnimComplete,
  });

  const initialFadeInAnim = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: initFadeConfig,
    delay: 5500,
    onRest: onInitialAnimComplete,
  });

  return { fadeInAnim, fadeOutAnim, initialFadeInAnim };
}

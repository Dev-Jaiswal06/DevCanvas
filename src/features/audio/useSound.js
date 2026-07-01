const audioCtx = typeof window !== "undefined" ? new (window.AudioContext || window.webkitAudioContext)() : null;

function playTone(frequency, duration, type = "sine", volume = 0.15) {
  if (!audioCtx) return;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = type;
  osc.frequency.value = frequency;
  gain.gain.value = volume;
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + duration);
}

export function useSound() {
  const playClick = () => playTone(800, 0.08, "square", 0.08);
  const playSuccess = () => {
    playTone(523, 0.15, "sine", 0.12);
    setTimeout(() => playTone(659, 0.15, "sine", 0.12), 100);
    setTimeout(() => playTone(784, 0.2, "sine", 0.12), 200);
  };
  const playError = () => {
    playTone(200, 0.3, "sawtooth", 0.08);
  };
  const playCorrect = () => playTone(880, 0.15, "sine", 0.1);
  const playWrong = () => playTone(180, 0.2, "sawtooth", 0.08);
  const playXP = () => {
    playTone(523, 0.1, "sine", 0.1);
    setTimeout(() => playTone(659, 0.1, "sine", 0.1), 80);
    setTimeout(() => playTone(784, 0.1, "sine", 0.1), 160);
    setTimeout(() => playTone(1047, 0.2, "sine", 0.12), 240);
  };

  return { playClick, playSuccess, playError, playCorrect, playWrong, playXP };
}

export default useSound;

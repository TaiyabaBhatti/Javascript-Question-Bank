// using webAudio APi

const audioCtx = new window.AudioContext();

function playSound(frequency = 440, duration = 0.5) {
  const oscillatorDevice = audioCtx.createOscillator();
  const envelop = audioCtx.createGain();

  oscillatorDevice.connect(envelop);
  envelop.connect(audioCtx.destination);

  envelop.gain.setValueAtTime(0, audioCtx.currentTime);
  envelop.gain.linearRampToValueAtTime(0.05, audioCtx.currentTime + 0.05);
  envelop.gain.linearRampToValueAtTime(0, audioCtx.currentTime + duration);

  oscillatorDevice.frequency.setValueAtTime(frequency, audioCtx.currentTime);
  oscillatorDevice.start();
  oscillatorDevice.stop(audioCtx.currentTime + duration);
}

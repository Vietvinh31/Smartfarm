from pathlib import Path
import math,wave,struct,subprocess,json
out=Path('assets/video');tmp=Path('tools/film-work');tmp.mkdir(exist_ok=True)
rate=22050;duration=28
with wave.open(str(tmp/'music.wav'),'w') as w:
 w.setparams((1,2,rate,0,'NONE','not compressed'))
 notes=[261.63,329.63,392,523.25,220,261.63,329.63,440,174.61,220,261.63,349.23,196,246.94,293.66,392]
 data=bytearray()
 for i in range(rate*duration):
  t=i/rate;beat=int(t/0.5);age=t%0.5;f=notes[beat%len(notes)]
  v=(math.sin(2*math.pi*f*age)+.25*math.sin(4*math.pi*f*age))*math.exp(-age*7)*min(1,age*80)
  v*=min(1,t/1.5,(duration-t)/2)*.19
  data.extend(struct.pack('<h',int(v*32767)))
 w.writeframes(data)
shots=[(out/'title.png',3),('assets/images/seed-selection.webp',4),('assets/images/led.webp',4),('assets/images/care-check.webp',4),('assets/images/harvest.webp',4),('assets/images/packaging.webp',4),('assets/images/table.webp',2),(out/'ending.png',3)]
for i,(src,d) in enumerate(shots):
 filt=f'scale=1400:788:force_original_aspect_ratio=increase,crop=1400:788,zoompan=z=1.02+0.00015*on:x=iw/2-iw/zoom/2:y=ih/2-ih/zoom/2:d={d*25}:s=1280x720:fps=25,fade=t=in:st=0:d=0.3,fade=t=out:st={d-.3}:d=0.3,format=yuv420p'
 subprocess.run(['ffmpeg','-y','-loglevel','error','-i',str(src),'-vf',filt,'-t',str(d),'-an','-c:v','libx264','-preset','fast','-crf','23',str(tmp/f'{i}.mp4')],check=True)
 print('Scene',i,flush=True)
(tmp/'list.txt').write_text(''.join(f"file '{i}.mp4'\n" for i in range(8)))
subprocess.run(['ffmpeg','-y','-loglevel','error','-f','concat','-safe','0','-i',str(tmp/'list.txt'),'-i',str(tmp/'music.wav'),'-map','0:v','-map','1:a','-c:v','copy','-c:a','aac','-b:a','96k','-t','28','-movflags','+faststart',str(out/'uom-xanh-brand.mp4')],check=True)
probe=subprocess.check_output(['ffprobe','-v','quiet','-show_format','-show_streams','-of','json',str(out/'uom-xanh-brand.mp4')]);Path('docs/audit/video-probe.json').write_bytes(probe)

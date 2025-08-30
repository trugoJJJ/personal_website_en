import React, { useEffect, useState, useRef } from 'react';

const rand = (min: number, max: number) => Math.random() * (max - min) + min;

const useDarkMode = () => {
  const is = () => document.documentElement.classList.contains('dark');
  const [dark, setDark] = useState(is());
  useEffect(() => {
    const mo = new MutationObserver(() => setDark(is()));
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => mo.disconnect();
  }, []);
  return dark;
};

const MAPLE_COLORS = ['#8A4B21', '#6B3618', '#9C5D28']; // stonowane, bardziej realistyczne kontury

const LEAF_IMAGES = [
  '/leafs/1.svg',
];

const ENABLE_LEAVES = false; // feature flag to temporarily disable leaves

interface Leaf { id:number; size:number; duration:number; rotStart:number; rotEnd:number; img:string; vars: Record<string,string>; fleeing?: boolean; }

export const SeasonalBackground: React.FC = () => {
  const dark = useDarkMode();
  const [leaves, setLeaves] = useState<Leaf[]>([]);
  const timeoutRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const maxLeaves = 40;

  const randomFrom = <T,>(arr:T[]) => arr[Math.floor(Math.random()*arr.length)];

  const spawnLeaf = () => {
    if(!ENABLE_LEAVES) return; // guard
    const size = 60 + Math.random()*60; // 60–120px
    const dur = 16 + Math.random()*2;   // 16–18s
    // start position numeric (0–100) then choose direction and monotonic steps
    const startXNum = Math.random()*100;
    const direction = Math.random() < 0.5 ? -1 : 1; // left or right
    const step = () => (15 + Math.random()*20) * direction; // 15–35vw per segment
    const x1Num = startXNum + step();
    const x2Num = x1Num + step();
    const x3Num = x2Num + step();
    const x4Num = x3Num + step();
    // Convert to vw strings (allow overshoot beyond viewport – no clamping)
    const startX = startXNum.toFixed(2) + 'vw';
    const xAbs1 = x1Num.toFixed(2) + 'vw';
    const xAbs2 = x2Num.toFixed(2) + 'vw';
    const xAbs3 = x3Num.toFixed(2) + 'vw';
    const xAbs4 = x4Num.toFixed(2) + 'vw';
    const rotStart = Math.floor(Math.random()*360);
    const rotEnd = rotStart + (Math.random()>0.5? 1080 : -1080);
    const img = randomFrom(LEAF_IMAGES);
    const leaf: Leaf = { id: Date.now() + Math.floor(Math.random()*1000), size, duration: dur, rotStart, rotEnd, img, vars: { '--x0': startX, '--x1': xAbs1, '--x2': xAbs2, '--x3': xAbs3, '--x4': xAbs4, '--rotStart': rotStart + 'deg', '--rotEnd': rotEnd + 'deg', '--fallDur': dur + 's', '--stemRot': (Math.random()*30 - 15).toFixed(1) + 'deg', '--leaf-h': (20 + Math.random()*30).toFixed(1), '--leaf-s': (40 + Math.random()*25).toFixed(1), '--leaf-l1': (45 + Math.random()*15).toFixed(1), '--leaf-l2': (30 + Math.random()*15).toFixed(1), } };
    setLeaves([leaf]);
    if(timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(spawnLeaf, 20000) as unknown as number;
  };

  // Scheduling: first leaf after 20s, then chain inside spawnLeaf every 20s
  useEffect(()=>{
    if (typeof window === 'undefined') return;
    if(!ENABLE_LEAVES){
      if(timeoutRef.current) clearTimeout(timeoutRef.current);
      setLeaves([]);
      return; // no scheduling
    }
    if(timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(spawnLeaf, 20000) as unknown as number;
    return ()=> { if(timeoutRef.current) clearTimeout(timeoutRef.current); };
  },[dark]);

  const removeLeaf = (id:number) => setLeaves(prev=>prev.filter(l=>l.id!==id));

  const handleAnimationEnd = (id:number) => removeLeaf(id);

  // Ucieczka przed kursorem – nasłuch globalny mousemove
  useEffect(()=>{
    const handleMove = (e:MouseEvent) => {
      const cx = e.clientX; const cy = e.clientY;
      if(!containerRef.current) return;
      const elements = containerRef.current.querySelectorAll<HTMLSpanElement>('.spring-leaf');
      elements.forEach(el => {
        if(el.dataset.flee==='1') return;
        const rect = el.getBoundingClientRect();
        const lx = rect.left + rect.width/2; const ly = rect.top + rect.height/2;
        const dx = cx - lx; const dy = cy - ly; const dist = Math.hypot(dx,dy);
        if(dist < 120){
          // Kierunek przeciwny do kursora
            const dirX = dx === 0 ? (Math.random()<0.5?-1:1) : -dx/Math.abs(dx);
            const dirY = dy === 0 ? -1 : -dy/Math.abs(dy);
            const offX = (dirX>0? 140 : -140) + 'vw';
            const offY = (dirY<0? -40 : 40) + 'vh';
            el.style.setProperty('--offX', offX);
            el.style.setProperty('--offY', offY);
            el.classList.add('departing');
            el.dataset.flee='1';
            // Usuwamy po zakończeniu animacji odlotu
            setTimeout(()=>{
              const id = Number(el.dataset.id);
              removeLeaf(id);
            }, 1500);
        }
      });
    };
    window.addEventListener('mousemove', handleMove);
    return ()=> window.removeEventListener('mousemove', handleMove);
  },[]);

  return (
    <div className="spring-bg" aria-hidden="true" ref={containerRef}>
      {ENABLE_LEAVES && leaves.map(l => (
        <span
          key={l.id}
          data-id={l.id}
          className="spring-leaf"
          style={{
            position:'fixed',
            top: 0,
            left: 0,
            width: l.size,
            height: l.size,
            pointerEvents: 'none', // brak bezpośredniego dotyku
            ...l.vars
          } as React.CSSProperties}
          onAnimationEnd={()=> handleAnimationEnd(l.id)}
        >
          <img src={l.img} alt="" draggable={false} style={{width:'100%',height:'100%',objectFit:'contain',pointerEvents:'none', userSelect:'none'}} />
        </span>
      ))}
    </div>
  );
};

export default SeasonalBackground;
import React, { useLayoutEffect, useRef } from 'react'
import { ArrowDownRight, ArrowUpRight, MoveUpRight } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CarIllustration from './components/CarIllustration.jsx'
import MetricCard from './components/MetricCard.jsx'

gsap.registerPlugin(ScrollTrigger)

const metrics = [
  { value: '58%', label: 'FASTER PICKUP', detail: 'Less waiting. More moving.', tone: 'lime' },
  { value: '27%', label: 'MORE REACH', detail: 'Every journey counts.', tone: 'ink' },
  { value: '23%', label: 'BETTER RESPONSE', detail: 'Decisions at full speed.', tone: 'blue' },
  { value: '40%', label: 'LESS FRICTION', detail: 'A smoother way forward.', tone: 'orange' },
]

function App() {
  const pageRef = useRef(null)
  const stageRef = useRef(null)
  const carRef = useRef(null)
  const roadRef = useRef(null)
  const titleRef = useRef(null)
  const eyebrowRef = useRef(null)
  const metricsRef = useRef(null)
  const progressRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // The headline introduces the experience; the four metrics are intentionally
      // revealed by scroll, not all at once on page load.
      gsap.set(metricsRef.current.children, { autoAlpha: 0, y: 24, scale: 0.97 })
      gsap.set(carRef.current, { x: 0, rotate: 0 })
      gsap.set(roadRef.current, { scaleX: 0 })
      gsap.set(progressRef.current, { scaleX: 0 })

      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } })
      intro.from(eyebrowRef.current, { y: 18, opacity: 0, duration: 0.55 })
        .from(titleRef.current.querySelectorAll('.title-line'), { yPercent: 110, opacity: 0, duration: 0.8, stagger: 0.12 }, '-=0.2')
        .from('.hero-bottomline', { y: 18, opacity: 0, duration: 0.55 }, '-=0.25')
        .from('.scroll-cue', { opacity: 0, y: 10, duration: 0.35 }, '-=0.1')

      const motion = gsap.timeline({
        scrollTrigger: {
          trigger: stageRef.current,
          start: 'top top',
          end: '+=2200',
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })

      // Each card is a separate beat in the scroll story.
      motion.to(metricsRef.current.children[0], { autoAlpha: 1, y: 0, scale: 1, duration: 0.16, ease: 'power2.out' }, 0.06)
        .to(carRef.current, { x: () => window.innerWidth * 0.22, rotate: 0.4, ease: 'none', duration: 0.22 }, 0.03)
        .to(metricsRef.current.children[1], { autoAlpha: 1, y: 0, scale: 1, duration: 0.16, ease: 'power2.out' }, 0.29)
        .to(carRef.current, { x: () => window.innerWidth * 0.48, rotate: -0.2, ease: 'none', duration: 0.22 }, 0.25)
        .to(metricsRef.current.children[2], { autoAlpha: 1, y: 0, scale: 1, duration: 0.16, ease: 'power2.out' }, 0.52)
        .to(carRef.current, { x: () => window.innerWidth * 0.74, rotate: 0.3, ease: 'none', duration: 0.22 }, 0.48)
        .to(metricsRef.current.children[3], { autoAlpha: 1, y: 0, scale: 1, duration: 0.16, ease: 'power2.out' }, 0.75)
        .to(carRef.current, { x: () => window.innerWidth * 1.12, rotate: 0, ease: 'none', duration: 0.24 }, 0.72)
        .to(roadRef.current, { scaleX: 1, ease: 'none', duration: 0.8 }, 0)
        .to(titleRef.current, { x: () => -Math.min(window.innerWidth * 0.07, 100), opacity: 0.42, ease: 'none', duration: 0.5 }, 0.42)
        .to('.road-label', { opacity: 1, y: 0, ease: 'none', duration: 0.12 }, 0.78)
        .to(progressRef.current, { scaleX: 1, ease: 'none', duration: 1 }, 0)

      gsap.from('.story-copy > *', {
        y: 26, opacity: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.story-section', start: 'top 70%' },
      })
    }, pageRef)
    return () => ctx.revert()
  }, [])

  return (
    <main ref={pageRef}>
      <section className="motion-stage" ref={stageRef}>
        <header className="site-header">
          <a className="brand" href="#top" aria-label="Itzfizz home"><span className="brand-mark">i<span>.</span></span><span className="brand-name">itzfizz<span>®</span></span></a>
          <div className="header-note"><span className="status-light" /> DIGITAL EXPERIENCES, IN MOTION</div>
          <a className="header-link" href="#about">Explore the work <ArrowUpRight size={15} /></a>
        </header>

        <div className="hero-content" id="top">
          <div className="hero-copy">
            <p className="eyebrow" ref={eyebrowRef}><span className="eyebrow-rule" /> SCROLL TO SHIFT THE PERSPECTIVE <span className="eyebrow-number">/ 001</span></p>
            <h1 className="hero-title" ref={titleRef}>
              <span className="title-mask"><span className="title-line">WELCOME</span></span>
              <span className="title-mask title-second"><span className="title-line">TO ITZFIZZ<span className="title-period">.</span></span></span>
            </h1>
            <div className="hero-bottomline">
              <p>A little less ordinary.<br />A lot more in motion.</p>
              <div className="hero-side-note">SCROLL-DRIVEN<br />MOTION STUDY</div>
            </div>
          </div>

          <div className="metrics-grid" ref={metricsRef} aria-label="Performance metrics">
            {metrics.map((metric, index) => <MetricCard key={metric.label} {...metric} index={index + 1} />)}
          </div>
        </div>

        <div className="scroll-cue"><span className="scroll-cue-icon"><ArrowDownRight size={17} /></span><span>KEEP SCROLLING</span><span className="scroll-cue-line" /></div>

        <div className="road-scene" aria-label="Animated orange car travelling along a dark road">
          <div className="road-caption road-caption-left">MOTION IS A MINDSET</div>
          <div className="road-caption road-caption-right">SCROLL / 001—004</div>
          <div className="road-surface"><div className="road-centre-line" /><div className="road-glow" ref={roadRef} /></div>
          <div className="road-label">MAKE<br />SOME<br /><em>MOVEMENT.</em><span>GOOD IDEAS SHOULDN'T STAND STILL.</span></div>
          <div className="car-wrap" ref={carRef}><CarIllustration /></div>
        </div>
        <div className="stage-footer"><span>INDEPENDENT BY NATURE</span><span>DESIGNED TO MOVE PEOPLE</span><span>© ITZFIZZ 2026</span></div>
        <div className="scroll-progress"><span ref={progressRef} /></div>
      </section>

      <section className="story-section" id="about">
        <div className="story-index"><span>01 / THE IDEA</span><MoveUpRight size={18} /></div>
        <div className="story-copy">
          <p className="story-kicker">BUILT AROUND MOMENTUM</p>
          <h2>Good design catches your eye.<br /><span>Great motion keeps it.</span></h2>
          <p className="story-description">This experience turns a simple scroll into a journey. Typography, data and a custom-drawn performance car work together in one continuous scene — built with React, GSAP and a little curiosity.</p>
          <a className="story-link" href="#top">Back to the beginning <ArrowUpRight size={16} /></a>
        </div>
        <div className="story-side"><div className="side-orbit"><span>SCROLL</span><span>TO</span><span>EXPLORE</span></div><p>AN INTERACTIVE<br />WEB EXPERIMENT</p></div>
      </section>

      <footer className="site-footer"><span className="footer-brand">itzfizz<span>.</span></span><span>CRAFTED WITH INTENTION — 2026</span><span>REACT / GSAP / CSS</span></footer>
    </main>
  )
}

export default App

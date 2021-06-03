import {useSlider} from "../hooks/useSlider";
import c from './Slider.module.css'
import {useEffect, useRef, useState} from "react";
import smoothScroll from 'smoothscroll-polyfill';

if (typeof window === 'object' && navigator.userAgent.toLowerCase().includes('safari')) {
    smoothScroll.polyfill();
    window.__forceSmoothScrollPolyfill__ = true;
}

const arrowRight = <svg viewBox="0 0 16 16" role="presentation" aria-hidden="true" focusable="false" style={{height: '14px', width: '14px', display: 'block', fill: '#efc426'}}><path d="m5.3 16c .3 0 .6-.1.8-.4l6.8-6.7c.5-.5.5-1.3 0-1.8l-6.8-6.7c-.5-.5-1.2-.5-1.7 0s-.5 1.2 0 1.7l5.8 5.9-5.8 5.9c-.5.5-.5 1.2 0 1.7.2.3.5.4.9.4"></path></svg>
const arrowLeft = <svg viewBox="0 0 16 16" role="presentation" aria-hidden="true" focusable="false" style={{height: '14px', width: '14px', display: 'block', fill: '#efc426'}}><path d="m10.8 16c-.4 0-.7-.1-.9-.4l-6.8-6.7c-.5-.5-.5-1.3 0-1.8l6.8-6.7c.5-.5 1.2-.5 1.7 0s .5 1.2 0 1.7l-5.8 5.9 5.8 5.9c.5.5.5 1.2 0 1.7-.2.3-.5.4-.8.4"></path></svg>
const refresh = <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" style={{height: '20px', width: '20px', display: 'block', fill: '#efc426'}}><g data-name="Layer 2"><g data-name="refresh"><rect width="24" height="24" opacity="0"/><path d="M20.3 13.43a1 1 0 0 0-1.25.65A7.14 7.14 0 0 1 12.18 19 7.1 7.1 0 0 1 5 12a7.1 7.1 0 0 1 7.18-7 7.26 7.26 0 0 1 4.65 1.67l-2.17-.36a1 1 0 0 0-1.15.83 1 1 0 0 0 .83 1.15l4.24.7h.17a1 1 0 0 0 .34-.06.33.33 0 0 0 .1-.06.78.78 0 0 0 .2-.11l.09-.11c0-.05.09-.09.13-.15s0-.1.05-.14a1.34 1.34 0 0 0 .07-.18l.75-4a1 1 0 0 0-2-.38l-.27 1.45A9.21 9.21 0 0 0 12.18 3 9.1 9.1 0 0 0 3 12a9.1 9.1 0 0 0 9.18 9A9.12 9.12 0 0 0 21 14.68a1 1 0 0 0-.7-1.25z"/></g></g></svg>


export function Slider(props) {
    const { data, options } = props
    const ref = useRef(null)

    const [ state, setState ] = useState({
        active: 0,
        transformTranslate: 0.0,
        halfContainer: null,
        lastItem: false,
        showNav: true
    })

    useEffect(() => {
        if (state.halfContainer === null) setState(s => ({...s, halfContainer: navigator.userAgent.toLowerCase().includes('safari') ? ref.current.offsetWidth : ref.current.offsetWidth / 2}))

        // console.log(ref.current.scrollWidth, ref.current.scrollLeft, ref.current.clientWidth)
        ref.current.addEventListener('scroll', setActiveItem)
        return () => { ref.current.removeEventListener('scroll', setActiveItem) }
    }, [setActiveItem])

    useEffect(() => {
        window.addEventListener('resize', resizeHandler)
        return () => { window.removeEventListener('resize', resizeHandler) }
    }, [resizeHandler])

    function resizeHandler() {
        setState(s => ({...s, halfContainer: navigator.userAgent.toLowerCase().includes('safari') ? ref.current.offsetWidth : ref.current.offsetWidth / 2}))
    }

    // const showNavHandler = (showNav) => {
    //     if ((state.showNav && !showNav) || (!state.showNav && showNav)) {
    //         setState(s => ({
    //             ...s,
    //             showNav
    //         }))
    //     }
    // }

    const toHandler = (direction) => {
        if (direction === 'start') {
            return ref.current.scrollTo({
                left: 0,
                behavior: 'smooth'
            })
        }

        ref.current.scrollBy({
            left: direction === 'next' ? state.halfContainer : -state.halfContainer,
            behavior: 'smooth'
        })
        setActiveItem()
    }

    function setActiveItem() {
        const currentItem = +((ref.current.scrollLeft) / ref.current.clientWidth).toFixed()

        if (currentItem !== state.active) {
            const nextPoint = currentItem > 2 && currentItem <= data.length - 1 - 2 && currentItem > state.active
            const previousPoint = currentItem >= 2 && currentItem < data.length - 1 - 2 && currentItem < state.active
            const transformTranslate =
                nextPoint ? state.transformTranslate - 1.4 :
                    previousPoint ? state.transformTranslate + 1.4 : state.transformTranslate

            setState(s => ({
                ...s,
                active: currentItem,
                transformTranslate: +transformTranslate.toFixed(1)
            }))
        }

        if (currentItem === data.length - 1) {
            setState(s => ({...s, lastItem: true}))
        } else if (currentItem === data.length - 2) {
            setState(s => ({...s, lastItem: false}))
        }
    }

    return (
        // <div className={c.slider} onMouseOver={(e) => showNavHandler(true, e)} onMouseOut={(e) => showNavHandler(false, e)}>
        <div className={c.slider}>
            <div className={c.content} ref={ref}>
                {data.map((item, index) => (
                    <div key={index} className={c.item}>
                        <img
                            src={item}
                            className={c.image}
                            // loading="lazy"
                            alt=""/>
                        <div className={c.navigation}>
                            <div onClick={() => toHandler('previous')} />
                            <div onClick={() => toHandler('next')} />
                        </div>
                    </div>
                ))}
            </div>
            <div className={c.arrows}>
                {state.showNav && (
                    <>
                        <button className={c.arrowButton} onClick={() => toHandler('previous')}>{arrowLeft}</button>
                        {state.lastItem ? (
                            <div><button className={c.arrowButton} onClick={() => toHandler('start')}>{refresh}</button></div>
                        ) : (
                            <button className={c.arrowButton} onClick={() => toHandler('next')}>{arrowRight}</button>
                        )}
                    </>
                )}
            </div>
            <div className={c.indicatorWrapper}>
                <div className={c.indicator} style={{transform: `translateX(${state.transformTranslate}rem)`}}>
                    {data.map((item, index) => (
                        <span key={index} className={index === state.active ? `${c.point} ${c.pointActive}` : (index === state.active + 1) || (index === state.active - 1) ? `${c.point} ${c.pointNeighbor}` : (index === state.active + 2) || (index === state.active - 2) ? `${c.point} ${c.pointNear}` : `${c.point}`} />
                    ))}
                </div>
            </div>
        </div>
    )
}

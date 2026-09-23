import { A11y, Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules'

export const swiperModules = [Navigation, Pagination, Keyboard, A11y, Autoplay]

// Shared Swiper setup for every slider on the site: 4s autoplay, keyboard/swipe
// navigation, and accessible arrows/bullets. Respects prefers-reduced-motion by
// dropping autoplay entirely instead of just slowing it down.
export function createSwiperConfig(overrides = {}) {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return {
    modules: swiperModules,
    loop: true,
    grabCursor: true,
    keyboard: { enabled: true },
    navigation: true,
    pagination: { clickable: true },
    a11y: {
      enabled: true,
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      paginationBulletMessage: 'Go to slide {{index}}',
    },
    autoplay: prefersReducedMotion
      ? false
      : { delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true },
    ...overrides,
  }
}

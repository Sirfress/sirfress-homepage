// components/HeroSlider.js
import { motion } from 'framer-motion'

const slides = [
  {
    heading: 'Welcome to Sirfress Web Solutions',
    subheading: 'Building powerful, responsive and high-performing websites.',
    primary: 'Explore Services',
    secondary: 'Reach Us',
  },
  // Add more slides...
]

export default function HeroSlider() {
  return (
    <div className="bg-background text-textLight">
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.3 }}
          className="p-10 text-center"
        >
          <h1 className="text-4xl font-bold text-primary mb-4">{slide.heading}</h1>
          <p className="mb-6">{slide.subheading}</p>
          <div className="space-x-4">
            <button className="bg-primary hover:bg-interactive px-4 py-2 rounded">
              {slide.primary}
            </button>
            <button className="bg-secondary hover:bg-info px-4 py-2 rounded">
              {slide.secondary}
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

// components/ServiceCards.js
import { motion } from 'framer-motion'
import { CodeIcon, DeviceMobileIcon, PaintBrushIcon, TemplateIcon } from '@heroicons/react/outline'

const services = [
  { title: 'Web Development', icon: <CodeIcon className="h-8 w-8 text-primary" /> },
  { title: 'App Development', icon: <DeviceMobileIcon className="h-8 w-8 text-primary" /> },
  { title: 'Graphic Design', icon: <PaintBrushIcon className="h-8 w-8 text-primary" /> },
  { title: 'UI/UX Design', icon: <TemplateIcon className="h-8 w-8 text-primary" /> },
]

export default function ServiceCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-10">
      {services.map((service, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="bg-background border border-primary p-6 rounded shadow-lg text-center"
        >
          {service.icon}
          <h3 className="text-primary mt-4 text-xl font-semibold">{service.title}</h3>
          <p className="text-textLight mt-2">Learn more about our {service.title.toLowerCase()} services.</p>
        </motion.div>
      ))}
    </div>
  )
}

'use client'

import { motion } from 'framer-motion'
import { Metadata } from 'next'
import Link from 'next/link'

// Dados dos links
const links = [
  {
    id: 'whatsapp',
    href: 'https://wa.me/554133293438?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20na%20Cia%20da%20Barba',
    label: 'Agendar Agora',
    icon: 'whatsapp',
    primary: true,
    external: true
  },
  {
    id: 'planos',
    href: 'https://ciadabarba.com/planos',
    label: 'Assinar Planos',
    icon: 'subscription',
    external: true
  },
  {
    id: 'servicos',
    href: 'https://ciadabarba.com/servicos',
    label: 'Serviços',
    icon: 'services',
    external: true
  },
  {
    id: 'equipe',
    href: 'https://ciadabarba.com/equipe',
    label: 'Nossa Equipe',
    icon: 'team',
    external: true
  },
  {
    id: 'localizacao',
    href: 'https://goo.gl/maps/exemplo-cia-da-barba', // TODO: Substituir pela URL real
    label: 'Localização',
    icon: 'location',
    external: true
  },
  {
    id: 'instagram',
    href: 'https://instagram.com/ciadabarbacwb',
    label: 'Instagram',
    icon: 'instagram',
    external: true
  },
  {
    id: 'beacons',
    href: 'https://beacons.ai/ciadabarbacwb',
    label: 'Todos os Links',
    icon: 'link',
    external: true
  }
]

// Componente de ícones
const Icon = ({ name, className = "w-5 h-5 fill-current" }: { name: string, className?: string }) => {
  const icons = {
    whatsapp: (
      <svg className={className} viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.531 3.506"/>
      </svg>
    ),
    instagram: (
      <svg className={className} viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    subscription: (
      <svg className={className} viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    ),
    services: (
      <svg className={className} viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    team: (
      <svg className={className} viewBox="0 0 24 24">
        <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.5 7H17c-.8 0-1.5.7-1.5 1.5v6c0 .8.7 1.5 1.5 1.5h1v6h2zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zm1.5 1h-2c-.83 0-1.5.67-1.5 1.5v6h2v7h1v-7h2v-6c0-.83-.67-1.5-1.5-1.5zM6 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm2.5 7.5H7c-.8 0-1.5.7-1.5 1.5v6c0 .8.7 1.5 1.5 1.5h1v6h2v-6h.5c.8 0 1.5-.7 1.5-1.5v-6c0-.8-.7-1.5-1.5-1.5z"/>
      </svg>
    ),
    location: (
      <svg className={className} viewBox="0 0 24 24">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    ),
    link: (
      <svg className={className} viewBox="0 0 24 24">
        <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
      </svg>
    ),
    clock: (
      <svg className={className} viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    ),
    phone: (
      <svg className={className} viewBox="0 0 24 24">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
      </svg>
    )
  }
  
  return icons[name as keyof typeof icons] || null
}

// Componente do botão de link
interface LinkButtonProps {
  href: string
  label: string
  icon?: string
  primary?: boolean
  external?: boolean
  delay?: number
}

const LinkButton = ({ href, label, icon, primary = false, external = false, delay = 0 }: LinkButtonProps) => {
  const buttonClass = `link-btn ${primary ? 'btn-primary' : 'btn-secondary'}`
  
  const buttonContent = (
    <span className="flex items-center justify-center gap-3">
      {icon && <Icon name={icon} />}
      {label}
    </span>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {external ? (
        <a
          href={href}
          className={buttonClass}
          aria-label={label}
          target="_blank"
          rel="noopener noreferrer"
        >
          {buttonContent}
        </a>
      ) : (
        <Link href={href} className={buttonClass} aria-label={label}>
          {buttonContent}
        </Link>
      )}
    </motion.div>
  )
}

// Componente QR Code
const QRCode = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: 0.8 }}
    className="mt-8 text-center"
  >
    <p className="text-gray-400 text-sm mb-2">Compartilhe este link:</p>
    <div className="inline-block bg-white p-4 rounded-2xl">
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
        <rect width="120" height="120" fill="white"/>
        <rect x="10" y="10" width="20" height="20" fill="black"/>
        <rect x="40" y="10" width="10" height="10" fill="black"/>
        <rect x="60" y="10" width="10" height="10" fill="black"/>
        <rect x="80" y="10" width="20" height="20" fill="black"/>
        <rect x="10" y="40" width="10" height="10" fill="black"/>
        <rect x="30" y="40" width="10" height="10" fill="black"/>
        <rect x="50" y="40" width="20" height="10" fill="black"/>
        <rect x="80" y="40" width="10" height="10" fill="black"/>
        <rect x="100" y="40" width="10" height="10" fill="black"/>
        <rect x="10" y="60" width="10" height="10" fill="black"/>
        <rect x="30" y="60" width="20" height="10" fill="black"/>
        <rect x="60" y="60" width="10" height="10" fill="black"/>
        <rect x="80" y="60" width="10" height="10" fill="black"/>
        <rect x="100" y="60" width="10" height="10" fill="black"/>
        <rect x="10" y="80" width="20" height="20" fill="black"/>
        <rect x="40" y="80" width="10" height="10" fill="black"/>
        <rect x="60" y="80" width="10" height="10" fill="black"/>
        <rect x="80" y="80" width="20" height="20" fill="black"/>
        <text x="60" y="115" textAnchor="middle" fontSize="8" fill="black">ciadabarba.com/links</text>
      </svg>
    </div>
  </motion.div>
)

// Página principal
export default function LinksPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
      
      {/* Header/Hero */}
      <motion.header 
        className="text-center mb-8 max-w-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="hero-badge">
          Clube de Assinaturas · +300 membros
        </div>
        
        <h1 className="text-4xl font-bold font-poppins mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Cia da Barba
        </h1>
        <p className="text-xl text-gray-300 mb-1">Curitiba</p>
        
        <div className="mt-4 space-y-2 text-gray-300">
          <p className="flex items-center justify-center gap-2">
            <Icon name="clock" className="w-4 h-4 fill-brand" />
            TER à SAB, 9h–19h
          </p>
          <a 
            href="tel:+554133293438" 
            className="flex items-center justify-center gap-2 text-brand hover:text-orange-400 transition-colors"
          >
            <Icon name="phone" className="w-4 h-4 fill-current" />
            (41) 3329-3438
          </a>
        </div>
      </motion.header>

      {/* Links principais */}
      <main className="w-full max-w-md">
        <div className="md:grid md:grid-cols-2 md:gap-4">
          {links.map((link, index) => (
            <div key={link.id} className={link.primary ? 'md:col-span-2' : ''}>
              <LinkButton
                href={link.href}
                label={link.label}
                icon={link.icon}
                primary={link.primary}
                external={link.external}
                delay={index * 0.1}
              />
            </div>
          ))}
        </div>
      </main>

      {/* QR Code */}
      <QRCode />

      {/* Footer */}
      <motion.footer 
        className="mt-8 text-center text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <div className="mb-4">
          <p className="text-sm font-medium">Bairro Portão – Curitiba, PR</p>
          <p className="text-xs mt-1">R. Exemplo, 123 - CEP 82000-000</p>
        </div>
        
        <div className="flex justify-center items-center gap-4 mb-4">
          <a 
            href="https://instagram.com/ciadabarbacwb" 
            aria-label="Instagram da Cia da Barba"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <Icon name="instagram" className="social-icon" />
          </a>
          
          <a 
            href="https://wa.me/554133293438" 
            aria-label="WhatsApp da Cia da Barba"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <Icon name="whatsapp" className="social-icon" />
          </a>
        </div>
        
        <p className="text-xs">© 2025 Cia da Barba. Todos os direitos reservados.</p>
        <p className="text-xs mt-1">Desenvolvido com ❤️ para barbudos de Curitiba</p>
      </motion.footer>

    </div>
  )
}

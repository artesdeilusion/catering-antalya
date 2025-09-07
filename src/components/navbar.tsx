'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ContactDialog from './ContactDialog';

interface NavItem {
  label: string;
  href?: string;
  dropdown?: {
    label: string;
    href: string;
    description?: string;
  }[];
}

const navItems: NavItem[] = [
 
  {
    label: 'Hakkımızda',
    href: '/about',
  },
  {

    label: 'Menü',
    dropdown: [
      {
        label: 'Aperatifler',
        href: '/menu/appetizers',
        description: 'Start your meal with our signature starters'
      },
      {
        label: 'Ana Yemekler',
        href: '/menu/main-courses',
        description: 'Chef-prepared entrees and specialties'
      },
      {
        label: 'Tatlılar',
        href: '/menu/desserts',
        description: 'Sweet endings to perfect meals'
      },
      {
        label: 'İçecekler',
        href: '/menu/beverages',
        description: 'Refreshing drinks and cocktails'
      }
    ]
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'İletişim',
    href: '/contact',
  }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactSheetOpen, setIsContactSheetOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  const openContactSheet = () => {
    setIsContactSheetOpen(true);
  };

  const closeContactSheet = () => {
    setIsContactSheetOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-lg' 
        : 'bg-white      '
    }`}>
      <div className="max-w-screen-xl mx-auto px-4 ">
        <div className="flex justify-between items-center h-16">

          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <img 
                src="/catering_services/logo.svg" 
                alt="Likya Catering Logo" 
                className="h-9 w-auto"
              />
             </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <div key={item.label} className="relative">
                  {item.dropdown ? (
                    <div className="relative">
                      <button
                        onClick={() => handleDropdownToggle(item.label)}
                        onMouseEnter={() => setActiveDropdown(item.label)}
                        className="text-likya-text-dark hover:text-likya-primary px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center space-x-1 font-body"
                      >
                        <span>{item.label}</span>
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.label ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {/* Dropdown Menu */}
                      <div
                        onMouseLeave={() => setActiveDropdown(null)}
                        className={`absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-likya-primary/20 transition-all duration-200 ${
                          activeDropdown === item.label
                            ? 'opacity-100 visible translate-y-0'
                            : 'opacity-0 invisible -translate-y-2'
                        }`}
                      >
                        <div className="py-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.label}
                              href={dropdownItem.href}
                              onClick={closeDropdowns}
                              className="block px-4 py-3 text-sm text-likya-text-dark hover:bg-likya-primary/5 hover:text-likya-primary transition-colors duration-150 font-body"
                            >
                              <div className="font-medium">{dropdownItem.label}</div>
                              {dropdownItem.description && (
                                <div className="text-xs text-gray-500 mt-1">
                                  {dropdownItem.description}
                                </div>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href || '#'}
                      className="text-likya-text-dark hover:text-likya-primary px-3 py-2 text-sm font-medium transition-colors duration-200 font-body"
                    >
                      {item.label}
                    </Link>
                  )}
                  
                </div>
                
              ))}
                 <div className="hidden md:block">
            <button
              onClick={openContactSheet}
              className="bg-likya-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-likya-secondary transition-all duration-200 shadow-lg hover:shadow-xl font-body"
            >
              Teklif Alın
            </button>
          </div>
            </div>
            
          </div>


        

          {/* Mobile menu button */}
          <div className="md:hidden pt-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-likya-text-dark hover:text-likya-primary focus:outline-none focus:text-likya-primary"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ${
        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-likya-primary/20">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.dropdown ? (
                <div>
                  <button
                    onClick={() => handleDropdownToggle(item.label)}
                    className="w-full text-left text-likya-text-dark hover:text-likya-primary block px-3 py-2 text-base font-medium flex items-center justify-between font-body"
                  >
                    <span>{item.label}</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`pl-4 space-y-1 ${
                    activeDropdown === item.label ? 'block' : 'hidden'
                  }`}>
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.label}
                        href={dropdownItem.href}
                        onClick={() => {
                          setIsOpen(false);
                          closeDropdowns();
                        }}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-likya-primary hover:bg-likya-primary/5 rounded-md font-body"
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={item.href || '#'}
                  onClick={() => setIsOpen(false)}
                  className="text-likya-text-dark hover:text-likya-primary block px-3 py-2 text-base font-medium font-body"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <div className="pt-4">
            <button
              onClick={() => {
                openContactSheet();
                setIsOpen(false);
              }}
              className="w-full bg-likya-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-likya-secondary transition-all duration-200 text-center block font-body"
            >
              Teklif Alın
            </button>
          </div>
        </div>
      </div>
      
      {/* Contact Dialog */}
      <ContactDialog 
        isOpen={isContactSheetOpen} 
        onClose={closeContactSheet} 
      />
    </nav>
  );
}
    
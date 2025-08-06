import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Menu = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ChefHat className="h-8 w-8 text-restaurant-gold" />
              <h1 className="text-2xl font-bold text-restaurant-brown">Savoria</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-restaurant-brown hover:text-restaurant-gold transition-colors">
                Home
              </Link>
              <Link to="/menu" className="text-restaurant-gold font-medium">
                Menu
              </Link>
              <Link to="/about" className="text-restaurant-brown hover:text-restaurant-gold transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-restaurant-brown hover:text-restaurant-gold transition-colors">
                Contact
              </Link>
              <Button className="bg-restaurant-gold hover:bg-restaurant-gold-dark text-white">
                Reserve Table
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Menu Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-restaurant-brown mb-6">Our Menu</h2>
          <div className="bg-restaurant-cream rounded-lg p-12 mb-8">
            <ChefHat className="h-16 w-16 text-restaurant-gold mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-restaurant-brown mb-4">Coming Soon</h3>
            <p className="text-restaurant-brown/80 mb-6">
              We're currently crafting our complete menu page with detailed descriptions of all our signature dishes, 
              appetizers, main courses, and desserts. Stay tuned for the full culinary experience!
            </p>
            <p className="text-sm text-restaurant-brown/60 mb-8">
              In the meantime, you can view our featured dishes on the homepage or contact us directly for current menu options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button className="bg-restaurant-gold hover:bg-restaurant-gold-dark text-white">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
              <Button variant="outline" className="border-restaurant-gold text-restaurant-gold hover:bg-restaurant-gold hover:text-white">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-restaurant-brown-light py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <ChefHat className="h-6 w-6 text-restaurant-gold" />
              <span className="text-xl font-bold text-restaurant-brown">Savoria</span>
            </div>
            <p className="text-restaurant-brown/80 text-center md:text-right">
              © 2024 Savoria Restaurant. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Menu;

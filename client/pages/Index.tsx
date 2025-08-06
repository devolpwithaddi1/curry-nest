import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Clock,
  MapPin,
  Phone,
  Star,
  ChefHat,
  Utensils,
  Award,
  Calendar,
  Menu,
  X
} from 'lucide-react';

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

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
              <Link to="/menu" className="text-restaurant-brown hover:text-restaurant-gold transition-colors">
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

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-restaurant-brown" />
              ) : (
                <Menu className="h-6 w-6 text-restaurant-brown" />
              )}
            </button>
          </div>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t bg-white">
              <div className="px-4 py-6 space-y-4">
                <Link
                  to="/"
                  className="block text-restaurant-brown hover:text-restaurant-gold transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/menu"
                  className="block text-restaurant-brown hover:text-restaurant-gold transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Menu
                </Link>
                <Link
                  to="/about"
                  className="block text-restaurant-brown hover:text-restaurant-gold transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="block text-restaurant-brown hover:text-restaurant-gold transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <Button className="w-full bg-restaurant-gold hover:bg-restaurant-gold-dark text-white">
                  Reserve Table
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect fill="%23D4B996" width="1200" height="800"/><circle fill="%23E6D3B7" cx="300" cy="200" r="150"/><circle fill="%23C7A882" cx="900" cy="600" r="200"/><polygon fill="%23B8956C" points="600,100 700,300 500,300"/></svg>')`
          }}
        />
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h2 className="text-6xl md:text-8xl font-bold mb-6">
            Fine Dining
            <span className="block text-restaurant-gold">Experience</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
            Indulge in culinary excellence with our chef's carefully crafted dishes, 
            made from the finest locally sourced ingredients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-restaurant-gold hover:bg-restaurant-gold-dark text-white px-8 py-4 text-lg">
              <Calendar className="mr-2 h-5 w-5" />
              Book a Table
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-restaurant-brown px-8 py-4 text-lg">
              <Utensils className="mr-2 h-5 w-5" />
              View Menu
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-restaurant-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-restaurant-brown mb-4">Why Choose Savoria</h3>
            <p className="text-xl text-restaurant-brown/80 max-w-2xl mx-auto">
              We combine traditional cooking techniques with modern presentation to create 
              an unforgettable dining experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-up">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-restaurant-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <ChefHat className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-restaurant-brown mb-4">Expert Chefs</h4>
                <p className="text-restaurant-brown/80">
                  Our world-class chefs bring decades of experience and passion to every dish.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-up">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-restaurant-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <Utensils className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-restaurant-brown mb-4">Fresh Ingredients</h4>
                <p className="text-restaurant-brown/80">
                  We source only the finest, locally-grown ingredients for authentic flavors.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-up">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-restaurant-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-restaurant-brown mb-4">Award Winning</h4>
                <p className="text-restaurant-brown/80">
                  Recognized with multiple culinary awards for excellence in fine dining.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-restaurant-brown mb-4">Signature Dishes</h3>
            <p className="text-xl text-restaurant-brown/80 max-w-2xl mx-auto">
              Discover our most beloved creations, crafted with passion and precision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Truffle Risotto",
                price: "$32",
                description: "Creamy arborio rice with wild mushrooms and black truffle oil",
                rating: 4.9,
                image: "https://cdn.builder.io/api/v1/image/assets%2F8236a4dfb53a4dbe8eed7e6097b46c07%2F04ccef084f864ea9bf5866da3203a8be?format=webp&width=800"
              },
              {
                name: "Wagyu Beef",
                price: "$65",
                description: "Premium wagyu beef with roasted vegetables and red wine jus",
                rating: 5.0,
                image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><rect fill='%23D4B996' width='400' height='300'/><circle fill='%23C7A882' cx='200' cy='150' r='80'/><text x='200' y='160' font-family='Arial' font-size='16' text-anchor='middle' fill='%23B8956C'>Wagyu</text></svg>"
              },
              {
                name: "Sea Bass",
                price: "$28",
                description: "Pan-seared sea bass with citrus butter and seasonal greens",
                rating: 4.8,
                image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><rect fill='%23C7A882' width='400' height='300'/><circle fill='%23B8956C' cx='200' cy='150' r='80'/><text x='200' y='160' font-family='Arial' font-size='16' text-anchor='middle' fill='%23FFF'>Sea Bass</text></svg>"
              }
            ].map((dish, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src={dish.image} 
                    alt={dish.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 right-4 bg-restaurant-gold text-white">
                    <Star className="h-3 w-3 mr-1" />
                    {dish.rating}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-bold text-restaurant-brown">{dish.name}</h4>
                    <span className="text-2xl font-bold text-restaurant-gold">{dish.price}</span>
                  </div>
                  <p className="text-restaurant-brown/80 mb-4">{dish.description}</p>
                  <Button className="w-full bg-restaurant-gold hover:bg-restaurant-gold-dark text-white">
                    Add to Order
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Hours */}
      <section className="py-20 bg-restaurant-brown text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-8">Visit Us</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-restaurant-gold mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Location</h4>
                    <p className="text-white/80">123 Fine Dining Street<br />Culinary District, CD 12345</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-restaurant-gold mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Reservations</h4>
                    <p className="text-white/80">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-restaurant-gold mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Hours</h4>
                    <div className="text-white/80">
                      <p>Monday - Thursday: 5:00 PM - 10:00 PM</p>
                      <p>Friday - Saturday: 5:00 PM - 11:00 PM</p>
                      <p>Sunday: 4:00 PM - 9:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold mb-8">Make a Reservation</h3>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="date" 
                    className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white"
                  />
                  <input 
                    type="time" 
                    className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white"
                  />
                </div>
                <select className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white">
                  <option value="">Party Size</option>
                  <option value="2">2 People</option>
                  <option value="4">4 People</option>
                  <option value="6">6 People</option>
                  <option value="8">8+ People</option>
                </select>
                <Button className="w-full bg-restaurant-gold hover:bg-restaurant-gold-dark text-white py-4">
                  Reserve Table
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-restaurant-brown-light py-8">
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

export default Index;

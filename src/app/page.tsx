"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, Calendar, MessageSquare, Sparkles, Star, Trophy, Users } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "Experience", id: "experience" },
            { name: "Reviews", id: "reviews" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Grand Luxe Hotel"
          button={{
            text: "Book Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Experience Luxury top Redefined"
          description="Immerse yourself in unparalleled comfort and elegance at Grand Luxe Hotel, where every detail is crafted for your perfect stay."
          tag="5-Star Experience"
          tagIcon={Award}
          buttons={[
            {
              text: "Book Your Stay",
              href: "contact"
            },
            {
              text: "Explore Rooms",
              href: "rooms"
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1761385736037-m7pa6pr0.jpg"
          imageAlt="Elegant hotel lobby with luxurious interior design"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="About Grand Luxe"
          description={[
            "For over two decades, Grand Luxe Hotel has been the epitome of sophisticated hospitality, offering guests an extraordinary blend of timeless elegance and modern luxury.",
            "Our commitment to excellence ensures that every moment of your stay is meticulously crafted, from our world-class amenities to our personalized service that anticipates your every need."
          ]}
          buttons={[
            {
              text: "Our Story",
              href: "about"
            }
          ]}
          showBorder={true}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardThree
          title="Exceptional Amenities"
          description="Discover the finest amenities designed to elevate your stay and create unforgettable memories."
          tag="Premium Services"
          tagIcon={Sparkles}
          features={[
            {
              id: "01",
              title: "24/7 Concierge Service",
              description: "Our dedicated concierge team is available around the clock to assist with reservations, recommendations, and any special requests to make your stay perfect.",
              imageSrc: "https://images.pexels.com/photos/6474521/pexels-photo-6474521.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Professional concierge service"
            },
            {
              id: "02",
              title: "Luxury Spa & Wellness",
              description: "Rejuvenate your mind and body at our world-class spa featuring premium treatments, state-of-the-art fitness center, and tranquil relaxation areas.",
              imageSrc: "https://images.pexels.com/photos/6957079/pexels-photo-6957079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxury spa and wellness center"
            },
            {
              id: "03",
              title: "Fine Dining Excellence",
              description: "Savor exquisite cuisine crafted by renowned chefs at our award-winning restaurants, featuring locally-sourced ingredients and innovative culinary artistry.",
              imageSrc: "https://images.pexels.com/photos/2291636/pexels-photo-2291636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Fine dining restaurant interior"
            }
          ]}
          layout="default"
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardThree
          title="Excellence in Numbers"
          description="Our commitment to exceptional hospitality is reflected in every aspect of our service."
          tag="Awards & Recognition"
          tagIcon={Trophy}
          metrics={[
            {
              id: "1",
              icon: Award,
              title: "Guest Satisfaction",
              value: "98%"
            },
            {
              id: "2",
              icon: Star,
              title: "5-Star Reviews",
              value: "2,500+"
            },
            {
              id: "3",
              icon: Users,
              title: "Happy Guests",
              value: "50,000+"
            },
            {
              id: "4",
              icon: Trophy,
              title: "Industry Awards",
              value: "15+"
            }
          ]}
          layout="default"
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="Guest Experiences"
          description="Discover what our guests say about their unforgettable stays at Grand Luxe Hotel."
          tag="Reviews"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "CEO",
              company: "TechVentures Inc",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Investment Director",
              company: "Capital Growth Partners",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/12885861/pexels-photo-12885861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Chen"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              role: "Marketing Executive",
              company: "Global Brands Ltd",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Emma Rodriguez"
            },
            {
              id: "4",
              name: "James Wilson",
              role: "Senior Consultant",
              company: "Strategic Solutions",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/8000609/pexels-photo-8000609.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of James Wilson"
            },
            {
              id: "5",
              name: "Sophia Martinez",
              role: "Operations Manager",
              company: "Excellence Corp",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/8558897/pexels-photo-8558897.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sophia Martinez"
            },
            {
              id: "6",
              name: "David Thompson",
              role: "Creative Director",
              company: "Innovation Studios",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/4427630/pexels-photo-4427630.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of David Thompson"
            }
          ]}
          layout="default"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          faqs={[
            {
              id: "1",
              title: "What amenities are included in my stay?",
              content: "All rooms include complimentary Wi-Fi, 24/7 room service, access to our fitness center and spa facilities, concierge services, and daily housekeeping. Premium suites also include butler service and exclusive lounge access."
            },
            {
              id: "2",
              title: "What is your cancellation policy?",
              content: "We offer flexible cancellation up to 24 hours before your scheduled arrival without penalty. Cancellations made within 24 hours of arrival are subject to a one-night stay charge. Special rates and packages may have different cancellation terms."
            },
            {
              id: "3",
              title: "Do you offer airport transportation?",
              content: "Yes, we provide complimentary luxury airport transportation for all guests. Our professional drivers will meet you at arrivals and ensure a comfortable journey to the hotel. Please inform us of your flight details at least 24 hours in advance."
            },
            {
              id: "4",
              title: "Are pets allowed at the hotel?",
              content: "We welcome well-behaved pets with advance notice. There is a pet fee of $50 per night, and pets must remain leashed in common areas. We provide pet beds, bowls, and treats upon arrival. Some restrictions may apply to certain room categories."
            },
            {
              id: "5",
              title: "What dining options are available?",
              content: "Grand Luxe Hotel features three award-winning restaurants: our signature fine dining establishment, a casual bistro, and a rooftop bar with panoramic city views. We also offer 24/7 room service and can accommodate special dietary requirements with advance notice."
            }
          ]}
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know for a perfect stay"
          textPosition="left"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Reservations"
          title="Book Your Luxury Experience"
          description="Ready to experience unparalleled luxury? Contact us to reserve your stay and let us create an unforgettable experience tailored just for you."
          tagIcon={Calendar}
          inputPlaceholder="Enter your email for reservations"
          buttonText="Book Now"
          termsText="By booking with us, you agree to our Terms of Service and Privacy Policy. We'll contact you within 24 hours to confirm your reservation."
          imageSrc="https://images.pexels.com/photos/1755288/pexels-photo-1755288.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Grand Luxe Hotel exterior architecture"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Grand Luxe Hotel"
          columns={[
            {
              items: [
                {
                  label: "Luxury Suites",
                  href: "rooms"
                },
                {
                  label: "Premium Amenities",
                  href: "amenities"
                },
                {
                  label: "Fine Dining",
                  href: "dining"
                },
                {
                  label: "Spa & Wellness",
                  href: "spa"
                }
              ]
            },
            {
              items: [
                {
                  label: "Concierge Services",
                  href: "concierge"
                },
                {
                  label: "Event Spaces",
                  href: "events"
                },
                {
                  label: "Business Center",
                  href: "business"
                },
                {
                  label: "Airport Transfer",
                  href: "transport"
                }
              ]
            },
            {
              items: [
                {
                  label: "Reservations",
                  href: "contact"
                },
                {
                  label: "Guest Reviews",
                  href: "reviews"
                },
                {
                  label: "Special Offers",
                  href: "offers"
                },
                {
                  label: "Contact Us",
                  href: "contact"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
import Link from "next/link";
import Image from "next/image";

import { X, Linkedin, Instagram, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center mb-2">
              <Image
                src="/logo_image_blue.png"
                alt="Kato Video Analytics Logo"
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
            <div className="text-gray-100 text-sm leading-relaxed">
              #348-1A3, Sri Lakshmi Nagar II, Thanneer Pandhal Road, Peelamedu,
              Coimbatore, India - 641004
            </div>
            <div className="flex space-x-4 mt-4">
              {/* X */}
              <a
                href="https://x.com/KatomaranIndia"
                aria-label="X"
                className="text-gray-300 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <X className="w-5 h-5" />
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/katomaran/"
                aria-label="LinkedIn"
                className="text-gray-300 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/katomaran_tbs/#"
                aria-label="Instagram"
                className="text-gray-300 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5" />
              </a>
              {/* GitHub */}
              <a
                href="https://github.com/katomaran-ws"
                aria-label="GitHub"
                className="text-gray-300 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://www.katomaran.com/software-application-development-services-coimbatore/generative-ai"
                  className="text-gray-300 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Generative AI
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.katomaran.com/software-application-development-services-coimbatore/video-analytics"
                  className="text-gray-300 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Video Analytics
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.katomaran.com/software-application-development-services-coimbatore/mobile-development"
                  className="text-gray-300 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.katomaran.com/software-application-development-services-coimbatore/web-development"
                  className="text-gray-300 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.katomaran.com/software-application-development-services-coimbatore/ui-ux-design"
                  className="text-gray-300 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  UI/UX
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.katomaran.com/software-application-development-services-coimbatore/iot-development"
                  className="text-gray-300 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  IoT
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://www.katomaran.com/products-overview"
                  className="text-gray-300 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Product Overview
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.katomaran.com/products-overview/video-management-system"
                  className="text-gray-300 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vms
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.katomaran.com/products-overview/video-analytics"
                  className="text-gray-300 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Video Analytics
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.katomaran.com/products-overview/vsaas"
                  className="text-gray-300 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VSaaS
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.katomaran.com/products-overview/face-recognition"
                  className="text-gray-300 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Face Recognition
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col  justify-center items-center">
          <p className="text-gray-300 text-sm mb-2 md:mb-0">
            Copyright 2018-{new Date().getFullYear()}
          </p>
          <p className="text-gray-300 text-sm">
            Developed with lots of <span className="text-pink-500">♥</span> and{" "}
            <span className="text-blue-400">💡</span> from Katomaran
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

function Footer() {
    return(
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    <div>
                        <h4 className="font-bold text-lg mb-2">About us</h4>
                        <p className="text-sm">
                            Moon Light offers premium products that bring beauty and elegance into your everyday life. We believe in quality and customer satisfaction, with a focus on luxury and sustainability.
                        </p>
                     </div>

                    <div>
                        <h4 className="font-bold text-lg mb-2">Contacts</h4>
                        <ul className="space-y-2">
                        <li><a href="#home" className="text-sm hover:text-tan transition duration-300">Home</a></li>
                         <li><a href="#products" className="text-sm hover:text-tan transition duration-300">Products</a></li>
                        <li><a href="#reviews" className="text-sm hover:text-tan transition duration-300">Reviews</a></li>
                        <li><a href="#contact" className="text-sm hover:text-tan transition duration-300">Contact</a></li>
       
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-2">Contact us</h4>
                        <p className="text-sm">Email: support@moonlight.com</p>
                        <p className="text-sm">Phone: +123 456 789</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-2">Follow Us</h4>
                        <div className="flex justify-center space-x-6">
                             <a href="https://facebook.com" className="text-sm hover:text-tan transition duration-300">Facebook</a>
                             <a href="https://instagram.com" className="text-sm hover:text-tan transition duration-300">Instagram</a>
                             <a href="https://twitter.com" className="text-sm hover:text-tan transition duration-300">Twitter</a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center text-sm">
                    &copy; {new Date().getFullYear()} Moon Light - All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
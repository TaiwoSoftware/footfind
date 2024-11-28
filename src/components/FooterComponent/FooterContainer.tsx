export const FooterContainer: React.FC = () => {
    return (
      <footer className="bg-black text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Foot-finds. All rights reserved.</p>
          <div className="mt-2">
            <a href="/privacy-policy" className="text-white hover:text-gray-400 mx-2">Privacy Policy</a>
            <a href="/terms-of-service" className="text-white hover:text-gray-400 mx-2">Terms of Service</a>
          </div>
        </div>
      </footer>
    );
  };
  
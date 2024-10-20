import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-4">
      <div className="flex justify-center">
        <p className="text-center text-sm">&copy; {new Date().getFullYear()} ashish_sharma. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

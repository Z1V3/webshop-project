
const footerLinks = [
  {
    title: "Facebook",
    href: "https://facebook.com",
  },
  {
    title: "Instagram",
    href: "https://instagram.com",
  },
]

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip mt-32">
      <div className="absolute h-[400px] w-[1600px] z-0 bottom-0 left-1/2 -translate-x-1/2 bg-indigo-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]"></div>
      <div className="container relative z-1">
        <div className="bordert-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-black/50">&copy; 2025. All rights reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map(link => (
              <a href={link.href} key={link.title} className="inline-flex items-center gap-1.5">
                <p>{link.title}</p>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

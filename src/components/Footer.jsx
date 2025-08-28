export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/60 text-sm">© {new Date().getFullYear()} Nebula Voyages. All rights reserved.</p>
        <div className="flex items-center gap-6 text-sm text-white/70">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="mailto:crew@nebulavoyages.com" className="hover:text-white">crew@nebulavoyages.com</a>
        </div>
      </div>
    </footer>
  );
}

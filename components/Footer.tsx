export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-8 py-10 border-t border-[rgba(0,229,255,0.15)]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-4">
        <div className="text-[0.8rem] text-[#8892A4]">
          © {year} Abdulmatiin | Founder, Jasr Labs
        </div>
      </div>
    </footer>
  );
}

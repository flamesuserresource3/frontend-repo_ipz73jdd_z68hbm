import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-slate-950/60 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-8 sm:grid-cols-2 items-center">
          <div>
            <h3 className="text-xl font-semibold">Let’s connect</h3>
            <p className="mt-2 text-slate-300/85">
              Open to collaborations, freelance work, and interesting problems.
            </p>
          </div>
          <div className="flex sm:justify-end gap-3 flex-wrap">
            <a
              href="mailto:vkukreti16@gmail.com"
              className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 py-2 text-slate-100 hover:bg-white/10"
            >
              <Mail size={18} /> Email
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 py-2 text-slate-100 hover:bg-white/10"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 py-2 text-slate-100 hover:bg-white/10"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>
        <p className="mt-10 text-xs text-slate-400">© {new Date().getFullYear()} Vaibhav Kukreti. All rights reserved.</p>
      </div>
    </footer>
  );
}

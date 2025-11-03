import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 sm:grid-cols-2 items-center">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Let’s connect</h3>
            <p className="mt-2 text-gray-600">
              Open to collaborations, freelance work, and interesting problems.
            </p>
          </div>
          <div className="flex sm:justify-end gap-4">
            <a
              href="mailto:your.email@example.com"
              className="inline-flex items-center gap-2 rounded-md border border-gray-200 px-4 py-2 text-gray-800 hover:bg-gray-50"
            >
              <Mail size={18} /> Email
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-gray-200 px-4 py-2 text-gray-800 hover:bg-gray-50"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-gray-200 px-4 py-2 text-gray-800 hover:bg-gray-50"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>
        <p className="mt-10 text-xs text-gray-500">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
}

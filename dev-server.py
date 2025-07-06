#!/usr/bin/env python3
"""
Simple development server for the portfolio website.
Run this script to serve the website locally for testing.
"""

import http.server
import socketserver
import webbrowser
import os
from pathlib import Path

PORT = 8000

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

def main():
    # Change to the directory containing this script
    os.chdir(Path(__file__).parent)
    
    with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
        print(f"🚀 Portfolio development server running at http://localhost:{PORT}")
        print(f"📁 Serving files from: {os.getcwd()}")
        print("🔄 Press Ctrl+C to stop the server")
        print("🌐 Opening browser automatically...")
        
        # Open browser automatically
        webbrowser.open(f'http://localhost:{PORT}')
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n👋 Server stopped. Goodbye!")
            httpd.shutdown()

if __name__ == "__main__":
    main() 
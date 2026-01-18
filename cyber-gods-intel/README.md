<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/19fLYNPIS2d9MgcqNdPFq0YWv9BPbIzal

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

**Kali Linux**
Create a folder for the project 
$mkdir cybergods-intel
$cd cybergods-intel

initialize and install Dependencies
$npm init -y
$npm install @google/genai react react-dom
$npm install -D vite @types/react @types/react-dom typescript

Configure the API key
$export API_KEY='your_actual_api_key_here'

Run the Development Server
$ npx vite

Access the Intel Terminal
Vite will provide a local URL (usually http://localhost:5173). Open Firefox ESR (the default Kali browser), paste the URL, and your CYBERGODS.INTEL terminal will be live.

PRO-TIP FOR KALI USERS:
$npx vite build
$cd dist
python3 -m http.server 8080

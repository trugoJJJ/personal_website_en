const { execSync } = require('child_process');
const ftp = require('basic-ftp');
require('dotenv').config({ path: '.env.local' });

// 🔧 DANE FTP SĄ TERAZ W PLIKU .env.local (NIE COMMITUJ TEGO PLIKU!)
const ftpConfig = {
  host: process.env.FTP_HOST,        
  user: process.env.FTP_USER,                
  password: process.env.FTP_PASSWORD,     
  secure: false
};

const remotePath = '/public_html/'; // Ścieżka do Twojej domeny

async function deploy() {
  try {
    console.log('🚀 Zaczynam wdrażanie...');
    
    // Krok 1: Budowanie aplikacji React
    console.log('📦 Buduję aplikację React...');
    execSync('npm run build', { stdio: 'inherit' });
    console.log('✅ Aplikacja zbudowana!');
    
    // Krok 2: Łączenie z serwerem
    console.log('🔗 Łączę z serwerem CyberFolks...');
    const client = new ftp.Client();
    await client.access(ftpConfig);
    console.log('✅ Połączono z serwerem!');
    
    // Krok 3: Przejście do właściwego folderu
    await client.ensureDir(remotePath);
    
    // Krok 4: Wgrywanie plików
    console.log('⬆️  Wgrywam pliki na serwer...');
    await client.uploadFromDir('./out', remotePath);
    
    client.close();
    
    console.log('');
    console.log('🎉 GOTOWE! Strona została wdrożona!');
    console.log('🌐 Sprawdź swoją domenę w przeglądarce');
    
  } catch (error) {
    console.error('');
    console.error('❌ BŁĄD:', error.message);
    console.error('💡 Sprawdź czy dane FTP są poprawne');
  }
}

deploy();
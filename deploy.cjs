const { execSync } = require('child_process');
const ftp = require('basic-ftp');

// 🔧 ZMIEŃ TE DANE NA SWOJE!
const ftpConfig = {
  host: 's23.cyber-folks.pl',        
  user: 'admingalecki@galecki.website',                // Twój login FTP z panelu
  password: 'Befs250ml***',     // Twoje hasło (to samo co do panelu)
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
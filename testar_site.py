#!/usr/bin/env python3
"""
Script simples para testar se o site está online
"""
import urllib.request
import urllib.error
import time
import ssl

PAGES_URL = "https://lenilsonpinheiro.github.io/portfolio2026/"

def test_site():
    print(f"Testando: {PAGES_URL}\n")
    
    # Cria contexto SSL que aceita certificados
    ssl_context = ssl.create_default_context()
    
    for i in range(5):
        try:
            req = urllib.request.Request(PAGES_URL)
            req.add_header('User-Agent', 'Mozilla/5.0')
            
            with urllib.request.urlopen(req, timeout=10, context=ssl_context) as response:
                status_code = response.getcode()
                content = response.read().decode('utf-8')
                
                if status_code == 200:
                    print(f"[OK] SITE ESTA ONLINE! (Tentativa {i+1})")
                    print(f"Link de producao: {PAGES_URL}")
                    print(f"Status: {status_code}")
                    print(f"Tamanho: {len(content)} bytes")
                    
                    # Verifica se é HTML válido
                    if '<html' in content.lower() and 'lenilson' in content.lower():
                        print("[OK] Conteudo HTML valido detectado!")
                        print("[OK] Portfolio carregado com sucesso!")
                    else:
                        print("[AVISO] Conteudo pode estar incompleto")
                    
                    return True
                else:
                    print(f"[AGUARDANDO] Status {status_code} - Tentativa {i+1}/5")
        except urllib.error.HTTPError as e:
            if e.code == 404:
                print(f"[404] Site ainda nao publicado... Tentativa {i+1}/5")
            else:
                print(f"[AGUARDANDO] Status {e.code} - Tentativa {i+1}/5")
        except Exception as e:
            print(f"[ERRO] Erro de conexao - Tentativa {i+1}/5")
            print(f"   {str(e)[:50]}...")
        
        if i < 4:
            print("   Aguardando 15 segundos...")
            time.sleep(15)
    
    print(f"\n[ERRO] Site ainda nao esta acessivel apos 5 tentativas.")
    print(f"[INFO] Verifique se o GitHub Pages esta ativado em:")
    print(f"   https://github.com/LenilsonPinheiro/portfolio2026/settings/pages")
    print(f"\nPara ativar:")
    print(f"   1. Acesse o link acima")
    print(f"   2. Selecione branch 'main' e folder '/'")
    print(f"   3. Clique em Save")
    print(f"   4. Aguarde 1-5 minutos")
    return False

if __name__ == "__main__":
    test_site()

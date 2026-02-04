#!/usr/bin/env python3
"""
Script para ativar GitHub Pages automaticamente via API
"""
import requests
import json
import time
import sys
import os

# Configurações
REPO_OWNER = "LenilsonPinheiro"
REPO_NAME = "portfolio2026"
GITHUB_API = "https://api.github.com"
PAGES_URL = f"https://{REPO_OWNER}.github.io/{REPO_NAME}/"

def get_github_token():
    """Tenta obter token do GitHub de várias fontes"""
    # 1. Variável de ambiente
    token = os.environ.get('GITHUB_TOKEN')
    if token:
        return token
    
    # 2. Arquivo .env local
    try:
        with open('.env', 'r') as f:
            for line in f:
                if line.startswith('GITHUB_TOKEN='):
                    return line.split('=', 1)[1].strip()
    except:
        pass
    
    # 3. Arquivo token.txt
    try:
        with open('token.txt', 'r') as f:
            return f.read().strip()
    except:
        pass
    
    return None

def activate_github_pages(token):
    """Ativa GitHub Pages via API"""
    url = f"{GITHUB_API}/repos/{REPO_OWNER}/{REPO_NAME}/pages"
    headers = {
        "Authorization": f"token {token}",
        "Accept": "application/vnd.github.v3+json"
    }
    
    data = {
        "source": {
            "branch": "main",
            "path": "/"
        }
    }
    
    try:
        response = requests.put(url, headers=headers, json=data)
        
        if response.status_code == 204 or response.status_code == 200:
            print("✅ GitHub Pages ativado com sucesso!")
            return True
        elif response.status_code == 409:
            print("ℹ️  GitHub Pages já está ativado ou em processo de ativação.")
            return True
        else:
            print(f"❌ Erro ao ativar: {response.status_code}")
            print(f"Resposta: {response.text}")
            return False
    except Exception as e:
        print(f"❌ Erro na requisição: {e}")
        return False

def check_pages_status(token):
    """Verifica status do GitHub Pages"""
    url = f"{GITHUB_API}/repos/{REPO_OWNER}/{REPO_NAME}/pages"
    headers = {
        "Authorization": f"token {token}",
        "Accept": "application/vnd.github.v3+json"
    }
    
    try:
        response = requests.get(url, headers=headers)
        if response.status_code == 200:
            data = response.json()
            status = data.get('status', 'unknown')
            print(f"📊 Status do Pages: {status}")
            if 'url' in data:
                print(f"🌐 URL: {data['url']}")
            return status == 'built'
        return False
    except Exception as e:
        print(f"❌ Erro ao verificar status: {e}")
        return False

def test_site():
    """Testa se o site está acessível"""
    print(f"\n🧪 Testando site: {PAGES_URL}")
    
    for i in range(10):
        try:
            response = requests.get(PAGES_URL, timeout=5)
            if response.status_code == 200:
                print(f"✅ Site está ONLINE! (Tentativa {i+1})")
                print(f"🌐 Acesse: {PAGES_URL}")
                return True
            elif response.status_code == 404:
                print(f"⏳ Site ainda não está disponível... (Tentativa {i+1}/10)")
            else:
                print(f"⚠️  Status {response.status_code} (Tentativa {i+1}/10)")
        except requests.exceptions.RequestException as e:
            print(f"⏳ Aguardando... (Tentativa {i+1}/10)")
        
        if i < 9:
            time.sleep(10)
    
    print("❌ Site ainda não está acessível após 10 tentativas.")
    print("💡 Pode levar alguns minutos. Tente acessar manualmente mais tarde.")
    return False

def main():
    print("🚀 Ativando GitHub Pages automaticamente...\n")
    
    # Tenta obter token
    token = get_github_token()
    
    if not token:
        print("⚠️  Token do GitHub não encontrado!")
        print("\n📝 Para usar este script, você precisa:")
        print("   1. Criar um Personal Access Token no GitHub:")
        print("      https://github.com/settings/tokens")
        print("   2. Dar permissão 'repo' e 'admin:repo_hook'")
        print("   3. Salvar o token em uma das opções:")
        print("      - Variável de ambiente GITHUB_TOKEN")
        print("      - Arquivo .env: GITHUB_TOKEN=seu_token")
        print("      - Arquivo token.txt")
        print("\n💡 Alternativa: Ative manualmente em:")
        print(f"   https://github.com/{REPO_OWNER}/{REPO_NAME}/settings/pages")
        print("\n✅ O workflow do GitHub Actions já está configurado!")
        print("   Após ativar manualmente, o deploy será automático.")
        return
    
    # Ativa Pages
    print("1️⃣ Ativando GitHub Pages...")
    if activate_github_pages(token):
        print("\n2️⃣ Aguardando processamento (30 segundos)...")
        time.sleep(30)
        
        # Verifica status
        print("\n3️⃣ Verificando status...")
        check_pages_status(token)
        
        # Testa site
        print("\n4️⃣ Testando acesso ao site...")
        test_site()
    else:
        print("\n💡 Tente ativar manualmente em:")
        print(f"   https://github.com/{REPO_OWNER}/{REPO_NAME}/settings/pages")

if __name__ == "__main__":
    main()

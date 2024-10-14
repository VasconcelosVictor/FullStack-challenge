# FullStack-challenge ERP

## Funcionalidades

- Cadastrar Produto
- Lista Produto
- Filtra produto
- Deletar Produto

## Requisitos

- Python
- Django
- Mysql
- Node js

## Instalação BackEnd

1. **Clone o repositório:**
    ```bash
    git clone https://github.com/VasconcelosVictor/FullStack-challenge
    cd backend
    ```

2. **Crie e ative um ambiente virtual:**

    ```bash
    python -m venv venv
    source venv/bin/activate  # No Windows, use `venv\Scripts\activate`
    ```

4. **Instale as dependências do backend:**
    ```bash
    pip install -r requirements.txt
    ```

5. **Configure o banco de dados:**

    Crie um banco de dados na sua maquina e modifique as configurações de Banco de Dados pra sua Base.
    ```python
        DATABASES = {
              ''default': {
              'ENGINE': 'django.db.backends.mysql',  
              'NAME': 'NOME_DO_SEU_DATABASE',               
              'USER': 'SEU_USUÁRIO',                     
              'PASSWORD': 'SUA_SENHA',                  
              'HOST': 'localhost',                   
              'PORT': '3306',                      
          }
    
        }
    
     ```

6.  **Crie seus Migrates**

    ```bash
    python manage.py migrate
    ```

7. **Inicie o servidor de desenvolvimento:**
    ```bash
    python manage.py runserver
    ```

## Instalação FrontEnd

1. **Entre na pasta frontEnd**
```bash
  cd frontend/

```
2. **Instale as dependencias do projeto**
   ```bash
   npm install 
   ```
   ou se estiver usando Yarn.
   
   ```bash
   yarn install 
   ```
3. **Inicie o servidor**
  ```bash
   npm start
   ```
  ou se estiver usando Yarn.
  ```bash
   yarn install 
   ```

## Contato

- **Nome:** Victor Vasconcelos
- **LinkedIn:** [meu linkedin](https://www.linkedin.com/in/victor-vasconcelos-barbosa/)

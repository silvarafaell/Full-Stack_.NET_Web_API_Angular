### Curso na Udemy de Seja Full-Stack com .NET Web API e Angular + EF Core - 2022 - .Net 5 e Angular 12

# Montando Setup
- dotnet --list-sdks
- .net 5
- npm i -g @angular/cli@12

# Extensoes VS Code para C#
- C#
- C# Exntesions 
- C# XML Documentation Comments
- NuGet Gallery
- .Net Core Test Explorer 
- .Net Install Tool for Extension Authors

# Executando o codigo do curso
- dotnet tool uninstall --global dotnet-ef
- dotnet tool install --global dotnet-ef --version 5.0.2
- dotnet tool list -g

# EF Core 5
- Instalando EF Core
> dotnet tool list --global
> dotnet tool install --global dotnet-ef --version 5.0.2
- Referencias EF Core
> Microsoft.EntityFrameworkCore 5.0.2
> Microsoft.EntityFrameworkCore.Design 5.0.2
> Microsoft.EntityFrameworkCore.Tools 5.0.2
> Microsoft.EntityFrameworkCore.Sqlite 5.0.2
- Migrations e Database
> dotnet ef migrations list  
> dotnet ef migrations add Initial -o Data/Migrations
> dotnet ef database update 

# Angular - Introdução
- Instalacoes
> npm i -g @angular/cli@12
- Extensoes VS Code
> Angular Essentials (Version 11)
> Angular Files
> Angular Language Service
> Auto Close Tag
> Auto Rename Tag
> Bracket Pair Colorizer 2
> Color Highlight
> Debugger for Chrome
> EditorConfig for VS Code 
> GitLens - 
> Path Intellisense
> TSLint
- Criando Projeto
> npm --version
> node -v
> ng --version - Versao do Angular
> ng new ProEventos-App
- Gerando Componentes 
>  ng g c eventos
> Por Extensao
- Adicionando Bootstrap
> npm install --save @fortawesome/fontawesome-free
> npm install ngx-bootstrap --save
> npm install bootstrap@4

# .Net 5 - Multiplas Camadas
- Solução e Projetos
> dotnet new sln -n ProEventos
> dotnet new classlib -n ProEventos.Persistence
> dotnet new classlib -n ProEventos.Domain
> dotnet new classlib -n ProEventos.Application
- Referenciando Projetos
> dotnet sln ProEventos.sln add ProEventos.Application
> dotnet sln ProEventos.sln add ProEventos.Domain
> dotnet sln ProEventos.sln add ProEventos.API
> dotnet sln ProEventos.sln add ProEventos.Persistence
> dotnet build
> dotnet add ProEventos.API/ProEventos.API.csproj reference ProEventos.Application
- Migrations
> dotnet ef migrations add Initial -p  ProEventos.Persistence -s ProEventos.API
- database update
> dotnet ef database update -s ProEventos.API

# Angular - Organizar, Rota, Alert e +
- Adicionando NGX Toastr
> npm install ngx-toastr --save
> npm install @angular/animations --save
- NGX Spinner - Carregando
> npm install ngx-spinner --save

# Angular - Ractive Forms e Mudança de Layout 
- Referencias Bootswatch
> npm install bootswatch
- Subcomponentes e subRotas
> ng g c components/eventos/evento-detalhe --module app
> ng g c components/eventos/evento-lista --module app
- User, Login e Registration
> ng g c components/user --module app
> ng g c components/user/login --module app
> ng g c components/user/registration --module app

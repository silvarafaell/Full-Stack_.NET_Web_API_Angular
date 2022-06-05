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

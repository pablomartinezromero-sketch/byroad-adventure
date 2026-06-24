# Publica Byroad Adventures en GitHub
# Uso: .\scripts\publish-github.ps1 -RepoName "byroad-adventure" -GitHubUser "tu-usuario"

param(
    [Parameter(Mandatory = $true)]
    [string]$RepoName,

    [Parameter(Mandatory = $true)]
    [string]$GitHubUser,

    [ValidateSet("public", "private")]
    [string]$Visibility = "private"
)

$ErrorActionPreference = "Stop"
$ProjectRoot = Split-Path -Parent $PSScriptRoot
Set-Location $ProjectRoot

$git = Get-Command git -ErrorAction SilentlyContinue
if (-not $git) {
    Write-Host "Git no está instalado. Instálalo desde https://git-scm.com/download/win" -ForegroundColor Red
    Write-Host "O ejecuta: winget install Git.Git" -ForegroundColor Yellow
    exit 1
}

if (-not (Test-Path ".git")) {
    git init
    git branch -M main
}

git add .
git status

$hasCommits = git rev-parse --verify HEAD 2>$null
if (-not $hasCommits) {
    git commit -m "Initial commit: Byroad Adventures landing"
} else {
    $pending = git status --porcelain
    if ($pending) {
        git commit -m "Update: Byroad Adventures landing"
    } else {
        Write-Host "No hay cambios pendientes para commitear." -ForegroundColor Yellow
    }
}

$remoteUrl = "https://github.com/$GitHubUser/$RepoName.git"
$existingRemote = git remote get-url origin 2>$null

if (-not $existingRemote) {
    git remote add origin $remoteUrl
    Write-Host "Remote añadido: $remoteUrl" -ForegroundColor Green
} else {
    Write-Host "Remote origin ya existe: $existingRemote" -ForegroundColor Cyan
}

$gh = Get-Command gh -ErrorAction SilentlyContinue
if ($gh) {
    $repoExists = gh repo view "$GitHubUser/$RepoName" 2>$null
    if (-not $repoExists) {
        if ($Visibility -eq "private") {
            gh repo create $RepoName --private --source=. --remote=origin --push
        } else {
            gh repo create $RepoName --public --source=. --remote=origin --push
        }
        Write-Host "Repositorio creado y código subido." -ForegroundColor Green
        exit 0
    }
}

Write-Host ""
Write-Host "Si el repo aún no existe en GitHub:" -ForegroundColor Yellow
Write-Host "  1. Ve a https://github.com/new" -ForegroundColor White
Write-Host "  2. Nombre: $RepoName" -ForegroundColor White
Write-Host "  3. Visibilidad: $Visibility" -ForegroundColor White
Write-Host "  4. NO marques 'Add a README' (ya existe en el proyecto)" -ForegroundColor White
Write-Host "  5. Ejecuta: git push -u origin main" -ForegroundColor White
Write-Host ""

git push -u origin main
